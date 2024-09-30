import { PageHeader } from "@/components/PageHeader";
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

