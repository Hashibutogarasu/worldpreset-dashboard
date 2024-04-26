"use client";

import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme as useNextTheme } from 'next-themes';
import { ThemeProvider as NextThemeProvier } from "next-themes";
import { CircularProgress, CssBaseline } from "@mui/material";
import { useLocalStorage, useSessionStorage } from 'react-use';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LoadingProvider } from './loadingprovider';

export const ColorModeContext = createContext({
	toggleColorMode: () => { },
});

export function ThemeSwitcher() {
	const muitheme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<IconButton sx={{ ml: 1 }} onClick={() => {
			colorMode.toggleColorMode();
		}} color="inherit">
			{muitheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
}

export default function Providers({ children, isdark }: { children: React.ReactNode; isdark: boolean }) {
	const [session_dark, setsession_Isdark] = useLocalStorage<boolean>("isdark", isdark);
	const [dark, setIsdark] = useState<boolean>(session_dark ?? true);
	const { theme, resolvedTheme, themes, setTheme } = useNextTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setIsdark((prevMode) => (!prevMode));
				setTheme((prevMode) => (prevMode === 'dark' ? 'dark' : 'light'));
				setsession_Isdark(!dark);
			},
		}),
		[],
	);

	const muitheme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: dark ? "dark" : "light",
				},
			}),
		[dark],
	);

	return (
		mounted ? <body style={{
			backgroundColor: dark ? "black" : "white",
		}} className={`dark:bg-primary-950 dark:text-body-white`}>
			<ThemeProvider theme={muitheme}>
				<ColorModeContext.Provider value={colorMode}>
					<NextThemeProvier attribute="class">
						<LoadingProvider>
							<CssBaseline />
							{children}
						</LoadingProvider>
					</NextThemeProvier>
				</ColorModeContext.Provider>
			</ThemeProvider>
		</body> : <body><center><CircularProgress /></center></body>
	);
}