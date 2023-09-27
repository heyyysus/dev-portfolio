import Link from 'next/link';
import { FC } from 'react';

export interface NavItemProps {
    label: string;
    href: string;
};

export const NavItem: FC<NavItemProps> =  ({label, href}) => {
    return (
        <Link href={href} className='px-8 py-6 hover:text-white hover:bg-blue-light flex flex-row content-center transition-colors'>
            <span>{label}</span>
        </Link>
    );
};