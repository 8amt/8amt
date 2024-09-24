import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { MdClose } from "react-icons/md";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
  onLogin: () => void;  // Callback function to log in
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToSignUp, onLogin }) => {
  if (!isOpen) return null;

  const handleLogin = () => {
    onLogin();  // Call the onLogin function to log the user in
    onClose();  // Close the modal after logging in
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-gray-900 p-8 rounded-md w-96 relative">
        <h2 className="text-center text-2xl font-bold mb-4">Login to account</h2>
        <button className="absolute top-4 right-4" onClick={onClose}>
          <MdClose size={20}/>
        </button>
        <div className="space-y-4">
          <div className='space-x-4 flex flex-row'>
            <button className="bg-blue-50 text-blue-500 w-full py-2 rounded flex justify-center items-center">
              <FcGoogle className='w-5 mr-2'/>
              Google
            </button>
            <button className="bg-blue-50 text-blue-500 w-full py-2 rounded flex justify-center items-center">
              <FaFacebook className="w-5 mr-2" /> Facebook
            </button>
          </div>
          <input className="border rounded-md p-2 w-full" type="text" placeholder="Email" />
          <input className="border rounded-md p-2 w-full" type="password" placeholder="Password" />
          <button onClick={handleLogin} className="bg-blue-500 w-full text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
          <p className="text-center text-sm">
            Don&apos;t have an account? <button onClick={onSwitchToSignUp} className="text-blue-500 hover:underline">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
