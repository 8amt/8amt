"use client";
import React, { useState, useEffect } from 'react';
import GameGrid from '@/components/GameGrid';
import Players from '@/components/Players';

const RoomPage = () => {
  const game = "8amt"; // Game state, to be passed as a prop to GameGrid
  const [rivalTimer, setRivalTimer] = useState(30);
  const [yourTimer, setYourTimer] = useState(30);
  const [turn, setTurn] = useState<'rival' | 'you'>('rival'); // Track current turn

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

  return (
    <div className="min-h-[85vh] flex flex-col justify-between p-4 space-y-4">
      {/* Responsive layout for Players and GameGrid */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Rival Player */}
        <Players
          playerName="Player Name"
          playerUsername="@username"
          playerImage="./images/vall.png"
          position="start"
          timer={rivalTimer}
          showTimer={turn === 'rival'}
        />

        {/* Game Grid */}
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
    </div>
  );
};

export default RoomPage;
