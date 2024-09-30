"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTasks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.query;
    try {
        const tasks = yield prisma.task.findMany({
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
            });
        }
        res.json(tasks);
    }
    catch (err) {
        console.error("Failed to get taskss", err);
        res.sendStatus(500).json({
            message: "Failed to get tasks"
        });
    }
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tags, title, status, points, dueDate, priority, projectId, startDate, description, authorUserId, assignedUserId } = req.body;
    try {
        const newTask = yield prisma.task.create({
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
        });
        res.status(201).json(newTask);
    }
    catch (err) {
        console.error("Failed to create task", err);
        res.sendStatus(500).json({
            message: "Failed to create task"
        });
    }
});
exports.createTask = createTask;
