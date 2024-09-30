import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { projectId } = req.query;

    try {
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId),
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true
            }
        });

        if (!tasks) {
            res.sendStatus(404).json({
                message: "Tasks not found"
            })
        }

        res.json(tasks);
    } catch (err) {
        console.error("Failed to get taskss", err);
        res.sendStatus(500).json({
            message: "Failed to get tasks"
        })
    }
}

export const createTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    const {
        tags,
        title,
        status,
        points,
        dueDate,
        priority,
        projectId,
        startDate,
        description,
        authorUserId,
        assignedUserId
    } = req.body;
    try {
        const newTask = await prisma.task.create({
            data: {
                tags,
                title,
                status,
                points,
                dueDate,
                priority,
                projectId,
                startDate,
                description,
                authorUserId,
                assignedUserId
            }
        })

        res.status(201).json(newTask);
    } catch (err) {
        console.error("Failed to create task", err);
        res.sendStatus(500).json({
            message: "Failed to create task"
        })
    }
}

export const updateTaskStatus = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { taskId } = req.params;
    const { status } = req.body;

    try {
        const updatedTask = await prisma.task.update({
            where: {
                id: Number(taskId)
            },
            data: {
                status
            }
        });

        if (!updatedTask) {
            res.sendStatus(404).json({
                message: "Task not found"
            })
        }

        res.json(updatedTask);
    } catch (err) {
        console.error("Failed to update task", err);
        res.sendStatus(500).json({
            message: "Failed to update task"
        })
    }
}