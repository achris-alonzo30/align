export interface Project {
    id: number,
    name: string,
    description?: string,
    startDate?: string,
    endDate?: string
}

export interface Task {
    id: number;
    tags?: string;
    title: string;
    status?: Status;
    points?: number;
    dueDate?: string;
    priority?: Priority;
    projectId: number;
    startDate?: string;
    description?: string;
    authorUserId?: number;
    assignedUserId?: number;
}

export interface Status {

}

export enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
    Urgent = "Urgent"
}