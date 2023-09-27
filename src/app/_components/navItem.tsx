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
        className={`px-8 py-6 hover:text-white hover:bg-blue-light flex flex-row content-center transition-all
                    border-solid hover:border-b-2 border-green`}
            >
            <span>{label}</span>
        </Link>
    );
};