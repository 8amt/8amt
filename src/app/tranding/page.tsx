// tranding/page.tsx
"use client"
import { useState } from "react";
import Maps from "@/components/maps";

// Dummy data for rankings
const countryRanking = [
  { rank: 1, player: "Player 1" },
  { rank: 2, player: "Player 2" },
  { rank: 3, player: "Player 3" },
  { rank: 4, player: "Player 4" },
  { rank: 5, player: "Player 5" },
  { rank: 6, player: "Player 6" },
  { rank: 7, player: "Player 7" },
  { rank: 8, player: "Player 8" },
  { rank: 9, player: "Player 9" },
  { rank: 10, player: "Player 10" },
];

const regionRanking = [
  { rank: 1, player: "Player A" },
  { rank: 2, player: "Player B" },
  { rank: 3, player: "Player C" },
  { rank: 4, player: "Player D" },
  { rank: 5, player: "Player E" },
  { rank: 6, player: "Player F" },
  { rank: 7, player: "Player G" },
  { rank: 8, player: "Player H" },
  { rank: 9, player: "Player I" },
  { rank: 10, player: "Player J" },
];

// Component for showing rankings
const RankingList = ({ title, ranking }: { title: string; ranking: any[] }) => (
  <div className="w-full">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <ul className="list-none p-0">
      {ranking.map(({ rank, player }) => (
        <li key={rank} className="flex justify-between border-b py-1">
          <span>{rank}</span>
          <span>{player}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function TrandingPage() {

  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
      

      {/* SVG Map Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Select Region</h1>
        <div
          className="border border-gray-300"
        />
            <Maps selected/>
      </div>

      {/* Ranking Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <RankingList title="Top 10 Players in Country" ranking={countryRanking} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <RankingList title="Top 10 Players in Region" ranking={regionRanking} />
      </div>
    </div>
  );
}
