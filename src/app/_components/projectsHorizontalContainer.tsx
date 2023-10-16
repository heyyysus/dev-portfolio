import { FC } from 'react';
import { Project, ProjectCard }from './projectCard';

export interface ProjectsHorizontalContainerProps {
    projects: Project[];
};

export const ProjectsHorizontalContainer: FC<ProjectsHorizontalContainerProps> =  ({ projects }) => {
    return (
    <div className="flex flex-row overflow-x-auto w-5/6">
        {projects.map((project, index) => {
            return (
                <ProjectCard key={index} project={project} />
            );
        })}
    </div>
    );
};