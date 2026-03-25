import mongoose from 'mongoose';

// ContentBlock Schema
const contentBlockSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    order: { type: Number, required: true },
});

// Lesson Schema
const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    contentBlocks: [contentBlockSchema],
});

// Module Schema
const moduleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    lessons: [lessonSchema],
});

// Export Models
const ContentBlock = mongoose.model('ContentBlock', contentBlockSchema);
const Lesson = mongoose.model('Lesson', lessonSchema);
const Module = mongoose.model('Module', moduleSchema);

export { ContentBlock, Lesson, Module };