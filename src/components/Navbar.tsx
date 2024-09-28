import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/store/StoreProvider";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/redux/state";


import {
    Search,
    Settings,
    ArrowRightFromLine,
    Sun,
    Moon
} from "lucide-react";
import { cn } from "@/lib/utils";


export const Navbar = () => {
    const dispatch = useAppDispatch();

    const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector(state => state.global.isDarkMode);

    return (
        <header className="flex items-center justify-between bg-neutral-100 dark:bg-neutral-900 px-4 py-3">
            <nav className="flex items-center gap-8">
                {!isSidebarCollapsed ? null : (
                    <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
                        <ArrowRightFromLine className="size-6 cursor-pointer dark:text-neutral-100" />
                    </button>
                )}
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
                <button
                    onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
                    className={cn("h-min w-min rounded-md p-2 transition-all duration-300 ease-in-out", 
                        isDarkMode ?
                        "dark:hover:bg-neutral-700" :
                        "hover:bg-neutral-300")
                        }
                >
                    {isDarkMode ? (
                        <Sun className="size-6 cursor-pointer dark:text-neutral-100" />
                    ) : (
                        <Moon className="size-6 cursor-pointer dark:text-neutral-100" />
                    )}
                </button>
                <Link href="/settings" className="h-min w-min rounded-md p-2 hover:bg-neutral-100">
                    <Settings className="size-6 cursor-pointer dark:text-neutral-100" />
                </Link>
                <aside className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-neutral-300 md:inline-block" />
            </nav>
        </header>
    )
}