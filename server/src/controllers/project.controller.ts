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

export const createProject = async(
    req: Request,
    res: Response
): Promise<void> => {
    const { name, description, startDate, endDate } = req.body;
    try {
        const newProject = await prisma.project.create({
            data: {
                name,
                description,
                startDate,
                endDate
            }
        });

        res.status(201).json(newProject);
    } catch (err) {
        console.error("Failed to create project", err);
        res.sendStatus(500).json({
            message: "Failed to create project"
        })
    }
}