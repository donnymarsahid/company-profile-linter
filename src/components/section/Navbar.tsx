import React, { useEffect, useState } from 'react';
import Logo from '@/assets/logo.svg';
import Hamburger from '@/assets/hamburger.svg';
import { styles } from '@/css/styles';

const Navbar = () => {
  /*
   * Sticky Navigation
   * @see https://theodorusclarence.com/library/sticky-nav
   */

  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav
      className={`bg-white bg-opacity-20 backdrop-blur-md sticky top-0 z-[999]  transition-shadow ${
        +onTop ? '' : 'shadow-sm'
      }`}
    >
      <div className={`${styles['main-container']}} m-auto`}>
        <div className="flex items-center justify-between sm:h-[100px] h-[70px]  text-xl font-semibold">
          <div className="flex items-center">
            <img src={Logo} width={100} />
            <ul className="md:flex items-center ml-[70px] gap-x-10  text-[#394360] hidden">
              <li className="text-underline whitespace-nowrap">Home</li>
              <li className="text-underline whitespace-nowrap">Learnings</li>
              <li className="text-underline whitespace-nowrap">About Us</li>
              <li className="text-underline whitespace-nowrap">Testimonial</li>
            </ul>
          </div>
          <div className="lg:flex gap-x-[42px] hidden">
            <button className="text-purple-brand">Login</button>
            <button className="bg-purple-brand text-white px-4 h-[52px] rounded-lg whitespace-nowrap">
              Sign Up
            </button>
          </div>
          <img src={Hamburger} className="md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
