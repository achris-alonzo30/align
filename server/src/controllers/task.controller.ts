import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async(
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