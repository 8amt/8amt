import Link from 'next/link';
import React from 'react';
import { TbBrandGithub, TbBrandLinkedin, TbBrandX , TbBrandFacebook } from 'react-icons/tb';
import { MdDownload } from 'react-icons/md';
import {FaCode } from "react-icons/fa";

interface Developer {
  name: string;
  imgSrc: string;
  github: string;
  portfolio: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  cv: string;
}

const developers: Developer[] = [
  {
    name: 'Iyehah Hacen',
    imgSrc: '/images/iyehah.png', // Replace with actual image path
    github: 'https://github.com/iyehah',
    portfolio: '#', // Replace with portfolio link
    linkedin: 'https://linkedin.com/in/iyehah',
    twitter: 'https://twitter.com/iyehah',
    facebook: "",
    cv: '/downloads/iyerah_cv.pdf' // Replace with actual CV path
  },
  {
    name: 'Med Vall',
    imgSrc: '/images/vall.png',
    github: 'https://github.com/hacen',
    portfolio: '#',
    linkedin: 'https://linkedin.com/in/medvall',
    twitter: 'https://twitter.com/medvall',
    facebook: "",
    cv: '/downloads/hacen_cv.pdf'
  },
  {
    name: 'Abdeljelil',
    imgSrc: '/images/jelil.png',
    github: 'https://github.com/abdeljelil',
    portfolio: '#',
    linkedin: 'https://linkedin.com/in/abdeljelil',
    twitter: 'https://twitter.com/abdeljelil',
    facebook: '',
    cv: '/downloads/abdeljelil_cv.pdf'
  },
  {
    name: 'Iselmo',
    imgSrc: '/images/iselmo.png',
    github: 'https://github.com/iselmo',
    portfolio: '#',
    linkedin: 'https://linkedin.com/in/iselmo',
    twitter: 'https://twitter.com/iselmo',
    facebook:'',
    cv: '/downloads/iselmo_cv.pdf'
  }
];

const DeveloperCard: React.FC<Developer> = ({ name, imgSrc, github, linkedin, twitter,facebook, cv }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center relative z-0">
      {/* Top logo (1/2 rounded) */}
      <div className="rounded-full bg-blue-50 p-2 absolute top-4 left-4">
        <img src="./logo.png" alt="Logo" className="w-8 h-8" />
      </div>
      
      {/* Profile Image */}
      <img
        src={imgSrc}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-blue-500 bg-blue-50"
      />

      {/* Developer Info */}
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <div className='flex flex-row items-center justify-center w-full'>
      <div className='Welcome-box py-1 px-3 border border-[#2563eb] opacity-100 dark:opacity-90 mb-1'>
      <FaCode className="text-[#2563eb] mr-2 h-2 w-2 md:h-4 md:w-4" />
        <p className="Welcome-text text-[10px]">Web Developer</p>
        </div></div>
      <p className="text-gray-500 mb-4 text-sm">
        A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <Link href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <TbBrandGithub size={20} />
        </Link>
        <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <TbBrandLinkedin size={20} />
        </Link>
        <Link href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <TbBrandX size={20} />
        </Link>
        <Link href={facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <TbBrandFacebook size={20} />
        </Link>
      </div>

      {/* Download CV Button */}
      <a href={cv} download className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
        <MdDownload className="mr-2" /> Download CV
      </a>

      {/* Bottom Accent Line */}
      <div className="w-full h-2 bg-blue-500 rounded-b-lg absolute bottom-0 left-0"></div>
    </div>
  );
};

const DevelopersPage: React.FC = () => {
  return (
    <div className="min-h-[88.5vh] text-gray-900 p-8">
        <h1 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Meet Our Developers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {developers.map((developer) => (
          <DeveloperCard key={developer.name} {...developer} />
        ))}
      </div>
    </div>
  );
};

export default DevelopersPage;
