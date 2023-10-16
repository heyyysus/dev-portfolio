'use client';
// components/Navigation.tsx

import Link from 'next/link';
import React from 'react';
import { NavItem } from './navItem';
import ArticleIcon from '@mui/icons-material/Article';
import { DownloadBtn } from './downloadBtn';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBtn from './menuBtn';
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';

const Navigation: React.FC = () => {

  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  const handleLinkClick = (event: any) => {
    event.preventDefault();

    // Extract the target ID from the clicked link's href attribute
    const targetId = event.currentTarget.getAttribute("href").slice(1); // Remove the "#" at the beginning
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setShowMenu(false);
  };

  return (
    <>
      <nav className="bg-blue-dark flex justify-between w-fill font-mono text-sm md:static fixed w-screen z-10">
        <div className='py-2 ml-2'>
          <Link href="/">
            <Image src='/images/logo/logo 2.png' alt='logo' width={75} height={75} />
          </Link>
        </div>
        <div className='md:block hidden pr-6'>
          <ul className="flex items-center">
            <li>
              <NavItem label='About' href='#about' onClick={handleLinkClick} />
            </li>
            <li>
              <NavItem label='Experience' href='#experience' onClick={handleLinkClick} />
            </li>
            <li>
              <NavItem label='Projects' href='#projects' onClick={handleLinkClick} />
            </li>
            <li>
              <div className='ml-4'>
                <DownloadBtn href='/files/Resume_Jesus_Velarde.pdf'>
                  <ArticleIcon /> 
                  <span className='ml-2 pt-0.5'>Resume</span>
                </DownloadBtn>
              </div>
            </li>
          </ul>
        </div>
        <div className='md:hidden block mr-6'>
          <MenuBtn onClick={handleMenuClick} />
        </div>
        
      </nav>
      {
        showMenu ? (
          <>
          <div className='bg-[#000000] opacity-70 fixed top-0 left-0 right-0 bottom-0 z-[1000]' onClick={handleMenuClick}>

          </div>
          <div className={`z-[1001] rounded fixed top-0 right-0 w-[60vw] h-screen overflow-hidden md:hidden block transition-all bg-blue-light font-mono text-sm py-5`}>
            <ul className='flex flex-col'>
              <li className=''>
                <NavItem label='About' href='#about' onClick={handleLinkClick} />
              </li>
              <li className=''>
                <NavItem label='Experience' href='#experience' onClick={handleLinkClick} />
              </li>
              <li className=''>
                <NavItem label='Projects' href='#projects' onClick={handleLinkClick} />
              </li>
              <li className='mt-5'>
              <a 
                href="files/Resume_Jesus_Velarde.pdf" 
                target='_blank'
                className={`px-8 text-green hover:bg-blue-light flex flex-row content-center transition-all
                            md:border-solid hover:border-b-2 md:border-green border-none font-mono`}
                    >
                    <DownloadIcon />
                    <span className='ml-2 pt-0.5'
                    >
                      Resume
                    </span>
              </a>
              </li>
            </ul>
          </div>
          </>
        ) : <></>
      }
    </>
  );
};

export default Navigation;
