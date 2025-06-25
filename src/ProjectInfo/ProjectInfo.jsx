import React from "react";

// ProjectInfo: Shows project details and key facts
const ProjectInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-4">
      <h2 className="text-lg font-semibold text-slate-700 mb-3">
        About the Project
      </h2>
      <p className="text-slate-500 mb-3 text-base">
        This demonstrator showcases our implementation of the Mini-Xception
        architecture for real-time emotion classification. The model processes
        facial expressions and classifies them into seven basic emotions,
        providing insights into the capabilities of convolutional neural
        networks for affective computing.
      </p>
      <div className="mb-3">
        <h3 className="font-medium text-slate-700 mb-1 text-base">
          Key Facts:
        </h3>
        <ul className="list-disc list-inside text-slate-500 text-sm ml-4 mb-2">
          <li>Model: Mini-Xception (Arriaga et al., 2017)</li>
          <li>Technique: Convolutional Neural Network (CNN)</li>
          <li>Dataset: FER2013</li>
          <li>Accuracy: 66% (Comparable to Human Performance)</li>
        </ul>
      </div>
      <a
        href="/research-paper.pdf"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-base transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the Full Research Paper (PDF)
      </a>
    </div>
  );
};

export default ProjectInfo;
