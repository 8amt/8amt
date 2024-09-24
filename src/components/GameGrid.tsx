"use client";
import React from 'react';
import { DrawGame } from './drawGame';

interface GameGridProps {
  game: string;
}

const GameGrid: React.FC<GameGridProps> = ({ game }) => {
  return (
    <div>
      <DrawGame game={game} />
    </div>
  );
};

export default GameGrid;
