import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";
import { useState } from "react";


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

