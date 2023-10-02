'use client';
import { FC, useEffect, useRef, useState } from 'react';

export interface AboutSectionProps {};

export const AboutSection: FC<AboutSectionProps> =  ({}) => {

    return (
    <div
    id = 'about'
    className='flex flex-row justify-center items-center bg-white h-[100vh] w-full'>
        <div className='flex flex-row justify-center items-center content-center'>
          <div className='font-sans md:w-[700px] md:h-fit w-screen h-screen p-10 bg-blue-dark rounded-md mr-5 pb-20'>
            <h1 className='text-2xl font-bold text-white mb-5 animate-fadeInFast'>About Me</h1>
            <p className='text-base text-grey font-mono animate-fadeIn'>
              I&apos;m a Full-Stack Developer with a passion for creating
              beautiful and functional web applications. I&apos;m currently
              in my 4th year studying Computer Science at the 
              University of California - Santa Barbara. 
            </p>
            <p className='text-base text-grey font-mono mt-4 animate-fadeIn'>
              Outside of school, I develop web applications for clients and work on personal projects.
            </p>
            <p className='text-base text-grey font-mono mt-4 animate-fadeIn'>
              I am most familiar with the following technologies:
            </p>
            {/** 2 column grid of text elements */}
            <div className='grid grid-cols-2 gap-4 mt-4 w-4/6 text-green animate-fadeInSlow'>
              <span className='text-base font-mono'>React</span>
              <span className='text-base font-mono'>Typescript/Javascript</span>
              <span className='text-base font-mono'>Python</span>
              <span className='text-base font-mono'>SQL</span>
              <span className='text-base font-mono'>Express.js</span>
              <span className='text-base font-mono'>AWS</span>
            </div>
          </div>
        </div>
      </div>
    
    );
};