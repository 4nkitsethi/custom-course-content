import { Router } from 'express';

const router = Router();

// Sample data structure for lessons
let lessons = [];

// Create a lesson
router.post('/', (req, res) => {
    const newLesson = req.body;
    lessons.push(newLesson);
    res.status(201).json(newLesson);
});

// Get all lessons
router.get('/', (req, res) => {
    res.json(lessons);
});

// Get a lesson by ID
router.get('/:id', (req, res) => {
    const lesson = lessons.find(l => l.id === parseInt(req.params.id));
    if (!lesson) return res.status(404).send('Lesson not found');
    res.json(lesson);
});

// Update a lesson
router.put('/:id', (req, res) => {
    const index = lessons.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Lesson not found');
    lessons[index] = {...lessons[index], ...req.body};
    res.json(lessons[index]);
});

// Delete a lesson
router.delete('/:id', (req, res) => {
    const index = lessons.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Lesson not found');
    lessons.splice(index, 1);
    res.status(204).send();
});

export default router;