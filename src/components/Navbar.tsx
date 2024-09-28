import { Search, Settings } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <header className="flex items-center justify-between bg-neutral-100 dark:bg-neutral-900 px-4 py-3">
            <nav className="flex items-center gap-8">
                <aside className="relative flex h-min w-[200px]">
                    <Search className="absolute left-2 top-1/2 mr-2 size-5 -translate-y-1/2 transform cursor-pointer dark:text-neutral-100" />
                    <input 
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded border-none bg-neutral-100 p-2 pl-8 placeholder-neutral-500 focus:border-transparent focus:outline-none dark:bg-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-100" 
                    />
                </aside>
            </nav>
            <nav className="flex items-center gap-4">
                <Link href="/settings" className="h-min w-min rounded-md p-2 hover:bg-neutral-100">
                    <Settings className="size-6 cursor-pointer dark:text-neutral-100" />
                </Link>
                <aside className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-neutral-300 md:inline-block" />
            </nav>
        </header>
    )
}