import express from 'express';
import session from 'express-session';
import {newTask, sessionUserId, getTasks, deleteTask, updateTask} from './db/initPrisma.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.json());

app.post('/create-task', async (req, res) => {
    const { taskName } = req.body;

    try {
        await newTask(taskName, sessionUserId);
        res.status(200).send('task created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('something went wrong');
    }
});

app.get('/get-tasks', async (req, res) => {
    try {
        const tasks = await getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('something went wrong');
    }
});

app.delete('/delete-task/:taskId', async (req, res) => {
    const { taskId } = req.params;

    try {
        await deleteTask(taskId);
        res.status(200).send('task deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('something went wrong');
    }
});


app.post('/update-task/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const { taskName } = req.body;

    try {
        await updateTask(taskId, taskName);
        res.status(200).send('task updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('something went wrong');
    }

});

// test

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
