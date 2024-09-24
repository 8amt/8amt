import React from 'react';

interface PlayersProps {
  playerName: string;
  playerUsername: string;
  playerImage: string;
  position: "start" | "end";
  timer: number;
  showTimer: boolean; // New prop to control timer visibility
}

const Players: React.FC<PlayersProps> = ({ playerName, playerUsername, position, playerImage, timer, showTimer }) => {
  return (
    <div className={`flex flex-col items-center justify-${position} rounded bg-blue-200 p-2 w-full sm:w-auto`}>
      <div className="relative flex items-center space-x-2 bg-white rounded p-3 w-full sm:w-52">
        <img src={playerImage} alt={playerName} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <span className="text-black font-semibold">{playerName}</span>
          <span className="text-black">{playerUsername}</span>
        </div>
        {/* Conditional timer rendering based on `showTimer` */}
        {showTimer && (
          <div className={`w-8 h-8 flex items-center justify-center absolute top-1/3 right-1 rounded-full bg-blue-200 p-2 text-sm ${timer <= 10 ? "text-red-500" : "text-blue-500"}`}>
            <span className="font-bold">{timer}s</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;
