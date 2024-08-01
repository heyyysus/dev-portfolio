'use client';
import { FC, useState } from 'react';
import { Project } from '../_components/projectCard';
import { ProjectsHorizontalContainer } from '../_components/projectsHorizontalContainer';
import { ProjectModal } from '../_components/projectModal';

import RefractProject from '../../../content/projects/refract.json';
import HoppinProject from '../../../content/projects/hoppin.json';

export interface ProjectsSectionProps {};

export const ProjectsSection: FC<ProjectsSectionProps> =  ({}) => {

    const projects: Project[] = [
        RefractProject,
        HoppinProject
    ]

    const [shownProject, setShownProject] = useState<Project | null>(null);

    return (
        <div 
            id="projects"
            className="flex flex-col justify-center items-center content-center min-h-screen w-screen bg-white">
            <ProjectsHorizontalContainer projects={projects} handleOnClick={ (project) => setShownProject(project) } />

            <ProjectModal project={shownProject} handleExit={ () => setShownProject(null)  } />

        </div>
        
    );
};