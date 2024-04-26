"use client";

import SearchAppBar from "../header";
import { useSessionStorage } from "react-use";
import Providers from "@/providers/themeswtcher";

export function Screen({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useSessionStorage<boolean>("isdark", false);

    return <Providers isdark={mode as boolean} >
        <div className="App">
            <SearchAppBar />
            <div style={{
                height: "80px",
            }} />
            <center>
                {children}
            </center>
        </div>
    </Providers>
}