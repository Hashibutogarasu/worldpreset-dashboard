"use client";

import { SessionProvider } from "next-auth/react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../navbar";
import IndexPage from "../page";
import LinkMinecraftPage from "../minecraft/page";
import { useContext, useEffect, useState } from "react";
import { themeContext, useTheme } from '../hooks/useTheme';
export const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Link Minecraft", href: "/minecraft" }
];

export const Root = () => {
    const [isClient, setIsClient] = useState(false);
    const dark = useContext(themeContext);
    const theme = useTheme();

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient) {
        return <themeContext.Provider value={theme}>
            <BrowserRouter>
                <SessionProvider>
                    <Navbar />
                    <Routes key={"routes"}>
                        <Route key={"home"} path="/" element={<IndexPage />} />,
                        <Route key={"minecraft"} path="/minecraft" element={<LinkMinecraftPage />} />,
                        <Route key={"500"} path="/500" element={<div></div>} />,
                        <Route key={"*"} path="*" element={<div></div>} />
                    </Routes>
                </SessionProvider>
            </BrowserRouter>
        </themeContext.Provider>
    }
}