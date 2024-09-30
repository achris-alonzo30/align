import express from "express";
import { getTasks } from "../controllers/task.controller";

const router = express.Router();

router.route("/")
    .get(getTasks)


export default router;