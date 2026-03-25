import React, { useState } from 'react';
import ModuleManager from './ModuleManager';
import LessonManager from './LessonManager';
import ContentBlockManager from './ContentBlockManager';

const App = () => {
    const [activeTab, setActiveTab] = useState('Modules');

    const renderContent = () => {
        switch (activeTab) {
            case 'Modules':
                return <ModuleManager />;
            case 'Lessons':
                return <LessonManager />;
            case 'ContentBlocks':
                return <ContentBlockManager />;
            default:
                return <ModuleManager />;
        }
    };

    return (
        <div>
            <h1>Course Content Management</h1>
            <nav>
                <ul>
                    <li onClick={() => setActiveTab('Modules')}>Modules</li>
                    <li onClick={() => setActiveTab('Lessons')}>Lessons</li>
                    <li onClick={() => setActiveTab('ContentBlocks')}>Content Blocks</li>
                </ul>
            </nav>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default App;