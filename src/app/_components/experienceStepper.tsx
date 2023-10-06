'use client';
import { FC, useState } from 'react';
import { StepperControls } from './stepperControls';

export interface ExperienceStepperProps {
    
};
export interface ExperienceItem {
    title: string;
    date: string;
    description: string[];
};

export const ExperienceStepper: FC<ExperienceStepperProps> =  ({  }) => {

    const experienceItems: ExperienceItem[] = [
        {
            title: 'Freelance Full-Stack Development',
            date: 'September 2023 - Present',
            description: [
                'Design and maintain websites for local businesses in the Santa Barbara area.',
                'Institute a gift certificate system to enhance customer engagement for my clients.',
                'Incorporate the Squarespace API to facilitate appointment bookings.',
                'Optimize websites for search engines to improve visibility and reach.',
            ],
        },
    ];

    const [experienceItemsStep, setExperienceItemsStep] = useState(0);

    const handleChange = (reverse: boolean) => {
    }

    return (
        <div className='flex flex-col p-10 bg-white max-w-3xl rounded-md'>
        
        <div>
            <p className='text-2xl font-bold text-blue-light'>{ experienceItems[experienceItemsStep].title }</p>
            <p className='text-sm text-grey-dark font-mono mt-2'>{ experienceItems[experienceItemsStep].date }</p>
            <p className='text-sm text-blue-dark font-mono mt-4'>
                { experienceItems[experienceItemsStep].description.map((item, index) => {
                    return (
                        <li key={index} className='mb-1'>{item}</li>
                    );
                }) }
            </p>
        </div>

        <div className='flex flex-row justify-center mt-10'>
            {/** Stepper controls */}
            <StepperControls step={experienceItemsStep} handleChange={handleChange} />
        </div>

        </div>
    );
};