// components/Navigation.tsx

import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link className="text-white hover:text-blue-300" href="/">
            Home
          </Link>
        </li>
        <li>
            <Link className='text-white hover:text-blue-300' href='/about'>
                About
            </Link>
        </li>
        <li>
            <Link className="text-white hover:text-blue-300" href="/contact">
                Contact
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
