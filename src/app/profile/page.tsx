// profile/page.tsx
"use client";
import React, { useState } from 'react';
import { FaEdit ,FaSave } from 'react-icons/fa';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-4xl mx-auto  p-4">
      <div className='bg-white p-4 rounded'>
        {/* Profile Header */}
      <div className="flex items-center bg justify-between">
        <div className="flex items-center space-x-4">
          <img src="./images/iyehah.png" alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-lg font-bold">Iyehah Hacen</h2>
            <p className="text-gray-500">iyehah@gmail.com</p>
          </div>
        </div>
        <button 
          onClick={toggleEdit} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
        >
           {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            value="Iyehah Hacen" 
            disabled={!isEditing} 
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 ${isEditing ? 'border-gray-300' : 'bg-gray-100'}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input 
            type="text" 
            value="@iyehah" 
            disabled={!isEditing} 
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 ${isEditing ? 'border-gray-300' : 'bg-gray-100'}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select 
            disabled={!isEditing} 
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 ${isEditing ? 'border-gray-300' : 'bg-gray-100'}`}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <select 
            disabled={!isEditing} 
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 ${isEditing ? 'border-gray-300' : 'bg-gray-100'}`}
          >
            <option value="Nouakchott">Nouakchott</option>
            <option value="Tagant">Tagant</option>
            <option value="Trarza">Trarza</option>
            <option value="Adrar">Adrar</option>
            <option value="Hodh El Gharbi">Hodh El Gharbi</option>
            <option value="Hodh Ech Chargui">Hodh Ech Chargui</option>
            <option value="Gorgol">Gorgol</option>
            <option value="Brakna">Brakna</option>
            <option value="Guidimaka">Guidimaka</option>
            <option value="Inchiri">Inchiri</option>
            <option value="Dakhlet Nouadhibou">Dakhlet Nouadhibou</option>
            <option value="Tiris Zemmour">Tiris Zemmour</option>
            <option value="Assaba">Assaba</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select 
            disabled={!isEditing} 
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 ${isEditing ? 'border-gray-300' : 'bg-gray-100'}`}
          >
            <option>Arabic</option>
            <option>English</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number</label>
          <input 
            type="text" 
            value="+222 43000038" 
            disabled={!isEditing} 
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 ${isEditing ? 'border-gray-300' : 'bg-gray-100'}`}
          />
        </div>
      </div>

      {/* Email and Change Password Section */}
      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700">My Email Address</label>
        <div className="flex items-center space-x-4 mt-1">
          <input 
            type="text" 
            value="iyehah@gmail.com" 
            disabled 
            className="block w-full bg-gray-100 p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <p className="text-gray-500">1 month ago</p>
        </div>
        <button className="mt-4 bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200">
          Change Password
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
