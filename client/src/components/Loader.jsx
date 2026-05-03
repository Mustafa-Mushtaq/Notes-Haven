import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#fef6e4] flex items-center justify-center z-50">
      
      <div className="text-center">
        <h1 className="text-4xl font-[Patrick_Hand] text-[#001858] animate-pulse">
          📝 Notes-Haven...
        </h1>
        <p className="text-lg font-[Patrick_Hand] text-[#001858] animate-pulse">
          Your personal assistant
        </p>

        <div className="mt-6 flex justify-center gap-2">
          <div className="w-3 h-3 bg-[#f582ae] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#8bd3dd] rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-[#f582ae] rounded-full animate-bounce delay-300"></div>
        </div>
      </div>

    </div>
  );
};

export default Loader;