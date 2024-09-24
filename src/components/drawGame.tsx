"use client";
import React, { useEffect, useRef } from 'react';
import { useHandleGame } from './handleGame';

interface DrawGameProps {
  game: string;
}

export const DrawGame: React.FC<DrawGameProps> = ({ game }) => {
  const chessboardRef = useRef<HTMLDivElement | null>(null);
  

  const { handleDragStart, handleDragEnd, handleDotClick, handleDragOver, handleDrop } = useHandleGame();

  useEffect(() => {
    const chessboard = chessboardRef.current;

    // Cleanup the chessboard by removing any previous children
    if (chessboard) {
      while (chessboard.firstChild) {
        chessboard.removeChild(chessboard.firstChild);
      }

      // Draw grid lines
      for (let i = 1; i < 4; i++) {
        const horizontalLine = document.createElement('div');
        horizontalLine.classList.add('line', 'horizontal');
        horizontalLine.style.top = `${(i / 4) * 100}%`;
        chessboard.appendChild(horizontalLine);

        const verticalLine = document.createElement('div');
        verticalLine.classList.add('line', 'vertical');
        verticalLine.style.left = `${(i / 4) * 100}%`;
        chessboard.appendChild(verticalLine);
      }

      // Create diagonal lines
      const diagonal1 = document.createElement('div');
      diagonal1.classList.add('line', 'diagonal');
      chessboard.appendChild(diagonal1);

      const diagonal2 = document.createElement('div');
      diagonal2.classList.add('line', 'diagonal', 'diagonal-reverse');
      chessboard.appendChild(diagonal2);

      const lineFromDiv = document.createElement('div');
      lineFromDiv.classList.add('line', 'line-from-div');
      chessboard.appendChild(lineFromDiv);

      // Create corner dots with red and green dots inside them
      for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 4; col++) {
          createDot(row, col, chessboard);
        }
      }
    }

    // Cleanup function to remove elements on component unmount
    return () => {
      if (chessboard) {
        while (chessboard.firstChild) {
          chessboard.removeChild(chessboard.firstChild);
        }
      }
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Create corner dots and add red or green dots inside
  function createDot(row: number, col: number, chessboard: HTMLDivElement) {
    const cornerDot = document.createElement('div');
    cornerDot.classList.add('position');
    cornerDot.style.position = 'absolute';
    cornerDot.style.width = '5%';
    cornerDot.style.height = '5%';
    cornerDot.style.borderRadius = '50%';
    cornerDot.style.top = `${(row / 4) * 100}%`;
    cornerDot.style.left = `${(col / 4) * 100}%`;
    cornerDot.style.transform = 'translate(-50%, -50%)';
    cornerDot.id = `position_${row}_${col}`;

    cornerDot.addEventListener('dragover', handleDragOver);
    cornerDot.addEventListener('drop', handleDrop);
    chessboard.appendChild(cornerDot);

    // Create red or green dots inside the corner dots, excluding the center position
    if (row !== 2 || col !== 2) {
      const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.position = 'absolute';
            dot.style.top = '50%';
            dot.style.left = '50%';
            dot.style.transform = 'translate(-50%, -50%)';
            dot.draggable = true;
            // Assign color based on the number of dots
            if (row <= 1 && (col === 0 ||col === 1 ||col === 2 || col === 3 || col === 4) || row == 2 && (col === 0 ||col === 1)) {
                dot.classList.add('red');
            }
            if (row >= 3 && (col === 0 ||col === 1 ||col === 2 || col === 3 || col === 4)|| row == 2 && (col === 3 ||col === 4)) {
                dot.classList.add('green');
            }
        
      dot.addEventListener('dragstart', handleDragStart);
      dot.addEventListener('dragend', handleDragEnd);
      dot.addEventListener('click', handleDotClick);
      cornerDot.appendChild(dot);
    }
  }

  return (
    <div
      ref={chessboardRef}
      id="chessboard"
      className="h-[300px] w-[300px] sm:h-[500px] sm:w-[500px]"
    >
      {/* Additional content can go here */}
    </div>
  );
};
