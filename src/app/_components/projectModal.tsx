import React from 'react';
import { Project } from './projectCard';

export interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    handleClose: () => void;
};

export const ProjectModal: React.FC<ProjectModalProps> =  ({ project, isOpen, handleClose }) => {
    return (
        <dialog className={isOpen ? "absolute inset-0 flex items-center justify-center" : "hidden"}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={ e => handleClose() }>Close</button>
        </dialog>
    );
};