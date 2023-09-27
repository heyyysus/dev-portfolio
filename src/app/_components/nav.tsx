'use client';
// components/Navigation.tsx

import Link from 'next/link';
import React from 'react';
import { NavItem } from './navItem';
import ArticleIcon from '@mui/icons-material/Article';
import { DownloadBtn } from './downloadBtn';

const Navigation: React.FC = () => {

  const handleLinkClick = (event: any) => {
    event.preventDefault();

    // Extract the target ID from the clicked link's href attribute
    const targetId = event.currentTarget.getAttribute("href").slice(1); // Remove the "#" at the beginning
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-blue-dark flex justify-between w-fill px-10 font-mono text-sm">
      <div className='py-7'>
        Logo
      </div>
      <div className=''>
        <ul className="flex">
          <li>
            <NavItem label='About' href='#about' onClick={handleLinkClick} />
          </li>
          <li>
            <NavItem label='Experience' href='#' />
          </li>
          <li>
            <NavItem label='Projects' href='#' />
          </li>
          <li>
            <div className='mt-[15px] ml-4'>
              <DownloadBtn href='#'>
                <ArticleIcon /> 
                <span className='ml-2 pt-0.5'>Resume</span>
              </DownloadBtn>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
