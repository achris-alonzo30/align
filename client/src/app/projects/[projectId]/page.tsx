"use client";

import { useState } from "react";
import { ProjectHeader } from "./ProjectHeader";

export const ProjectIdPage = ({ params } : { params: { projectId: string }}) => {
    const { projectId } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);    

    return (
        <div>
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    )
}