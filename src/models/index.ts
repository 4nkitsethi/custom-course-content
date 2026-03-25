export interface Module {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    title: string;
    moduleId: string;
    contentBlocks: ContentBlock[];
}

export interface ContentBlock {
    id: string;
    type: 'text' | 'video' | 'quiz';
    content: string;
    lessonId: string;
}
