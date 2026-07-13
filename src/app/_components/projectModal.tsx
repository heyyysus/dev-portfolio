'use client';
import { FC } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import { Project } from './projectCard';

export interface ProjectModalProps {
    project: Project;
    onClose: () => void;
};

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-70 p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#000] bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
                >
                    <CloseIcon fontSize="small" />
                </button>

                <div className="w-full h-48 bg-grey">
                    {/** Placeholder for image, grey solid color for now */}
                </div>

                <div className="p-6">
                    <p className="text-2xl font-bold">
                        {project.title}
                    </p>
                    <p className="text-sm text-grey-dark font-mono mt-2 max-h-64 overflow-y-auto">
                        {project.description}
                    </p>

                    <div className="flex flex-row gap-4 mt-6">
                        <a
                            href={project.github_url ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-md border-2 border-grey text-grey-dark hover:bg-grey transition-colors font-mono text-sm"
                        >
                            <GitHubIcon fontSize="small" />
                            GitHub
                        </a>
                        <a
                            href={project.demo_url ?? '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-md bg-green text-white hover:opacity-80 transition-opacity font-mono text-sm"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
