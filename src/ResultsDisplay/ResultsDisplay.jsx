import React from "react";

// ResultsDisplay: Shows the predicted emotion
const ResultsDisplay = ({ predictedEmotion }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-4">
      <h2 className="text-lg font-semibold text-slate-700 mb-3">
        PREDICTED EMOTION
      </h2>
      <div className="text-2xl font-bold text-center py-6 bg-gray-100 rounded">
        {predictedEmotion || "--"}
      </div>
    </div>
  );
};

export default ResultsDisplay;
