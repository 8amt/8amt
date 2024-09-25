// app/page.tsx or app/home.tsx
"use client";

import { motion } from "framer-motion";
import { useUser } from "@/components/UserContext";
import Link from "next/link";

const Home: React.FC = () => {
  const { loggedIn } = useUser(); // Access the global loggedIn state

  return (
    <section className="herosection relative h-screen flex items-center justify-center bg-cover bg-center">
      {/* Overlay */}
      <div className="overlay absolute inset-0 bg-blue-300 opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white max-w-2xl text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enter the World of <span className="text-blue-500">8amt</span>
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Mauritani Game
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          {loggedIn ? (
            <Link
            href="/room"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 hover:border-blue-600 transition duration-300"
          >
            Start Game
          </Link>
          ) : (
            <Link
              href="/about"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 hover:border-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
