import React from 'react';
import { NavLink } from 'react-router';

export const StartYourPrep = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col items-center justify-center px-4">
      
      {/* Brain Icon */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cyan-400 animate-pulse drop-shadow-[0_0_8px_#00f0ff]"
        >
          <path d="M12 2a7 7 0 0 0-7 7v1.5A2.5 2.5 0 0 0 4.5 13v1A2.5 2.5 0 0 0 7 16.5V17a5 5 0 0 0 5 5"></path>
          <path d="M12 2a7 7 0 0 1 7 7v1.5a2.5 2.5 0 0 1 1.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5V17a5 5 0 0 1-5 5"></path>
          <line x1="12" y1="6" x2="12" y2="10"></line>
          <line x1="12" y1="14" x2="12" y2="14"></line>
        </svg>
      </div>

      {/* Heading */}
      <div className="text-3xl md:text-4xl font-semibold text-center text-white mb-8">
        Welcome to Your <br />
        AI-Powered Study Journey!
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
          <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <p className="text-center text-sm text-gray-300">45%</p>
      </div>

      {/* Buttons */}
      <div className="space-y-4 mt-8 w-full max-w-md">
        <NavLink
          to="/ViewStudyPlan"
          className="w-full block border border-cyan-400 text-white py-2 rounded-md text-lg text-center hover:bg-cyan-400 hover:text-black transition"
        >
          View Study Plan
        </NavLink>

        <NavLink
          to="/TakeMockTest"
          className="w-full block border border-cyan-400 text-white py-2 rounded-md text-lg text-center hover:bg-cyan-400 hover:text-black transition"
        >
          Take Mock Test
        </NavLink>

        <NavLink
          to="/AskAiDoubtSolver"
          className="w-full block border border-cyan-400 text-white py-2 rounded-md text-lg text-center hover:bg-cyan-400 hover:text-black transition"
        >
          Ask AI Doubt Solver
        </NavLink>
      </div>

      {/* Footer Text */}
      <p className="mt-10 text-gray-500 text-sm text-center">
        Stay Consistent, You Are Doing Great!
      </p>
    </div>
  );
};
