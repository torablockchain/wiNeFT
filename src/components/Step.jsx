import React from "react";

const Step = ({ number, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2">
      <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-lg font-semibold mb-4 shadow-md">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">{description}</p>
    </div>
  );
};

export default Step;
