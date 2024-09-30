import express from "express";
import { createProject, getProjects } from "../controllers/project.controller";

const router = express.Router();

router.route("/")
    .get(getProjects)
    .post(createProject)

export default router;