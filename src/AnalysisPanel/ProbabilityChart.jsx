import React from "react";

const EMOTIONS = [
  "Happy",
  "Sad",
  "Angry",
  "Surprise",
  "Neutral",
  "Fear",
  "Disgust",
];

const COLORS = [
  "bg-yellow-300",
  "bg-blue-400",
  "bg-red-400",
  "bg-pink-400",
  "bg-gray-400",
  "bg-purple-400",
  "bg-green-400",
];

// ProbabilityChart: Shows emotion probabilities as a horizontal bar chart
const ProbabilityChart = ({ probabilities }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-4 overflow-x-auto">
      <h2 className="text-lg font-semibold text-slate-700 mb-3">
        Emotion Probabilities
      </h2>
      <div className="flex flex-col gap-2 min-w-[250px]">
        {EMOTIONS.map((emotion, idx) => (
          <div key={emotion} className="flex items-center gap-2">
            <span className="w-20 text-slate-500 text-sm">{emotion}</span>
            <div className="flex-1 h-4 rounded bg-gray-200 overflow-hidden mx-2">
              <div
                className={`h-full rounded transition-all duration-500 ${COLORS[idx]}`}
                style={{ width: `${probabilities[idx] || 0}%` }}
              ></div>
            </div>
            <span className="w-10 text-right text-slate-700 text-sm font-medium">
              {probabilities[idx] || 0}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProbabilityChart;
