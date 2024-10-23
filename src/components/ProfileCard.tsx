import { useState } from 'react'; 
import { IoPerson, IoMail, IoLocation } from 'react-icons/io5';
import Link from 'next/link';

interface ProfileInfoProps {
  fullName: string;
  email: string;
  state: string; 
}

const ProfileCard: React.FC<ProfileInfoProps> = ({ fullName, email, state }) => {

  return (
    <div className="absolute top-16 right-4 w-full max-w-xs z-50">
      <div className="mt-2 p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center mb-2">
          <IoPerson className="text-gray-500 mr-2" />
          <p className="text-gray-800"><strong>Full Name:</strong> {fullName}</p>
        </div>
        <div className="flex items-center mb-2">
          <IoMail className="text-gray-500 mr-2" />
          <p className="text-gray-800"><strong>Email:</strong> {email}</p>
        </div>
        <div className="flex items-center mb-2">
          <IoLocation className="text-gray-500 mr-2" />
          <p className="text-gray-800"><strong>State:</strong> {state}</p>
        </div>
        <Link href='/profile' className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Go to Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
