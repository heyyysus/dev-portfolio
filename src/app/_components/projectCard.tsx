import { FC } from 'react';

export interface Project {
    title: string;
    description: string;
    image?: string;
    demo_url?: string;
    github_url?: string;
}

export interface ProjectCardProps {
    project: Project;
};

export const ProjectCard: FC<ProjectCardProps> =  ({ project }) => {
    {/**
        Outer div must have 'flex-shrink-0' class to prevent it from shrinking
    */}
    return (
    <div className={`w-72 mr-12 flex-shrink-0 shadow-lg hover:cursor-grab relative`}>

        {/* Dark overlay that appears when hovered over */}
        <div className={`absolute inset-0 bg-[#000] opacity-0 hover:opacity-70 
        z-10 transition-opacity duration-300 rounded-b-md rounded-t-xl flex items-center justify-center`}>
            <p className="text-white text-center font-mono text-base mt-2">
                View More 
            </p>
        </div>

        <div className='w-full h-32 bg-green rounded-t-xl'>
        {/** Placeholder for image, green solid color for now */}
        </div>
        {/** Project card */}
        <div className='p-6 h-40 border-b-2 border-t-none border-l-2 border-r-2 border-grey rounded-b-md'>
            <p className="text-2xl font-bold">
                {project.title}
            </p>
            <p className="text-xs text-grey-dark font-mono mt-2">
                {project.description}
            </p>
        </div>
    </div>
    );
};