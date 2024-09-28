"use client";
import React, { useState, ChangeEvent } from 'react';
import { Friend } from '@/mockUsers';

interface SearchPlayerProps {
  players: Friend[];
  onPlayerSelect: (player: Friend) => void;
}

const SearchPlayer: React.FC<SearchPlayerProps> = ({ players, onPlayerSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Handle search input change
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter players based on the search term or show pinned friends if search term is empty
  const filteredPlayers = searchTerm
    ? players.filter(player =>
        player.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : players.filter(player => player.pin); // Show only pinned friends if no search term is entered

  return (
    <div className="w-full max-w-md mx-auto mb-4">
      {/* Search input */}
      <input
        type="text"
        className="p-3 border border-gray-300 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search by username"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Player List */}
      <ul className="list-none p-0 bg-white shadow-md rounded">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <li
              key={player.id}
              onClick={() => onPlayerSelect(player)}
              className="cursor-pointer p-2 hover:bg-blue-500 hover:text-white border-b last:border-none"
            >
              <div className="flex items-center space-x-2">
                <img src={player.image} alt={player.username} className="w-8 h-8 rounded-full" />
                <span>{player.name} <span className='text-[12px]'>@{player.username}</span></span>
              </div>
            </li>
          ))
        ) : (
          <li className="p-2 text-center text-gray-500">No players found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchPlayer;
