'use client';
import { FC, useEffect, useRef, useState } from 'react';

export interface AboutSectionProps {};

export const AboutSection: FC<AboutSectionProps> =  ({}) => {

    return (
    <div
    id = 'about'
    className='flex flex-row justify-center items-center bg-white h-[100vh] w-full'>
        <div className='flex flex-row justify-center items-center content-center'>
          <div className='font-sans md:w-[700px] md:h-fit w-[90vw] h-[90vh] p-10 bg-blue-dark rounded-md pb-20'>
            <h1 className='text-2xl font-bold text-white mb-5 animate-fadeInFast'>About Me</h1>
            <p className='md:text-base text-sm text-grey font-mono animate-fadeIn'>
              I&apos;m a Full-Stack Developer with a passion for creating
              beautiful and functional web applications. I graduated with
              a Bachelor's of Science in Computer Science at the 
              University of California, Santa Barbara. 
            </p>
            <p className='md:text-base text-sm text-grey font-mono mt-4 animate-fadeIn'>
              Outside of school, I develop web applications for clients and work on personal projects.
            </p>
            <p className='md:text-base text-sm text-grey font-mono mt-4 animate-fadeIn'>
              I am most familiar with the following technologies:
            </p>
            {/** 2 column grid of text elements */}
            <div className='grid md:grid-cols-2 gap-4 mt-4 w-4/6 text-green animate-fadeInSlow'>
              <span className='md:text-base text-sm font-mono'>React</span>
              <span className='md:text-base text-sm font-mono'>Typescript/Javascript</span>
              <span className='md:text-base text-sm font-mono'>Python</span>
              <span className='md:text-base text-sm font-mono'>SQL</span>
              <span className='md:text-base text-sm font-mono'>Express.js</span>
              <span className='md:text-base text-sm font-mono'>AWS</span>
            </div>
          </div>
        </div>
      </div>
    
    );
};