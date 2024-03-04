"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export function ThemeToggle() {
	const [targetTheme, setTargetTheme] = useState<"light" | "dark">("dark");
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		themeChange(false);
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<label className="swap">
			<input
				type="checkbox"
				className="theme-controller"
				value={targetTheme}
				onChange={(e) => {
					const nextTheme = e.target.checked ? targetTheme : targetTheme === "light" ? "dark" : "light";
					setTheme(nextTheme);
				}}
			/>
			<Sun className="swap-off h-5 w-5 " />
			<Moon className="swap-on h-5 w-5 " />
			<span className="sr-only">Toggle theme</span>
		</label>
	);
}

export default ThemeToggle;
