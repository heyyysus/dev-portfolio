import Link from 'next/link';
import { FC } from 'react';

export interface DownloadBtnProps {
    href: string;
    children: React.ReactNode;
};

export const DownloadBtn: FC<DownloadBtnProps> =  ({ children, href}) => {
    return (
    <a
        href={ href }
        target="_blank"
        rel="noopener noreferrer"
        className='px-2 py-1.5 text-white bg-green hover:text-green hover:bg-white flex flex-row content-center transition-colors rounded-md'
      >
        {children}
      </a>
    );
};