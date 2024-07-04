import { FC } from 'react';
import { Project } from '../_components/projectCard';
import { ProjectsHorizontalContainer } from '../_components/projectsHorizontalContainer';

export interface ProjectsSectionProps {};

export const ProjectsSection: FC<ProjectsSectionProps> =  ({}) => {

    const projects: Project[] = [
        {
            title: "Refract",
            description: "An application winning second play at the UCSB Data Science Club Showcase created to cloak images of faces to disrupt ML facial recognition and training",
        },

        {
            title: 'Hoppin',
            description: 'A social media app for sharing events built with AWS Lambda, RDS, and React',
        },
        {
            title: 'Blockchain at UCSB',
            description: 'Custom made website created in Next.js for the Blockchain at UCSB student organization',
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