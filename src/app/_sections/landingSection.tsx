'use client';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResponsiveImage from '../_components/ResponsiveImage';

export interface LandingSectionProps {};

export const LandingSection: FC<LandingSectionProps> =  ({}) => {

    

    return (
        <div className='mt-20 md:mt-0 text-2xl xl:text-5xl 2xl:text-5xl lg:text-4xl md:text-3xl font-bold text-white font-sans h-[100vh] p-10 md:p-24'>
        <div className='flex md:flex-row flex-col-reverse content-center md:items-center'>
          <div className='mr-10 md:mr-40'>
            <p className='mb-5 text-sm md:text-xl font-light animate-fadeInFast'>
              Hello, my name is
            </p>
            <p className='mb-5 text-[color:#9badcf] text-xl md:text-4xl lg:text-7xl animate-fadeIn'>
              Jesus Velarde
            </p>
            <p className='animate-fadeInSlow text-base md:text-3xl lg:text-4xl xl:text-5xl'>
              And I&apos;m a <span className='text-green'>Full-Stack Developer</span>
            </p>

          <div className='flex flex-row content-center items-center mt-10 animate-fadeInSlow text-grey'>
            <a href='https://github.com/heyyysus' className='hover:text-white transition-color mr-5'>
              <GitHubIcon sx={{
                fontSize: 50,
              }}  />
            </a>
            <a href='https://www.linkedin.com/in/jesus-velarde-arvayo-117958207/' className='hover:text-white transition-color pt-1.5'>
              <LinkedInIcon sx={{
                fontSize: 60,
              }}  />
            </a>
          </div>

          </div>
          <div className='flex flex-col justify-center content-center animate-fadeInSlow mb-10'>
            <div className='md:rounded-full border-[none] outline md:outline-4 outline-2 overflow-hidden w-[25vw]'>
              <ResponsiveImage src='/images/linkedin.jpeg' alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};