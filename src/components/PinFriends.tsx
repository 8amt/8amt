"use client"; 
import React, { useState } from 'react';
import { Friend, mockUsers } from '@/mockUsers';
import { TbPin } from "react-icons/tb";

const PinFriends: React.FC = () => {
  // Filter initial pinned friends to include only those who are friends and pinned
  const initialPinnedFriends = mockUsers.filter(friend => friend.pin && friend.friend);
  const [pinnedFriends, setPinnedFriends] = useState<Friend[]>(initialPinnedFriends);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFriends, setSelectedFriends] = useState<Friend[]>([]);

  const handleFriendToggle = (friend: Friend) => {
    if (selectedFriends.includes(friend)) {
      setSelectedFriends(prev => prev.filter(f => f.id !== friend.id));
    } else {
      if (selectedFriends.length < 5) {
        // Allow selecting only friends who can be pinned
        if (friend.friend) {
          setSelectedFriends(prev => [...prev, friend]);
        }
      } else {
        alert("You can only pin a maximum of 5 friends.");
      }
    }
  };

  const handleSave = () => {
    // Update the pin status of friends and filter to only include those who are friends
    const updatedFriends = mockUsers.map(friend => ({
      ...friend,
      pin: selectedFriends.includes(friend),
    }));

    setPinnedFriends(updatedFriends.filter(friend => friend.pin && friend.friend));
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <div className='flex flex-row items-center justify-between p-2 rounded'>
        <h2 className="text-xl font-semibold mb-4">Pinned Friends</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          <TbPin />
        </button>
      </div>

      {/* Pinned Friends List */}
      <ul className="list-none p-0 bg-white shadow-md rounded mb-4">
        {pinnedFriends.length > 0 ? (
          pinnedFriends.map((friend) => (
            <li key={friend.id} className="flex items-center p-2 border-b last:border-none">
              <div className="flex items-center space-x-2">
                <img src={friend.image} alt={friend.username} className="w-8 h-8 rounded-full" />
                <span>{friend.username}</span>
              </div>
            </li>
          ))
        ) : (
          <li className="p-2 text-center text-gray-500">No pinned friends</li>
        )}
      </ul>

      {/* Edit Pin Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h4 className="mb-4">Edit Pinned Friends</h4>
            <ul className="list-none max-h-60 overflow-auto mb-4">
              {mockUsers.filter(friend => friend.friend).map(friend => ( // Only show friends
                <li key={friend.id} className="p-2 border-b flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFriends.includes(friend)}
                    onChange={() => handleFriendToggle(friend)}
                    className="mr-2"
                  />
                  <img src={friend.image} alt={friend.username} className="w-8 h-8 rounded-full mr-2" />
                  <span>{friend.username}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button onClick={() => setIsModalOpen(false)} className="mr-2 p-2 bg-gray-300 rounded">Cancel</button>
              <button onClick={handleSave} className="p-2 bg-blue-500 text-white rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PinFriends;
