import { createContext, useCallback, useState } from "react";

export const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee",
		color: "#000000"
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222",
		color: "#ffffff"
	}
};

type ThemeContext = {
	dark: boolean;
	setIsDark: (isDark: boolean) => void;
};

const defaultContext: ThemeContext = {
	dark: false,
	setIsDark: () => { },
};

export const themeContext = createContext<ThemeContext>(defaultContext);

export const useTheme = (): ThemeContext => {
	// state名はThemeContext typeのプロパティに合わせる。
	const [dark, setDark] = useState(false);
	// 関数名はThemeContext typeのプロパティに合わせる。
	const setIsDark = useCallback((current: boolean): void => {
		setDark(current);
	}, []);
	return {
		dark,
		setIsDark,
	};
};