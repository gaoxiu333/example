"use client";
import { useTheme } from "@/features/theme-provider";
import { Atom } from "lucide-react";

export const Nav = () => {
  const { theme, setTheme } = useTheme()!;
  const onToggle = () => {
    console.log("click");
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="container flex h-[64px] flex-row items-center justify-between bg-amber-300 text-blue-800">
      <div className="flex items-center gap-2">
        <Atom /> Blog
      </div>
      <ul className="flex items-center gap-4">
        <li>Home</li>
        <li>Effect</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          当前主题：{theme} <button onClick={onToggle}>切换主题</button>
        </li>
      </ul>
    </nav>
  );
};
