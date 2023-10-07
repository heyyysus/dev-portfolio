'use client';
import { FC } from 'react';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

export interface StepperControlsProps {
    step: number;
    numSteps: number;
    handleChange: (reverse: boolean) => void;
};

export const StepperControls: FC<StepperControlsProps> =  ({step, numSteps, handleChange}) => {

    const handleBack = (e: any) => {
        e.preventDefault();
        handleChange(true);
    }

    const handleForward = (e: any) => {
        e.preventDefault();
        handleChange(false);
    }

    return (
    <div className='text-green flex flex-row'>
        <a href='#' onClick={handleBack} className='mr-5 md:hover:bg-grey pt-2 pb-3 pl-3 pr-1 rounded-sm transition-all'>
            <ArrowBack />
        </a>

        <div className='flex flex-row pt-4 mr-3'>
        {
            [...Array(numSteps)].map((_, index) => {
                return (
                    <div key={index} className={`w-2 h-2 transition-all rounded-full ${index === step ? 'bg-green' : 'bg-grey' } mr-2`}></div>
                );
            })
        }

        </div>

        <a href='#' onClick={handleForward} className='md:hover:bg-grey pt-2 pb-3 pl-2 pr-2 rounded-sm transition-all'>
            <ArrowForward />
        </a>
    </div>
    );
};