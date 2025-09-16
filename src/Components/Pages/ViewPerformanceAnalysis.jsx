import React from 'react';
import { NavLink } from 'react-router';

const performanceData = {
  totalQuestions: 4,
  attempted: 4,
  correct: 3,
  incorrect: 1,
  scorePercentage: 75,
};

const ViewPerformanceAnalysis = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col items-center justify-center p-6">
      
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
        Performance Analysis
      </h1>

      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md text-cyan-400 space-y-4 shadow-lg">
        <div className="flex justify-between">
          <span>Total Questions:</span>
          <span>{performanceData.totalQuestions}</span>
        </div>

        <div className="flex justify-between">
          <span>Attempted:</span>
          <span>{performanceData.attempted}</span>
        </div>

        <div className="flex justify-between">
          <span>Correct Answers:</span>
          <span>{performanceData.correct}</span>
        </div>

        <div className="flex justify-between">
          <span>Incorrect Answers:</span>
          <span>{performanceData.incorrect}</span>
        </div>

        <div className="mt-4">
          <span className="block text-center mb-2">Score: {performanceData.scorePercentage}%</span>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-cyan-400 h-4 rounded-full"
              style={{ width: `${performanceData.scorePercentage}%` }}
            ></div>
          </div>
        </div>

        <NavLink
          to="/"
          className="block text-center mt-6 px-6 py-2 rounded-full border border-cyan-400 text-white text-lg hover:bg-cyan-400 hover:text-black transition"
        >
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

export default ViewPerformanceAnalysis;
