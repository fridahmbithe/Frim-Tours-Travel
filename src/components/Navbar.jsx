import React, { useState } from 'react';
import contact from './Contact';

const Navbar = () => {
  const [navIsShown, setNavIsShown] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleNavIsShown = () => {
    setNavIsShown((prev) => !prev);
  };

  const navLinks = [
    { name: 'Home', url: '#' },
    { name: 'Destinations', url: '#i' },
    { name: 'Travel Packages', url: '#l' },
    { name: 'Contact Us', url: '#contact' },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link.name);
    setNavIsShown(false); // Close the mobile nav on link click
  };

  return (
    <nav className='flex justify-between items-center h-20 sticky top-0 left-0 z-10 w-full text-black bg-white shadow-md'>
      <h1 className='pl-2 text-xl font-bold'>Frim-Tours & Travel</h1>
      <ul className='hidden md:flex space-x-4'>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              className={`hover:text-blue-500 ${activeLink === link.name ? 'font-bold' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className='hidden md:flex'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
          />
        </svg>
      </div>
      {!navIsShown && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 md:hidden cursor-pointer'
          onClick={toggleNavIsShown}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
          />
        </svg>
      )}
      {navIsShown && (
        <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
          <div className='flex justify-between'>
            <h1 className='pl-2 text-xl font-bold'>Frim-Tours & Travel</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 cursor-pointer'
              onClick={toggleNavIsShown}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <ul className='mb-4 space-y-2'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className={`block p-2 hover:bg-gray-200 rounded ${activeLink === link.name ? 'font-bold' : ''}`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className='w-full mb-4 btn'>Account</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;