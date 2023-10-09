import { FC } from 'react';
import { Project } from '../_components/projectCard';
import { ProjectsHorizontalContainer } from '../_components/projectsHorizontalContainer';

export interface ProjectsSectionProps {};

export const ProjectsSection: FC<ProjectsSectionProps> =  ({}) => {

    const projects: Project[] = [
        {
            title: 'Project 1',
            description: 'This is a description of project 1',
        },
        {
            title: 'Project 2',
            description: 'This is a description of project 2',
        },
        {
            title: 'Project 3',
            description: 'This is a description of project 3',
        },
        {
            title: 'Project 4',
            description: 'This is a description of project 4',
        },
    ]

    return (
        <div 
            id="projects"
            className="flex flex-col justify-center items-center content-center min-h-screen w-screen bg-white">
            <ProjectsHorizontalContainer projects={projects} />
        </div>
    );
};