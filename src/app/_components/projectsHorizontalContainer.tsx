import { FC } from 'react';
import { Project, ProjectCard }from './projectCard';

export interface ProjectsHorizontalContainerProps {
    projects: Project[];
};

export const ProjectsHorizontalContainer: FC<ProjectsHorizontalContainerProps> =  ({ projects }) => {
    return (
    <div className="flex flex-row flex-nowrap w-full h-full overflow-x-auto px-5 py-5 box-border">
        {projects.map((project, index) => {
            return (
                <div key={index} className="flex flex-col justify-center items-center content-center w-96 h-[500px] mr-5">
                    <ProjectCard project={project} />
                </div>
            );
        })}
    </div>
    );
};