import express from "express";
import { createTask, getTasks, updateTaskStatus } from "../controllers/task.controller";

const router = express.Router();

router.route("/")
    .get(getTasks)
    .post(createTask)

router.route("/:taskId/status")
    .patch(updateTaskStatus)


export default router;