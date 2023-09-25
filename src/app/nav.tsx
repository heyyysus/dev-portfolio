// components/Navigation.tsx

import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-transparent p-4 flex justify-between w-fill px-10">
      <div>
        Logo
      </div>
      <div className=''>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:text-blue-300" href="/">
              Home
            </Link>
          </li>
          <li>
              <Link className='hover:text-blue-300' href='/about'>
                  About
              </Link>
          </li>
          <li>
              <Link className="hover:text-blue-300" href="/contact">
                  Contact
              </Link>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
