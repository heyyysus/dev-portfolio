'use client';
import { FC } from 'react';
import { Project } from './projectCard';

export interface ProjectModalProps {

    project: Project | null,
    handleExit: () => void;

};

export const ProjectModal: FC<ProjectModalProps> =  ({ project, handleExit }) => {
    
    if (!project) {
        return null;
    }
    
    return (
    // Overlay
    <div className='fixed top-0 left-0 w-full h-full bg-opacity-80 bg-[#000] flex items-center justify-center z-[1000]'>
        { /* Modal */}
        <div className='bg-white p-8 rounded-md w-4/5 max-w-xl relative'>
            <button className='absolute top-3 right-3' onClick={(e) => { handleExit(); }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 className='font-bold text-xl'>{project.title}</h2>
            <p className='pt-2 text-[#000]'>{project.description}</p>
        </div>
    </div>
    );
};