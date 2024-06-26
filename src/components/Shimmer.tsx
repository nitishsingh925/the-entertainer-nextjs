import React from "react";

interface IShimmerProps {
  title: string;
}

const Shimmer: React.FC<IShimmerProps> = ({ title }) => {
  return (
    <div className="px-6">
      <div className="text-lg md:text-3xl py-4 text-white">{title}</div>

      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex space-x-4">
          {Array(12)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="w-36 md:w-44 h-64 md:h-72 bg-neutral-500 bg-opacity-10 rounded-lg shadow-lg animate-pulse"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
