"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { setIsSidebarCollapsed } from "@/redux/state";
import { useAppDispatch, useAppSelector } from "@/redux/store/StoreProvider";

import { 
    X,
    User,
    Lock, 
    Home,
    Users,
    Search,
    Settings,
    Briefcase,
    LucideIcon,        
} from "lucide-react";



export const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriorities, setShowPriorities] = useState(true);

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);

    return (
        <aside className={cn("fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 ease-in-out z-40 dark:bg-neutral-900 overflow-y-auto bg-neutral-100",
            isSidebarCollapsed ? "w-0 hidden" : "w-64",
        )}>
            <nav className="flex h-full w-full flex-col justify-start">
                {/* Top Logo */}
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-neutral-100 dark:bg-neutral-900 px-8 pt-3">
                    <span className="text-xl font-semibold tracking-tighter leading-3 text-neutral-800 dark:text-neutral-200">
                        align
                    </span>
                    {isSidebarCollapsed ? null : (
                        <button
                            className="py-3"
                            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
                        >
                            <X className="size-6 text-neutral-800 hover:text-muted-foreground dark:text-neutral-200" />
                        </button>
                    )}
                </div>

                {/* Team */}
                <div className="flex items-center gap-5 border-y-[1.5px] border-neutral-200 dark:border-neutral-700 px-8 py-4">
                    <Image
                        src="/logo.svg"
                        alt="App Logo"
                        width={40}
                        height={40}
                    />
                    <div>
                        <h3 className="text-md font-bold tracking-tighter leading-3 text-neutral-800 dark:text-neutral-200">Align</h3>
                        <div className="mt-1 flex items-start gap-2">
                            <Lock className="mt-[0.1rem] size-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Private</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Links */}
                <ul className="z-10 w-full">
                    <SidebarLinks
                        icon={Home}
                        label="Home"
                        href="/"
                    />
                    <SidebarLinks
                        icon={User}
                        label="User"
                        href="/users"
                    />
                    <SidebarLinks
                        icon={Users}
                        label="Teams"
                        href="/teams"
                    />
                    <SidebarLinks
                        icon={Briefcase}
                        label="Timeline"
                        href="/timeline"
                    />
                    <SidebarLinks
                        icon={Search}
                        label="Search"
                        href="/search"
                    />
                    <SidebarLinks
                        icon={Settings}
                        label="Settings"
                        href="/settings"
                    />
                </ul>
            </nav>
        </aside>
    );
};

interface SidebarLinkProps {
    href: string,
    label: string,
    icon: LucideIcon,
}

const SidebarLinks = ({
    href,
    label,
    icon: Icon,
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");


    return (
        <Link href={href} className="w-full">
            <div className={cn("relative flex cursor-pointer items-center gap-3 transition-colors duration-300 ease-in-out hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-700 justify-start px-8 py-3",
                isActive ? "bg-neutral-100 dark:bg-neutral-700" : "",
            )}>
                {isActive && (
                    <span className={cn("absolute left-0 top-0 h-full w-[5px] bg-blue-300")} />
                )}
                <Icon className="size-6 text-neutral-800 dark:text-neutral-200" />
                <p className="font-medium text-neutral-800 dark:text-neutral-200">
                    {label}
                </p>

            </div>
        </Link>
    )
}