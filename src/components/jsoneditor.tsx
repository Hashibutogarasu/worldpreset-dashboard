import React, { useContext, useState } from "react";
import Editor from "@monaco-editor/react";
import { Config, ConfigType, worldpresetdefaultconfig } from "@/config/minecraft/worldpreset/defaultconfig";
import { LinearProgress, useTheme } from "@mui/material";
import { ColorModeContext } from "@/providers/themeswtcher";

export function JsonEditor({ jsonstr, onChange, onLoaded }: { jsonstr: any; onChange: (value: Config, error: boolean, message: string) => void, onLoaded: () => void }) {
    const [json, setJson] = useState<any>(jsonstr);
    const colorMode = useTheme();

    return (
        <div style={{
            height: "500px",
        }}>
            <Editor
                theme={colorMode.palette.mode == "dark" ? "vs-dark" : undefined}
                options={{
                    minimap: {
                        enabled: false
                    },
                    suggest: {
                        showWords: false,
                        showClasses: false,
                        showSnippets: false,
                        showColors: false,
                        showConstants: false,
                        showConstructors: false,
                        showFields: false,
                        showDeprecated: false,
                        showEnumMembers: false,
                        showEnums: false,
                        showEvents: false,
                        showFiles: false,
                        showFolders: false,
                        showFunctions: false,
                        showIcons: false,
                        showInlineDetails: false,
                        showInterfaces: false,
                        showIssues: false,
                        showKeywords: false,
                        showMethods: false,
                        showModules: false,
                        showOperators: false,
                        showProperties: false,
                        showReferences: false,
                        showStatusBar: false,
                        showStructs: false,
                        showTypeParameters: false,
                        showUnits: false,
                        showUsers: false,
                        showValues: false,
                        showVariables: false,
                    }
                }} language="json" onMount={() => {
                    onLoaded();
                }} loading={<div></div>} value={JSON.stringify(jsonstr, null, 4)} onChange={async (e) => {
                    if (e) {
                        try {
                            ConfigType.parseAsync(JSON.parse(e)).then(value => {
                                setJson(value);
                                onChange(value, false, "");
                            }).catch(e => {
                                onChange(json, true, e);
                            });
                        }
                        catch{
                            onChange(json, true, e);
                        }
                    }
                    else{
                        onChange(json, true, "");
                    }
                }}>

            </Editor>
        </div>
    );
}