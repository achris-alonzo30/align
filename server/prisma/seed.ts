import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function deleteAllData(orderedFileNames: string[]) {
    const modelNames = orderedFileNames.map(fileName => {
        const modelName = path.basename(fileName, path.extname(fileName));
        return modelName.charAt(0).toUpperCase() + modelName.slice(1);
    });

    for (const modelName of modelNames) {
        const model: any = client[modelName as keyof typeof client];
        await model.deleteMany({});
        console.log(`Deleted all ${modelName} data`);
    };
};

async function main() {
    const dataDir = path.join(__dirname, "seedData");

    const orderedFileNames = [
        "user.json",
        "team.json",
        "task.json",
        "project.json",
        "comment.json",
        "attachment.json",
        "projectTeam.json",
        "taskAssignment.json"
    ];

    await deleteAllData(orderedFileNames);

    for (const fileName of orderedFileNames) {
        const filePath = path.join(dataDir, fileName);
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
        const modelName = path.basename(fileName, path.extname(fileName));
        const model: any = client[modelName as keyof typeof client];

        for (const data of jsonData) {
            await model.create({ data });
        }

        console.log(`Seeded ${modelName} data`);
    }
}

main().catch((e) => {
    console.error(e);
}).finally(async () => {
    await client.$disconnect();
})