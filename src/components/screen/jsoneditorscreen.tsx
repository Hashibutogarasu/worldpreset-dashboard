"use client";

import { Button, Card, CircularProgress, Stack, Tooltip } from "@mui/material";
import { JsonEditor } from "../jsoneditor";
import { worldpresetdefaultconfig } from "@/config/minecraft/worldpreset/defaultconfig";
import { useState } from "react";
import { Check, Error } from "@mui/icons-material";
import { useLoading } from "@/providers/loadingprovider";

export function JsonEditorScreen() {
    const [config, setconfig] = useState<any>(worldpresetdefaultconfig);
    const [error, seterror] = useState<boolean>(false);
    const [message, setmessage] = useState<string>("{}");
    const loading = useLoading();

    return <Card>
        {
            <div style={{
                margin: "10px"
            }}>
                <JsonEditor jsonstr={config} onChange={(value, error, message) => {
                    setconfig(value);
                    seterror(error);
                    setmessage(message);
                }} onLoaded={() => {
                    loading.setloading(false);
                }} />
                <Stack>
                    <center>
                        <Tooltip title={error ? "パースエラー：一部のキーが一致していません" : "エラーは見つかりませんでした"}>
                            {
                                !loading.isloading ? (error ? <Error color="error" /> : <Check color="success" />) : <CircularProgress />
                            }
                        </Tooltip>
                    </center>
                    <Button color="primary">保存</Button>
                </Stack>
            </div>
        }
    </Card>
}