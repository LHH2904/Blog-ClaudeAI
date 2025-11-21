import Link from 'next/link';
import DarkModeToggle from "@/components/DarkModeToggle";

export default function BlogSidebar() {
    return (
        <aside className="sidebar w-full py-5 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                        Blog
                    </h2>
                    <nav className="flex gap-4">
                        <Link
                            href="/"
                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        >
                            About
                        </Link>
                    </nav>
                </div>
                <DarkModeToggle/>
            </div>
        </aside>
    );
}