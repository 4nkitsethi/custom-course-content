import express from 'express';

const router = express.Router();

// Model definition (assuming mongoose for a MongoDB setup)
const ContentBlockSchema = new mongoose.Schema({
    type: { type: String, required: true }, // e.g., 'text', 'video', 'single', 'multiple'
    content: { type: Object, required: true }, // Content based on the type
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const ContentBlock = mongoose.model('ContentBlock', ContentBlockSchema);

// Create a new content block
router.post('/', async (req, res) => {
    try {
        const newBlock = new ContentBlock(req.body);
        await newBlock.save();
        res.status(201).json(newBlock);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all content blocks
router.get('/', async (req, res) => {
    try {
        const blocks = await ContentBlock.find();
        res.status(200).json(blocks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a content block
router.put('/:id', async (req, res) => {
    try {
        const block = await ContentBlock.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!block) return res.status(404).json({ message: 'Block not found' });
        res.status(200).json(block);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a content block
router.delete('/:id', async (req, res) => {
    try {
        const block = await ContentBlock.findByIdAndDelete(req.params.id);
        if (!block) return res.status(404).json({ message: 'Block not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;