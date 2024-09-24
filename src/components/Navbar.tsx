"use client";
import Link from 'next/link';
import Image from 'next/image';
import { TbHome, TbInfoSquare, TbUsersGroup, TbMessage, TbUser, TbSettings, TbGoGame } from 'react-icons/tb';
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5"; 
import React, { useState } from 'react';
import LoginModal from './LoginModal';  
import SignUpModal from './SignUpModal';  

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);  // True if logged in
  const [menuOpen, setMenuOpen] = useState(false);  

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home', icon: <TbHome size={20} /> },
    { href: '/about', label: 'About', icon: <TbInfoSquare size={20} /> },
    { href: '/developers', label: 'Developers', icon: <TbUsersGroup size={20} /> },
    { href: '/feedback', label: 'Feedback', icon: <TbMessage size={20} /> },
  ];

  const navLinksLogin: NavLink[] = [
    { href: '/', label: 'Home', icon: <TbHome size={20} /> },
    { href: '/room', label: 'Game', icon: <TbGoGame size={20} /> },
    { href: '/profile', label: 'Profile', icon: <TbUser size={20} /> },
    { href: '/setting', label: 'Setting', icon: <TbSettings size={20} /> },
  ];

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const openSignUp = () => setSignUpOpen(true);
  const closeSignUp = () => setSignUpOpen(false);

  const switchToSignUp = () => {
    setLoginOpen(false);
    setSignUpOpen(true);
  };

  const switchToLogin = () => {
    setSignUpOpen(false);
    setLoginOpen(true);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-bold">
            <img src="/logo.png" className="w-10" alt="Logo" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="block lg:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>

          {/* Links for Desktop View */}
          <ul className={`hidden lg:flex space-x-6 text-gray-600`}>
            {(loggedIn ? navLinksLogin : navLinks).map(({ href, label, icon }) => (
              <li key={href}>
                <Link href={href} className="hover:bg-blue-50 p-2 rounded-md hover:text-blue-500 flex items-center">
                  <span className="mr-1">{icon}</span> {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Profile/Buttons for Desktop */}
          <div className="hidden lg:flex space-x-4 items-center">
            {loggedIn ? (
              <div className="flex items-center space-x-2">
                <img src="./images/iyehah.png" alt="" className="w-10 rounded-full border-2 border-blue-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Iyehah Hacen</p>
                  <p className="text-gray-500 text-sm">@iyehah</p>
                </div>
                <button className="flex items-center justify-center text-black p-2 rounded hover:bg-blue-50">
                  <IoIosArrowDown size={20} />
                </button>
                <button onClick={logout} className="bg-red-500 flex items-center justify-between text-white px-4 py-2 rounded hover:bg-red-600">
                   Logout
                </button>
              </div>
            ) : (
              <>
                <button onClick={openLogin} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Login
                </button>
                <button onClick={openSignUp} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden">
            {/* Profile on Top for Mobile */}
            {loggedIn && (
              <div className="flex flex-col items-center space-y-4 mb-4">
                <img src="./images/iyehah.png" alt="" className="w-16 rounded-full border-2 border-blue-500" />
                <p className="font-semibold text-gray-800">Iyehah Hacen</p>
                <p className="text-gray-500 text-sm">@iyehah</p>
              </div>
            )}
            
            <ul className="flex flex-col space-y-4 text-gray-600">
              {(loggedIn ? navLinksLogin : navLinks).map(({ href, label, icon }) => (
                <li key={href}>
                  <Link href={href} className="hover:bg-blue-50 p-2 rounded-md hover:text-blue-500 flex items-center justify-center">
                    <span className="mr-1">{icon}</span> {label}
                  </Link>
                </li>
              ))}
            </ul>

            {!loggedIn && (
              <div className="flex flex-col items-center mt-4 space-y-2">
                <button onClick={openLogin} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                  Login
                </button>
                <button onClick={openSignUp} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Render the Login and Sign Up Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeLogin} 
        onSwitchToSignUp={switchToSignUp} 
        onLogin={() => setLoggedIn(true)}  // Pass login callback 
      />
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={closeSignUp} 
        onSwitchToLogin={switchToLogin} 
      />
    </>
  );
};

export default Navbar;
