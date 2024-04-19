import React, { useState, useEffect, useContext } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { classNames } from '../navbar';
import { IconButton, MenuItem, Select } from '@mui/material';
import { themeContext } from '../hooks/useTheme';

export function ToggleTheme({ dark }: {
	dark: boolean;
}): React.JSX.Element {
	const [mounted, setMounted] = useState(false);
	const th = useTheme();
	const context = useContext(themeContext);

	useEffect(() => setMounted(true), [])

	return (
		<div className='className="h-8 w-8 rounded-full"' onClick={()=>{ context.setIsDark(!context.dark) }}>
			<div style={{ borderRadius: "50%", width: "32px", height: "32px", background: context.dark ? "black" : "white", cursor: "pointer" }}></div>
		</div>
	);
}
