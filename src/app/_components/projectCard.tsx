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
    return (
    <div className={`inline-block box-border content-center w-full h-full border-2 border-grey 
                    rounded-md shadow-sm py-10 px-10`}>
        <p className="text-2xl font-bold">
            {project.title}
        </p>
        <p className="text-xs text-grey-dark font-mono mt-2">
            {project.description}
        </p>
    </div>
    );
};