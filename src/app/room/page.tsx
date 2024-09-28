"use client";
import React, { useState, useEffect } from 'react';
import GameGrid from '@/components/GameGrid';
import Players from '@/components/Players';
import SearchPlayer from '@/components/SearchPlayer';
import FavoriteFriends from '@/components/FavoriteFriends';
import PinFriends from '@/components/PinFriends';
import { mockUsers, Friend } from '@/mockUsers';  // Import mock users

const RoomPage = () => {
  const game = "8amt"; // Game state, to be passed as a prop to GameGrid
  const [rivalTimer, setRivalTimer] = useState(30);
  const [yourTimer, setYourTimer] = useState(30);
  const [turn, setTurn] = useState<'rival' | 'you'>('rival'); // Track current turn
  const [playerSelected, setPlayerSelected] = useState(false); // Whether a player has been selected
  const [selectedPlayer, setSelectedPlayer] = useState<Friend | null>(null); // Store the selected player information, initialized as null

  const [players] = useState<Friend[]>(mockUsers);  // Use mock users

  // Timer and turn management
  useEffect(() => {
    const interval = setInterval(() => {
      if (turn === 'rival') {
        setRivalTimer(prev => {
          if (prev > 0) return prev - 1;
          setTurn('you');
          return 30;
        });
      } else {
        setYourTimer(prev => {
          if (prev > 0) return prev - 1;
          setTurn('rival');
          return 30;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [turn]);

  // Handle player selection and switch to game view
  const handlePlayerSelect = (player: Friend) => {
    setSelectedPlayer(player);
    setPlayerSelected(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 sm:p-8 space-y-4">
      {!playerSelected ? (
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          {/* Search, Favorite, and Pin Components */}
          <SearchPlayer players={players} onPlayerSelect={handlePlayerSelect} />
          <div className='bg-white flex-grow p-4 rounded-md'>
            <PinFriends />
            <FavoriteFriends />
          </div>
        </div>
      ) : selectedPlayer ? (  // Ensure selectedPlayer is not null before rendering
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Rival Player */}
          <Players
            playerName={selectedPlayer.name}
            playerUsername={`@${selectedPlayer.username}`}
            playerImage={selectedPlayer.image}
            position="start"
            timer={rivalTimer}
            showTimer={turn === 'rival'}
          />

          
            <GameGrid game={game} />

          {/* You (Player 2) */}
          <Players
            playerName="Iyehah Hacen"
            playerUsername="@iyehah"
            playerImage="./images/iyehah.png"
            position="end"
            timer={yourTimer}
            showTimer={turn === 'you'}
          />
        </div>
      ) : null}
    </div>
  );
};

export default RoomPage;
