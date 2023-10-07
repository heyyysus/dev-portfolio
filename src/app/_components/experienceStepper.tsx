'use client';
import { FC, useEffect, useState } from 'react';
import { StepperControls } from './stepperControls';
import './ExperienceStepper.css'

export interface ExperienceStepperProps {
    
};
export interface ExperienceItem {
    title: string;
    date: string;
    description: string[];
};

export const ExperienceStepper: FC<ExperienceStepperProps> =  ({  }) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    });


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
        {
            title: 'Kavli Institute for Theoretical Physics',
            date: 'June 2023 - Present',
            description: [
                'Computer Assistant',
                'Assist visitors, staff and faculty with technical issues.',
                'Automate survey form generation and data collection using Javascript, Python and SQL.',
            ],
        },
        {
            title: "Blockchain at UCSB",
            date: 'August 2022 - Present',
            description: [
                'Co-Head of Technology ',
                'Developed a static website for Blockchain at UCSB using the Next.js framework',
                `Established a certification verification platform for the Blockchain Fundamentals course successfully serving
                certificates for over 150 participants.`,
                'Crafted and presented lectures to over 100 participants in the Blockchain Fundamentals program.',
            ]
        },
    ];

    const [experienceItemsStep, setExperienceItemsStep] = useState(0);
    const [experienceItemsStepPrev, setExperienceItemsStepPrev] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const handleChange = (reverse: boolean) => {
        // setExperienceItemsStepPrev(experienceItemsStep);

        let newStep = experienceItemsStep;
        if (reverse) {
            if (experienceItemsStep === 0) {
                newStep = experienceItems.length - 1;
            } else {
                newStep = experienceItemsStep - 1;
            }
        } else {
            if (experienceItemsStep === experienceItems.length - 1) {
                newStep = 0;
            } else {
                newStep = experienceItemsStep + 1;
            }
        }

        setIsFading(true);
        const timer = setTimeout(() => {
            setIsFading(false);
            setExperienceItemsStep(newStep);
          }, 200); // matches the duration of the CSS transition
      
          return () => {
            clearTimeout(timer);
          };

    }

    return (
        <div className='flex flex-col md:p-10 p-7 bg-white md:max-w-3xl max-w-[90vw] rounded-md'>
        
        <div className={`fade-transition ${isFading ? 'fade-out' : ''}`}>
            <p className='text-2xl font-bold text-green'>{  experienceItems[experienceItemsStep].title }</p>
            <p className='text-sm text-grey-dark font-mono mt-2'>{ experienceItems[experienceItemsStep].date }</p>
            <p className='text-sm text-blue-dark font-mono mt-4'>
                { isMounted && <ul className='list-disc ml-5'>
                { experienceItems[experienceItemsStep].description.map((item, index) => {
                    return (
                        <li key={index} className='mb-1'>{item}</li>
                    );
                }) }
                </ul> }
            </p>
        </div>

        <div className='flex flex-row justify-center mt-10'>
            {/** Stepper controls */}
            <StepperControls step={ experienceItemsStep } numSteps={ experienceItems.length } handleChange={handleChange} />
        </div>

        </div>
    );
};