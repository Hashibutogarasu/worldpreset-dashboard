"use client";

import * as React from "react";
import { DefaultConfig } from "../worldpresetconfigmodel";
import JsonView, { JsonViewProps } from '@uiw/react-json-view';
import { Card, Divider, Text } from "@tremor/react";
import { Button, FormControl, FormControlLabel, Grid, Modal, Switch, TextField, useMediaQuery } from "@mui/material";
import JsonUtils from "./jsonutils";
import { githubLightTheme } from '@uiw/react-json-view/githubLight';
import { githubDarkTheme } from '@uiw/react-json-view/githubDark';
import { themeContext, useTheme } from "../../hooks/useTheme";

export const jsonpathmap = {
    "worldcreator": "worldcreator",
    "gamerules": "gamerules",
    "userid": "userid",
    "generatorOptionsHolder": "worldcreator/generatorOptionsHolder",
    "entries": "gamerules/entries",
} as any;

export default function WorldPresetJsonEditor() {
    const [config, setconfig] = React.useState<any>(new DefaultConfig("9fc35160-1078-4b92-a06d-39415024a227").getGamerulesEntries());
    const [focused_key, setfocused_key] = React.useState<string>("");
    const [focused_type, setfocused_type] = React.useState<string>("");
    const [focused_value, setfocused_value] = React.useState<string>("");
    const [focused_parent_key, setfocused_parent_key] = React.useState<string>("");

    const [selected_key, setselected_key] = React.useState<string>("");
    const [selected_type, setselected_type] = React.useState<string>("");
    const [selected_value, setselected_value] = React.useState<string>("");
    const [path, setpath] = React.useState<string>("");
    const matches = useMediaQuery('(min-width:600px)');
    const context = React.useContext(themeContext);
    const dark = context.dark;

    function onchange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const value = e.target.value;

        if (selected_type == "bool") {
            setselected_value(selected_value != "true" ? "true" : "false");
        }
        else {
            setselected_value(value);
        }

        const editedjson = JsonUtils.edit(config, path, value, selected_type);
        setconfig(editedjson);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <JsonView style={dark ? githubLightTheme : githubDarkTheme} id="editor" onMouseMove={(e) => {
                    const target = document.getElementById("editor") as HTMLElement;
                    if (target) {
                        const selecteditems = (Array.from(target.getElementsByClassName("w-rjv-line"))).map((element) => {
                            if (element) {
                                return Array.from(element?.children).map((line_child) => {
                                    if (line_child) {
                                        if (element.getElementsByClassName("w-rjv-copied")) {
                                            return line_child as HTMLElement;
                                        }
                                    }
                                });
                            }
                        });

                        const selected = selecteditems.map((item) => {
                            return item?.filter((item): item is Exclude<typeof item, undefined> => item !== undefined);
                        }).filter((item): item is Exclude<typeof item, undefined> => item !== undefined);

                        selected.forEach((item) => {
                            item.forEach((element) => {
                                const parent = (element.parentElement as HTMLElement);
                                if (element.classList.contains("w-rjv-copied")) {
                                    setfocused_key(((parent.getElementsByClassName("w-rjv-object-key") ?? []).item(0) as HTMLElement)?.innerText);
                                    setfocused_type(((parent.getElementsByClassName("w-rjv-type") ?? []).item(0) as HTMLElement)?.innerText);
                                    setfocused_value(((parent.getElementsByClassName("w-rjv-value") ?? []).item(0) as HTMLElement)?.innerText);
                                    setfocused_parent_key(((parent.parentElement?.parentElement?.getElementsByClassName("w-rjv-curlybraces-start").item(0)?.parentElement?.getElementsByClassName("w-rjv-object-key") ?? [])[0] as HTMLElement)?.innerText);
                                }
                            });
                        });
                    }
                }} onClick={(e) => {
                    const target = (e.target as HTMLDivElement);
                    const arrow = "w-rjv-arrow";
                    const parent = Array.from(target.parentElement?.parentElement?.children ?? []);
                    const filtered = parent.filter(item => item.classList.contains(arrow));

                    if (!(target.parentElement?.classList.contains(arrow) || filtered.length > 0)) {
                        setselected_key(focused_key);
                        setselected_type(focused_type);
                        setselected_value(focused_value);
                        setpath(`${jsonpathmap[focused_parent_key] ?? focused_parent_key}/${focused_key}`);
                    }
                }} value={config} />
            </Grid>
            <Grid item xs={4}>
                <div style={matches ? { position: "fixed", display: "flex" } : {}}>
                    <FormControl>
                        {
                            selected_type == "string" ?
                                <TextField onChange={onchange} label={selected_key} size="small" value={selected_value} /> :
                                selected_type == "bool" ?
                                    <FormControlLabel label={selected_key} control={<Switch onChange={onchange} checked={selected_value == "true" ? true : false} value={selected_value == "true" ? true : false} />} /> : selected_type == "int" ?
                                        <TextField onChange={onchange} label={selected_key} size="small" value={selected_value} type="number" /> : selected_key == "userid" || selected_type == "null" || selected_type == "undefined" ? <></> : <></>
                        }
                    </FormControl>
                </div>
            </Grid>
        </Grid>
    );
}