import React from "react";

// Header: App title and authors
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-white py-6 px-2 mb-8 shadow-lg">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-md">
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
    </header>
  );
};

export default Header;
