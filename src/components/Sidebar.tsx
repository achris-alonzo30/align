"use client";

import { Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react"

export const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriorities, setShowPriorities] = useState(true);
    return (
        <aside className="fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 ease-in-out z-40 dark:bg-neutral-900 overflow-y-auto bg-neutral-100 w-64 ">
            <nav className="flex h-full w-full flex-col justify-start">
                {/* Top Logo */}
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-neutral-100 dark:bg-neutral-900 px-8 pt-3">
                    <span className="text-xl font-semibold tracking-tighter leading-3 text-neutral-800 dark:text-neutral-200">
                        align
                    </span>
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

                {/* Navbar Links */}
                
            </nav>
        </aside>
    )
}