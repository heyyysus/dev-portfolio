'use client';
import Link from 'next/link';
import { FC } from 'react';

export interface NavItemProps {
    label: string;
    href: string;
    onClick?: (event: any) => void;
};

export const NavItem: FC<NavItemProps> =  ({label, href, onClick}) => {
    return (
        <Link 
        href={href} 
        onClick={onClick}
        className={`md:px-8 md:py-6 px-8 py-3 hover:text-white hover:bg-blue-light flex flex-row content-center transition-all
                    md:border-solid md:border-b-2 border-none hover:border-green border-blue-dark`}
            >
            <span>{label}</span>
        </Link>
    );
};