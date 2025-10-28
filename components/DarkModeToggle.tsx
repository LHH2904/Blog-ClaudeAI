'use client'
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    // Kiểm tra theme hiện tại khi load trang
    useEffect(() => {
        if (document.documentElement.classList.contains("dark")) {
            setIsDark(true);
        }
    }, []);

    // Chuyển đổi theme
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
    };

    return(
        <button
            onClick={toggleTheme}
            className="rounded-full p-2 transition-colors bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
            title="Toggle Theme"
        >
            {isDark ? (
                // Icon mặt trăng → đang dark
                <span className="text-yellow-300 text-lg">☀️</span>
            ) : (
                // Icon mặt trời → đang light
                <span className="text-zinc-700 text-lg">🌙</span>
            )}
        </button>
    )
}