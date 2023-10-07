import { FC } from 'react';
import { ExperienceStepper } from '../_components/experienceStepper';

export interface ExperienceSectionProps {};

export const ExperienceSection: FC<ExperienceSectionProps> =  ({}) => {
    return (
        <div 
            className="flex flex-col md:flex-row justify-center items-center content-center min-h-screen w-screen bg-blue-dark"
            id='experience'
        >
            <ExperienceStepper  />
        </div>
    );
};