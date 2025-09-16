import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f1c]">
      <nav className="rounded-xl border border-cyan-400 p-12 w-96 flex flex-col items-center gap-8 shadow-[0_0_20px_#0ff]">
        <h1 className="text-4xl font-semibold text-cyan-400 text-center">
          AI-Powered<br />Exam Prep
        </h1>
        <NavLink
          to="/StartYourPrep"
          className="px-8 py-3 rounded-full border border-cyan-400 text-white text-lg button hover:bg-cyan-400 hover:text-black transition text-center"
        >
          Start Your Prep
        </NavLink>
      </nav>

      <style jsx>{`
        .neon-text {
          text-shadow:
            0 0 5px #00f0ff,
            0 0 10px #00f0ff,
            0 0 20px #00f0ff,
            0 0 30px #00f0ff;
        }
        .neon-button {
          box-shadow:
            0 0 5px #00f0ff,
            0 0 10px #00f0ff,
            0 0 20px #00f0ff,
            0 0 30px #00f0ff;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
