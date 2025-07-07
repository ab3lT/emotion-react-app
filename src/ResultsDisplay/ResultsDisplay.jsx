import React, { useState } from "react";
import axios from "axios";

const ResultsDisplay = () => {
  const [predictedEmotion, setPredictedEmotion] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setPredictedEmotion(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    try {
      const res = await axios.post(
        "https://emotion-backend-6b7e5b8b9951.herokuapp.com/predict",
        formData
      );
      const result = res.data.results[0]?.label || "No face detected";
      setPredictedEmotion(result);
    } catch (error) {
      console.error("API error:", error);
      setPredictedEmotion("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-slate-700 mb-3">
        Emotion Predictor
      </h2>

      <input type="file" onChange={handleFileChange} accept="image/*" />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-3 rounded w-full border"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Predicting..." : "Predict Emotion"}
      </button>

      <div className="text-2xl font-bold text-center py-6 mt-4 bg-gray-100 rounded">
        {predictedEmotion || "--"}
      </div>
    </div>
  );
};

export default ResultsDisplay;
