import React from "react";
import ResultsDisplay from "../ResultsDisplay/ResultsDisplay";
import ProbabilityChart from "./ProbabilityChart";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

// AnalysisPanel: Shows results, chart, and project info
const AnalysisPanel = ({ predictedEmotion, probabilities }) => {
  return (
    <div className="flex flex-col gap-5">
      <ResultsDisplay predictedEmotion={predictedEmotion} />
      <ProbabilityChart probabilities={probabilities} />
      <ProjectInfo />
    </div>
  );
};

export default AnalysisPanel;
