"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { themeChange } from "theme-change";
import { useState, useEffect } from "react";

// export function ThemeToggle() {
// 	const { setTheme, theme } = useTheme();
// 	useEffect(() => {
// 		themeChange(false);
// 	}, []);
// 	return (
// 		<label className="swap">
// 			<input type="checkbox" className="theme-controller" />
// 			<Sun className="swap-off h-5 w-5 " />
// 			<Moon className="swap-on h-5 w-5 " />
// 			<span className="sr-only">Toggle theme</span>
// 		</label>
// 	);
// }

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<select value={theme} onChange={(e) => setTheme(e.target.value)}>
			<option value="system">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	);
}

export default ThemeToggle;
