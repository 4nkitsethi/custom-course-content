import React, { useState } from 'react';

const LessonManager = () => {
    const [lessons, setLessons] = useState([]);
    const [lessonName, setLessonName] = useState('');

    const addLesson = () => {
        if (lessonName) {
            setLessons([...lessons, lessonName]);
            setLessonName('');
        }
    };

    const deleteLesson = (index) => {
        const newLessons = lessons.filter((_, i) => i !== index);
        setLessons(newLessons);
    };

    const updateLesson = (index) => {
        const newLessonName = prompt('Enter new lesson name:', lessons[index]);
        if (newLessonName) {
            const updatedLessons = lessons.map((lesson, i) => (i === index ? newLessonName : lesson));
            setLessons(updatedLessons);
        }
    };

    return (
        <div>
            <h1>Lesson Manager</h1>
            <input
                type="text"
                value={lessonName}
                onChange={(e) => setLessonName(e.target.value)}
                placeholder="Enter lesson name"
            />
            <button onClick={addLesson}>Add Lesson</button>
            <ul>
                {lessons.map((lesson, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {lesson}
                        <div>
                            <button onClick={() => updateLesson(index)}>Update</button>
                            <button onClick={() => deleteLesson(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LessonManager;
