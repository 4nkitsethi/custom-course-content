import React, { useState } from 'react';

const ContentBlockManager = () => {
    const [blocks, setBlocks] = useState([]);

    const addBlock = (type) => {
        setBlocks([...blocks, { id: Date.now(), type, content: '' }]);
    };

    const deleteBlock = (id) => {
        setBlocks(blocks.filter(block => block.id !== id));
    };

    const handleContentChange = (id, content) => {
        setBlocks(blocks.map(block => (block.id === id ? { ...block, content } : block )));
    };

    const previewBlock = (block) => {
        switch (block.type) {
            case 'text':
                return <p>{block.content}</p>;
            case 'video':
                return <video controls src={block.content} />;
            case 'image':
                return <img src={block.content} alt='content-block' />;
            case 'single-choice':
                return <div>{block.content}</div>;
            case 'multiple-choice':
                return <div>{block.content}</div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Content Block Manager</h2>
            <button onClick={() => addBlock('text')}>Add Text Block</button>
            <button onClick={() => addBlock('video')}>Add Video Block</button>
            <button onClick={() => addBlock('image')}>Add Image Block</button>
            <button onClick={() => addBlock('single-choice')}>Add Single Choice Block</button>
            <button onClick={() => addBlock('multiple-choice')}>Add Multiple Choice Block</button>
            <div>
                {blocks.map(block => (
                    <div key={block.id}>
                        {previewBlock(block)}
                        <textarea onChange={(e) => handleContentChange(block.id, e.target.value)} placeholder='Edit content...'/>
                        <button onClick={() => deleteBlock(block.id)}>Delete Block</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentBlockManager;
