import { Box, Modal, Switch, TextField } from "@mui/material";
import { Divider, Text } from "@tremor/react";
import React, { ReactNode, useState } from "react";
import { WorldPresetConfigModel } from "../worldpresetconfigmodel";
import JsonView from "@uiw/react-json-view";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditorModal({ children, open, options, onClose }: { children: ReactNode; open: boolean; options: { selected_key: string; selectedpath: string | undefined; type: string; jsonobject: any; }; onClose: (value: string) => void; }) {
    const [res, setres] = useState<any>();


    return (
        <Modal open={open} onClose={() => {
            onClose(res);
        }}>
            <Box sx={style}>
                {
                    Object.entries(options).map(([key, value]) => {
                        return key == "selected_path" ? <Text key={key}>{key}:<JsonView value={value} /></Text> : <></>
                    })
                }
                {options.type == "string" ? <TextField value={""} /> : options.type == "bool" ? <Switch /> : options.type == "int" ? <TextField type="number" /> : <></>}
                {children}
            </Box>
        </Modal>
    )
}