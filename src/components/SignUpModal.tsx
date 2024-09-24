import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import { select } from 'framer-motion/client';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-gray-900 p-8 rounded-md w-96 relative">
        <h2 className="text-center text-2xl font-bold mb-4">Create an account</h2>
        <button className="absolute top-4 right-4" onClick={onClose}>
          <MdClose size={24} />
        </button>

        <div className="space-y-4">
          <div className="space-x-4 flex flex-row">
            <button className="bg-blue-50 text-blue-500 w-full py-2 rounded flex justify-center items-center">
              <FcGoogle className="w-5 mr-2" /> Google
            </button>
            <button className="bg-blue-50 text-blue-500 w-full py-2 rounded flex justify-center items-center">
              <FaFacebook className="w-5 mr-2" /> Facebook
            </button>
          </div>

          <input type="text" placeholder="Name" className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500" />

          {/* Custom Styled Select */}
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className="custom-select w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="" disabled>Select your region</option>
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

          <input type="password" placeholder="Password" className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500" />

          <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </div>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <span className="text-blue-500 cursor-pointer" onClick={onSwitchToLogin}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
