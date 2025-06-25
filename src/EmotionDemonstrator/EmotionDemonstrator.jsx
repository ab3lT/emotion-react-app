import React, { useState, useRef } from "react";
import VideoFeed from "../VideoFeed/VideoFeed";
import AnalysisPanel from "../AnalysisPanel/AnalysisPanel";

// EmotionDemonstrator: Main orchestrator for webcam/upload and analysis
const EmotionDemonstrator = () => {
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [predictedEmotion, setPredictedEmotion] = useState("");
  const [probabilities, setProbabilities] = useState(Array(7).fill(0));
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Mock function - replace with actual webcam handling and API calls
  const handleStartWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsWebcamOn(true);

      // Mock emotion detection - replace with actual API calls
      const mockEmotions = [
        "Happy",
        "Sad",
        "Angry",
        "Surprise",
        "Neutral",
        "Fear",
        "Disgust",
      ];
      const mockInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * mockEmotions.length);
        setPredictedEmotion(mockEmotions[randomIndex]);

        const mockProbs = Array(7)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100));
        const total = mockProbs.reduce((sum, val) => sum + val, 0);
        const normalizedProbs = mockProbs.map((prob) =>
          Math.round((prob / total) * 100)
        );
        setProbabilities(normalizedProbs);
      }, 2000);

      return () => clearInterval(mockInterval);
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const handleStopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsWebcamOn(false);
    setPredictedEmotion("");
    setProbabilities(Array(7).fill(0));
  };

  const handleUpload = (file) => {
    // Handle file upload and processing
    console.log("File uploaded:", file);
    // For demo purposes, set a random emotion
    const mockEmotions = [
      "Happy",
      "Sad",
      "Angry",
      "Surprise",
      "Neutral",
      "Fear",
      "Disgust",
    ];
    const randomIndex = Math.floor(Math.random() * mockEmotions.length);
    setPredictedEmotion(mockEmotions[randomIndex]);

    const mockProbs = Array(7)
      .fill(0)
      .map(() => Math.floor(Math.random() * 100));
    const total = mockProbs.reduce((sum, val) => sum + val, 0);
    const normalizedProbs = mockProbs.map((prob) =>
      Math.round((prob / total) * 100)
    );
    setProbabilities(normalizedProbs);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-2">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex-1">
          <VideoFeed
            isWebcamOn={isWebcamOn}
            videoRef={videoRef}
            canvasRef={canvasRef}
            onStartWebcam={handleStartWebcam}
            onStopWebcam={handleStopWebcam}
            onUpload={handleUpload}
          />
        </div>
        <div className="flex-1">
          <AnalysisPanel
            predictedEmotion={predictedEmotion}
            probabilities={probabilities}
          />
        </div>
      </div>
    </div>
  );
};

export default EmotionDemonstrator;
