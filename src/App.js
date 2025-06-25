import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [emotionData, setEmotionData] = useState([]);

  const captureFrameAndSend = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("file", blob, "frame.jpg");

      try {
        const response = await axios.post("http://127.0.0.1:8000/predict", formData);
        setEmotionData(response.data.results);
      } catch (err) {
        console.error("API error:", err);
      }
    }, "image/jpeg");
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });

    const interval = setInterval(captureFrameAndSend, 1000); // capture every 1 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Emotion Recognition</h2>
      <video ref={videoRef} width="640" height="480" style={{ border: "1px solid black" }} />
      <canvas ref={canvasRef} width="640" height="480" hidden />

      <div>
        {emotionData.map((res, idx) => (
          <p key={idx}>
            Emotion: <strong>{res.label}</strong> (Confidence: {res.confidence})
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
