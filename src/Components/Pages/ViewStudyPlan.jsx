import React from 'react';

const ViewStudyPlan = () => {
  return (
    <div className="min-h-screen bg-[#00080a] flex items-center justify-center p-6">
      <div className="max-w-7xl w-full rounded-2xl border border-cyan-500 p-8 bg-[#001117] shadow-[0_0_20px_#00f0ff]">
        <h1 className="text-3xl font-semibold text-cyan-400 mb-8">AI Exam Prep Assistant</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Create Study Plan */}
          <div className="flex-1 border border-cyan-700 rounded-lg p-6 bg-[#001a27]">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300">Create Study Plan</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Exam Name"
                className="bg-transparent border border-cyan-600 rounded px-3 py-2 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Subjects (comma separated)"
                className="bg-transparent border border-cyan-600 rounded px-3 py-2 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="number"
                placeholder="Available Hours/day"
                className="bg-transparent border border-cyan-600 rounded px-3 py-2 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="date"
                placeholder="Start Date"
                className="bg-transparent border border-cyan-600 rounded px-3 py-2 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="date"
                placeholder="End Date"
                className="bg-transparent border border-cyan-600 rounded px-3 py-2 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="mt-4 bg-transparent border border-cyan-400 rounded px-4 py-2 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
              >
                Generate AI Study Plan
              </button>
            </form>
          </div>

          {/* Middle: Weekly Study Plan */}
          <div className="flex-[2] border border-cyan-700 rounded-lg p-6 bg-[#001a27] overflow-auto max-h-[480px]">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300">Weekly Study Plan</h2>
            <table className="table-auto w-full text-cyan-200 text-xs border-collapse border border-cyan-600">
              <thead>
                <tr>
                  <th className="border border-cyan-600 px-2 py-1">Mon</th>
                  <th className="border border-cyan-600 px-2 py-1">Tue</th>
                  <th className="border border-cyan-600 px-2 py-1">Wed</th>
                  <th className="border border-cyan-600 px-2 py-1">Thu</th>
                  <th className="border border-cyan-600 px-2 py-1">Fri</th>
                  <th className="border border-cyan-600 px-2 py-1">Sat</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    {[...Array(6)].map((_, colIdx) => (
                      <td key={colIdx} className="border border-cyan-600 px-2 py-1 align-top">
                        <div className="font-semibold text-white">Topic {rowIdx + 1}</div>
                        <div className="text-[10px] mt-1 leading-tight">
                          Distation: 1.{rowIdx * 3 + colIdx} <br />
                          AI Notice Xexa
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-cyan-400 text-xs">
              AI-generated plan based on past performance and syllabus analysis
            </p>
          </div>

          {/* Right: Summary */}
          <div className="w-40 border border-cyan-700 rounded-lg p-6 bg-[#001a27] flex flex-col items-center justify-center text-center text-cyan-300">
            <div className="mb-8">
              <div className="text-sm">Total Hours</div>
              <div className="text-3xl font-bold text-white">25 hrs</div>
            </div>
            <div>
              <div className="text-sm">Weak Topics</div>
              <div className="text-3xl font-bold text-white">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudyPlan;
