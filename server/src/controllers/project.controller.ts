import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async(
    _req: Request,
    res: Response
): Promise<void> => {
    try {
        const projects = await prisma.project.findMany();

        res.json(projects);
    } catch (err) {
        console.error("Failed to get projects", err);
        res.sendStatus(500).json({
            message: "Failed to get projects"
        })
    }
}