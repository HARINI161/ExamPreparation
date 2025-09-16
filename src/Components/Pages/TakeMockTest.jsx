import React, { useState } from 'react';
import { NavLink } from 'react-router';

const questions = [
  {
    question: "What is the value of π (Pi) up to two decimal places?",
    options: [
      { label: 'A', text: '3.14' },
      { label: 'B', text: '3.15' },
      { label: 'C', text: '3.16' },
      { label: 'D', text: '3.17' },
    ],
  },
  {
    question: "What is 5 + 7?",
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '11' },
      { label: 'C', text: '12' },
      { label: 'D', text: '13' },
    ],
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: [
      { label: 'A', text: 'Earth' },
      { label: 'B', text: 'Jupiter' },
      { label: 'C', text: 'Saturn' },
      { label: 'D', text: 'Mars' },
    ],
  },
  {
    question: "What is the capital of France?",
    options: [
      { label: 'A', text: 'Paris' },
      { label: 'B', text: 'London' },
      { label: 'C', text: 'Berlin' },
      { label: 'D', text: 'Rome' },
    ],
  },
];

const totalQuestions = questions.length;

const TakeMockTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (label) => {
    setSelectedOption(label);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    alert("Test submitted successfully!");
  };

  const progressWidth = ((currentIndex + 1) / totalQuestions) * 100;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center p-6">
        <div className="text-center text-cyan-400 font-sans">
          <h2 className="text-3xl font-bold mb-6">Test Submitted!</h2>
          <NavLink
            to="/ViewPerformanceAnalysis"
            className="inline-block px-8 py-3 rounded-full border border-green-500 text-white text-lg hover:bg-green-500 hover:text-black transition"
          >
            View Performance Analysis
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center p-6">
      <div
        className="border border-cyan-500 rounded-2xl p-6 max-w-md w-full text-cyan-400 font-sans"
        style={{
          boxShadow: '0 0 20px #0ff, inset 0 0 15px #0ff',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex justify-between text-xs font-semibold mb-4">
          <span>TIME REMAINING</span>
          <span className="text-lg font-bold">45:00</span>
        </div>

        <h1 className="text-2xl font-bold mb-4">
          Mathematics Mock Test<br /> – {totalQuestions} Questions
        </h1>

        <div className="border border-cyan-400 rounded-lg p-4 mb-4 text-white">
          <p className="mb-3">
            <strong>{currentIndex + 1}. </strong>{currentQuestion.question}
          </p>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleOptionSelect(option.label)}
                className={`flex items-center border rounded-md px-4 py-2 w-full text-left transition
                  ${selectedOption === option.label ? 'bg-cyan-400 text-black border-cyan-400' : 'border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white'}`}
              >
                <span className="mr-3 font-bold">{option.label}</span>
                <span>{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="w-full bg-gray-800 rounded-full h-2 mr-4">
            <div
              className="bg-cyan-400 h-2 rounded-full"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <span className="text-cyan-400 text-sm">{currentIndex + 1} of {totalQuestions}</span>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex-1 border border-cyan-400 rounded-md py-2 text-white hover:bg-cyan-400 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={handleNext}
              className="flex-1 border border-cyan-400 rounded-md py-2 text-white hover:bg-cyan-400 hover:text-black transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex-1 border border-green-500 rounded-md py-2 text-white hover:bg-green-500 hover:text-black transition"
            >
              Submit Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TakeMockTest;
