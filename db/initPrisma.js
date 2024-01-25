import { PrismaClient } from "@prisma/client"
import mongodb from 'mongodb';
const { ObjectId } = mongodb;

const prisma = new PrismaClient()

export let sessionUserId = null;

function generateUserId() {
    return new ObjectId().toString();
}

export async function newTask(taskName) {
    if (!sessionUserId) {
        sessionUserId = generateUserId();
    }
 
    const newTask = await prisma.task.create({
        data: {
            title: taskName,
            userId: sessionUserId,
        },
    })
    console.log(taskName, " by ", sessionUserId);
}

export async function getTasks() {
    const tasks = await prisma.task.findMany();
    return tasks;
}

export async function deleteTask(taskId) {
    try {
        await prisma.task.delete({
            where: {
                id: taskId,
            },
        });
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}

export async function updateTask(taskId, taskTitle) {
    try {
        await prisma.task.update({
            where: { id: taskId },
            data: { title: taskTitle },
        });
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
}