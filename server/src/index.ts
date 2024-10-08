import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";

import taskRoutes from "./routes/task.routes";
import projectRoutes from "./routes/project.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(express.json()); 
app.use(morgan("common")); 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use("/api/tasks", taskRoutes);
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})