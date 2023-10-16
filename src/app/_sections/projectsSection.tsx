import { FC } from 'react';
import { Project } from '../_components/projectCard';
import { ProjectsHorizontalContainer } from '../_components/projectsHorizontalContainer';

export interface ProjectsSectionProps {};

export const ProjectsSection: FC<ProjectsSectionProps> =  ({}) => {

    const projects: Project[] = [
        {
            title: 'Hoppin',
            description: 'A social media app for sharing events build with AWS Lambda, RDS, and React',
        },
        {
            title: 'Elegant Nails',
            description: 'A website for a nail salon built with Next.js and TailwindCSS',
        },
        {
            title: 'Blockchain at UCSB',
            description: 'Custom made website created in Next.js for the Blockchain at UCSB student organization',
        },
        {
            title: 'Sounds of IV',
            description: 'Simply but stylish website for a local student-run music promoting organization in Isla Vista, CA',
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