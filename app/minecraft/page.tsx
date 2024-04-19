"use client";

import { Alert, TextField } from "@mui/material";
import { Button, Card, Divider, Text, Title } from "@tremor/react";
import axios from "axios";
import React, { useState } from "react";
import { McContext, McResponce } from "../contexts/minecraft-context";
import InfoAleart from "../components/aleart";
import { SessionProvider, useSession } from "next-auth/react";
import SessionUploader from "../components/sessionuploader";
import DatabasePutter from "../components/databaseputter";
import image from "../images/2024-04-16_10.44.16.png";
import Image from "next/image";

export default function LinkMinecraftPage() {
    const [code, setcode] = useState<string>();
    const [changed, setchanged] = useState(false);
    const [mc, setmc] = useState<McResponce | undefined>();
    const { data: session } = useSession();

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Card>
                <Title>Link Minecraft</Title>
                <Text>WorldPresetのModの設定で表示されたコードをここに入力してMinecraftと連携します。</Text>
                <Divider />
                <div>
                    <div>
                        <TextField onChange={(value) => {
                            setcode(value.target.value);
                            if (code) {
                                setchanged(true);
                            }
                        }} className="h-20" placeholder="ここにコードを入力..."></TextField>
                    </div>

                    <Button onClick={async () => {
                        if (code) {
                            if (code != "" && new RegExp(/[0-9]{5}/).test(code)) {
                                var res = await fetch(`/api/minecraft?code=${code}`, {
                                    mode: 'cors',
                                    cache: 'reload',
                                    headers: {
                                        'Access-Control-Allow-Methods': 'GET',
                                        'Access-Control-Allow-Headers': 'X-Requested-With'
                                    }
                                });
                                var text = await res.text();
                                if (text) {
                                    const mc = JSON.parse(text).res as McResponce;
                                    setmc(mc);
                                }
                                else {
                                    setmc(undefined);
                                }
                            }
                        }
                    }}>連携する</Button>
                </div>

                {
                    mc ? mc.ok ? <InfoAleart ok={mc?.ok} /> ? mc.ok && session ? <div>
                        <Divider />
                        <InfoAleart ok={mc?.ok ?? false} />
                        <Divider />
                        <SessionUploader mc={mc} session={session} />
                        <DatabasePutter mc={mc} session={session} />
                    </div> : <></> : <></> : <></> : <></>
                }
                <Divider />
                <Text>認証画面の一例：</Text>
                <Image src={image.src} alt={image.src} width={854} height={480}/>
            </Card>
        </main>
    )
}