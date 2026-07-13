import { FC } from 'react';
import { Project } from '../_components/projectCard';
import { ProjectsHorizontalContainer } from '../_components/projectsHorizontalContainer';

export interface ProjectsSectionProps {};

export const ProjectsSection: FC<ProjectsSectionProps> =  ({}) => {

    const projects: Project[] = [
        {
            title: 'CloudMS',
            description: 'A cloud-native CMS built for independent insurance agencies, replacing spreadsheets, legacy agency management software, and manual carrier data entry with a single system of record for clients, policies, vehicles, and carriers. TypeScript/Express/PostgreSQL backend with a Vite/React frontend, Google SSO, and CI/CD via GitHub Actions.',
            github_url: 'https://github.com/heyyysus/CloudMS',
        },
        {
            title: "Refract",
            description: "Winning second place at the UCSB Data Science Club Showcase, this application cloaks facial images to disrupt machine learning-based facial recognition and training processes",
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