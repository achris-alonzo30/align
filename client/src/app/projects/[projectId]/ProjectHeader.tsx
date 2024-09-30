import { useState } from "react";
import { cn } from "@/lib/utils";

import { PageHeader } from "@/components/PageHeader";
import { Clock, Filter, Grid3X3, List, Share2, Table } from "lucide-react";

interface ProjectHeaderProps {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}
export const ProjectHeader = ({
    activeTab,
    setActiveTab
}: ProjectHeaderProps) => {
    const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

    return (
        <header className="px-4 xl:px-6">
            <nav className="py-6 lg:pb-4 lg:pt-8">
                <PageHeader name="Product Design Development" />
            </nav>
            <nav className="flex flex-wrap-reverse gap-2 border-y border-neutral-200 py-2 dark:border-neutral-700 md:items-center">
                <div className="flex flex-1 items-center gap-2 md:gap-4">
                    <TabButton
                        name="Board"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        icon={<Grid3X3 className="size-5" />}
                    />
                    <TabButton
                        name="List"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        icon={<List className="size-5" />}
                    />
                    <TabButton
                        name="Timeline"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        icon={<Clock className="size-5" />}
                    />
                    <TabButton
                        name="Table"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        icon={<Table className="size-5" />}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="text-muted-foreground hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300">
                        <Filter className="size-5" />
                    </button>
                    <button className="text-muted-foreground hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300">
                        <Share2 className="size-5" />
                    </button>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Task..."
                            className="rounded-md border py-1 pl-10 pr-4 focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                        <Grid3X3 className="absolute left-3 top-2 size-4 text-neutral-400 dark:text-neutral-500" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

interface TabButtonProps {
    name: string;
    activeTab: string;
    icon: React.ReactNode;
    setActiveTab: (activeTab: string) => void;
}

const TabButton = ({
    name,
    icon,
    activeTab,
    setActiveTab
}: TabButtonProps) => {
    const isActive = activeTab === name
    return (
        <button
            className={cn("relative flex items-center gap-2 px-1 py-2 text-muted-foreground after:absolute after:-bottom-[9px] after:left-0 after-[1px] after:w-full hover:text-blue-600 dark:hover:text-neutral-100 sm:px-2 lg:px-4",
                isActive ? "text-blue-600 after:bg-blue-600 dark:text-neutral-100" : "",
            )}
            onClick={() => setActiveTab(name)}
        >
            {icon}
            {name}
        </button>
    )
}

