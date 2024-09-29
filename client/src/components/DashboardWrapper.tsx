"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import StoreProvider, { useAppSelector } from "@/redux/store/StoreProvider";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";


export const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector(state => state.global.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="flex min-h-screen w-full bg-neutral-100 text-neutral-900">
            <aside className="">
                <Sidebar />
            </aside>
            <main className={cn("flex w-full flex-col bg-neutral-100 dark:bg-neutral-900",
                isSidebarCollapsed ? "md:pl-0" : "md:pl-64",
            )}>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </StoreProvider>
    )
}