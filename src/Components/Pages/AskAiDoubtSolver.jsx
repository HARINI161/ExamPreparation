import React, { useState } from 'react';
import { NavLink } from 'react-router';

const AskAiDoubtSolver = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAI = () => {
    if (!question.trim()) return;

    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      setAnswer(`AI Answer: This is a placeholder answer to your question "${question}".`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col items-center justify-center p-6">
      
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
        AI Doubt Solver
      </h1>

      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md text-cyan-400 shadow-lg space-y-4">
        <textarea
          className="w-full p-3 rounded-md bg-gray-700 text-white resize-none"
          rows="4"
          placeholder="Type your doubt here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={handleAskAI}
          className="w-full px-6 py-2 rounded-full border border-cyan-400 text-white text-lg hover:bg-cyan-400 hover:text-black transition"
        >
          {isLoading ? 'Thinking...' : 'Ask AI'}
        </button>

        {answer && (
          <div className="bg-gray-700 p-4 rounded-md text-white">
            <h2 className="font-semibold mb-2">Answer:</h2>
            <p>{answer}</p>
          </div>
        )}

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

export default AskAiDoubtSolver;
