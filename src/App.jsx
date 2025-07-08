import React from "react";
import Header from "./Header/Header";
import EmotionDemonstrator from "./EmotionDemonstrator/EmotionDemonstrator";

// App: Main SPA wrapper
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center">
        <EmotionDemonstrator />
      </main>
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-5 mt-8">
        <div className="text-center">
          <p className="text-base mb-2">
            © {new Date().getFullYear()} Emotion Classification Team
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <span className="text-slate-200 text-lg">TensorFlow</span>
            <span className="text-slate-200 text-lg">Keras</span>
            <span className="text-slate-200 text-lg">OpenCV</span>
            <span className="text-slate-200 text-lg">Python</span>
            <span className="text-slate-200 text-lg">Flask</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
