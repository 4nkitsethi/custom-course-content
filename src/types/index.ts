// src/types/index.ts

export interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    title: string;
    contentBlocks: ContentBlock[];
}

export interface ContentBlock {
    id: string;
    type: ContentBlockType;
    content: string;
}

export type ContentBlockType = 'text' | 'image' | 'video';

export interface Question {
    id: string;
    questionText: string;
    choices: Choice[];
    type: QuestionType;
}

export interface Choice {
    id: string;
    text: string;
    isCorrect: boolean;
}

export type QuestionType = 'SingleChoice' | 'MultipleChoice';
