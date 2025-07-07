import React, { useRef } from "react";
import reactLogo from "../assets/react.svg"; // adjust path if needed

const VideoFeed = ({
  isWebcamOn,
  videoRef,
  canvasRef,
  onStartWebcam,
  onStopWebcam,
  onUpload,
}) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="bg-slate-100 rounded-xl shadow p-5">
      <div className="relative mb-4 aspect-video w-full max-w-2xl mx-auto">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute top-0 left-0 w-full h-full rounded-lg border border-slate-300 bg-black object-cover"
          style={{ display: isWebcamOn ? "block" : "none" }}
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg border border-slate-300 bg-transparent pointer-events-none"
          style={{ display: isWebcamOn ? "block" : "none" }}
        />
        {/* Rectangle overlay for scan area */}
        {isWebcamOn && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <div
              className="border-4 border-emerald-500 rounded-lg shadow-lg animate-pulse"
              style={{
                width: "70%",
                height: "60%",
                minWidth: 240,
                minHeight: 160,
                maxWidth: 480,
                maxHeight: 340,
                boxSizing: "border-box",
                background: "rgba(0,0,0,0.03)",
              }}
            ></div>
          </div>
        )}
        {!isWebcamOn && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 rounded-lg border border-slate-300">
            <p className="text-slate-500 text-center text-base">
              Video feed will appear here
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        {!isWebcamOn ? (
          <button
            onClick={onStartWebcam}
            className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Start Webcam
          </button>
        ) : (
          <button
            onClick={onStopWebcam}
            className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-medium transition"
          >
            Stop Webcam
          </button>
        )}
        <button
          onClick={() => fileInputRef.current.click()}
          className="px-5 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition"
        >
          Upload Image/Video
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,video/*"
          className="hidden"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-white py-4 sm:py-6 px-2 sm:px-4 mb-6 sm:mb-8 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center">
        <img
          src={reactLogo}
          alt="Logo"
          className="w-10 h-10 mr-3 mb-2 sm:mb-0"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-md">
            Emotion Classification Using CNNs:{" "}
            <span className="text-yellow-300">
              The Mini-Xception Model in Action
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-1 font-medium text-blue-100">
            Prepared by: <span className="text-yellow-200">Abel Tadesse</span>,{" "}
            <span className="text-yellow-200">Simreteab mekbib</span>,{" "}
            <span className="text-yellow-200">Awol Alebe</span>
          </p>
          <p className="text-indigo-200 text-xs sm:text-base font-light">
            Addis Ababa Institute of Technology
          </p>
        </div>
      </div>
    </header>
  );
};

export default VideoFeed;
import React, { useRef } from "react";
import reactLogo from "../assets/react.svg"; // adjust path if needed

const VideoFeed = ({
  isWebcamOn,
  videoRef,
  canvasRef,
  onStartWebcam,
  onStopWebcam,
  onUpload,
}) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="bg-slate-100 rounded-xl shadow p-5">
      <div className="relative mb-4 aspect-video w-full max-w-2xl mx-auto">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute top-0 left-0 w-full h-full rounded-lg border border-slate-300 bg-black object-cover"
          style={{ display: isWebcamOn ? "block" : "none" }}
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg border border-slate-300 bg-transparent pointer-events-none"
          style={{ display: isWebcamOn ? "block" : "none" }}
        />
        {/* Rectangle overlay for scan area */}
        {isWebcamOn && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <div
              className="border-4 border-emerald-500 rounded-lg shadow-lg animate-pulse"
              style={{
                width: "70%",
                height: "60%",
                minWidth: 240,
                minHeight: 160,
                maxWidth: 480,
                maxHeight: 340,
                boxSizing: "border-box",
                background: "rgba(0,0,0,0.03)",
              }}
            ></div>
          </div>
        )}
        {!isWebcamOn && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 rounded-lg border border-slate-300">
            <p className="text-slate-500 text-center text-base">
              Video feed will appear here
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        {!isWebcamOn ? (
          <button
            onClick={onStartWebcam}
            className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Start Webcam
          </button>
        ) : (
          <button
            onClick={onStopWebcam}
            className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-medium transition"
          >
            Stop Webcam
          </button>
        )}
        <button
          onClick={() => fileInputRef.current.click()}
          className="px-5 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition"
        >
          Upload Image/Video
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,video/*"
          className="hidden"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-white py-4 sm:py-6 px-2 sm:px-4 mb-6 sm:mb-8 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center">
        <img
          src={reactLogo}
          alt="Logo"
          className="w-10 h-10 mr-3 mb-2 sm:mb-0"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-md">
            Emotion Classification Using CNNs:{" "}
            <span className="text-yellow-300">
              The Mini-Xception Model in Action
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-1 font-medium text-blue-100">
            Prepared by: <span className="text-yellow-200">Abel Tadesse</span>,{" "}
            <span className="text-yellow-200">Simreteab Sikora</span>,{" "}
            <span className="text-yellow-200">Awol Alebe</span>
          </p>
          <p className="text-indigo-200 text-xs sm:text-base font-light">
            Addis Ababa Institute of Technology
          </p>
        </div>
      </div>
    </header>
  );
};

export default VideoFeed;
