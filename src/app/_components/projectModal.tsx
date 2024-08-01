'use client';
import { FC } from 'react';
import { Project } from './projectCard';
import Image from 'next/image';

export interface ProjectModalProps {

    project: Project | null,
    handleExit: () => void;

};

export const ProjectModal: FC<ProjectModalProps> =  ({ project, handleExit }) => {
    
    const hidden = project === null;
    
    return (
    // Overlay
    <div className={`${hidden ? 'hidden opacity-0' : 'opacity-100'} duration-100 transition-opacity fixed top-0 left-0 w-full h-full bg-opacity-80 bg-[#000] flex items-center justify-center z-[1000]`}>
        { /* Modal */}
        <div className='bg-white p-8 rounded-md w-4/5 max-w-xl relative'>
            <button className='absolute top-3 right-3' onClick={(e) => { handleExit(); }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 className='font-bold text-2xl'>{project?.title}</h2>

            { project?.image && 
                <Image 
                    src={project.image}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="mt-6 mb-6"
                />
            }

            <p className='mt-2 text-grey-dark font-mono'>{project?.long_desc}</p>

            <div className='mt-4 flex flex-row'>
            {
                project?.demo_url &&
                <a href={project.demo_url} target='_blank' className='mt-4 mr-4 text-blue-500 hover:underline'>Demo</a>
            }

            {
                project?.github_url &&
                <a href={project.github_url} target='_blank' className='mt-4 text-blue-500 hover:underline'>Github</a>
            }
            </div>

        </div>
    </div>
    );
};