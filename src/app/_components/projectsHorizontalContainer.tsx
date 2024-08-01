import { FC } from 'react';
import { Project, ProjectCard }from './projectCard';

export interface ProjectsHorizontalContainerProps {
    projects: Project[];
    handleOnClick: (project: Project) => void;
};

export const ProjectsHorizontalContainer: FC<ProjectsHorizontalContainerProps> =  ({ projects, handleOnClick }) => {
    return (
    <div className="flex md:flex-row flex-col md:overflow-x-auto md:w-4/5">
        {projects.map((project, index) => {
            return (
                <ProjectCard key={index} project={project} handleOnClick={ handleOnClick }  />
            );
        })}
    </div>
    );
};