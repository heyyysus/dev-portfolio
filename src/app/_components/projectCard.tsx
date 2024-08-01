import { FC } from 'react';

export interface Project {
    title: string;
    short_desc: string;
    long_desc: string;
    image?: string;
    demo_url?: string;
    github_url?: string;
}

export interface ProjectCardProps {
    project: Project;
    handleOnClick: (project: Project) => void;
};

export const ProjectCard: FC<ProjectCardProps> =  ({ project, handleOnClick }) => {
    {/**
        Outer div must have 'flex-shrink-0' class to prevent it from shrinking
    */}
    return (
    <div 
        className={`w-72 md:mr-12 md:mb-0 mt-8 mb-8 flex-shrink-0 shadow-lg hover:cursor-grab md:relative`} 
        onClick={ (e) => handleOnClick(project) }
    >

        {/* Dark overlay that appears when hovered over */}
        <div className={`absolute inset-0 bg-[#000] opacity-0 hover:opacity-70 
        z-10 transition-opacity duration-300 rounded-b-md rounded-t-xl md:flex hidden items-center justify-center md:display`}>
            <p className="text-white text-center font-mono text-base mt-2">
                View More 
            </p>
        </div>

        <div className='w-full h-32 bg-green rounded-t-xl'>
        {/** Placeholder for image, green solid color for now */}
        </div>
        {/** Project card */}
        <div className='p-6 h-48 border-b-2 border-t-none border-l-2 border-r-2 border-grey rounded-b-md bg-white'>
            <p className="text-2xl font-bold">
                {project.title}
            </p>
            <p className="md:text-xs text-sm text-grey-dark font-mono mt-2">
                {project.short_desc}
            </p>
        </div>
    </div>
    );
};