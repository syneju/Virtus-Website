"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	return (
		<label className="swap">
			<input
				value={theme}
				type="checkbox"
				className="theme-controller"
				onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
			/>
			<Sun className="swap-off h-5 w-5 " />
			<Moon className="swap-on h-5 w-5 " />
			<span className="sr-only">Toggle theme</span>
		</label>
	);
}

export default ThemeToggle;
