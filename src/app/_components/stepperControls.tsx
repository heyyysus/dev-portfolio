'use client';
import { FC } from 'react';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

export interface StepperControlsProps {
    step: number;
    handleChange: (reverse: boolean) => void;
};

export const StepperControls: FC<StepperControlsProps> =  ({step, handleChange}) => {

    const handleBack = (e: any) => {
        e.preventDefault();
        handleChange(true);
    }

    const handleForward = (e: any) => {
        e.preventDefault();
        handleChange(false);
    }

    return (
    <div className='text-blue-dark'>
        <a href='#' onClick={handleBack} className='mr-5 hover:bg-grey pt-2 pb-3 pl-3 pr-1 rounded-sm transition-all'>
            <ArrowBack />
        </a>
        <a href='#' onClick={handleForward} className='hover:bg-grey pt-2 pb-3 pl-2 pr-2 rounded-sm transition-all'>
            <ArrowForward />
        </a>
    </div>
    );
};