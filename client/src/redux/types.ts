export interface Project {
    id: number,
    name: string,
    description?: string,
    startDate?: string,
    endDate?: string
}

export interface User {
    userId?: number;
    username: string;
    email: string;
    profilePirctureUrl?: string;
    cognitoId?: string;
    teamId?: number;
}

export interface Attachment {
    id: number;
    fileURL: string;
    fileName: string;
    taskId: number;
    uploadedById: number;
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

    author?: User;
    assignee?: User;
    comments?: Comment[],
    attachments?: Attachment[]
}

export enum Status {
    todo = "To Do",
    inProgress = "In Progress",
    underReview = "Under Review",
    done = "Done"
}

export enum Priority {
    backlog = "Backlog",
    Low = "Low",
    Medium = "Medium",
    High = "High",
    Urgent = "Urgent"
}