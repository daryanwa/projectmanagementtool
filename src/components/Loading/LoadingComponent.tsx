import React from "react";

function LoadingComponent() {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className=" bg-yellow-800 h-8 rounded-full dark:bg-yellow-100 mb-2.5 mt-8"></div>
      <div className=" bg-yellow-800 h-8 rounded-full dark:bg-yellow-100 mb-2.5 mt-8"></div>
      <span className="flex justify-center  animate-bounce mt-8 font-bold">
        Loading...
      </span>
    </div>
  );
}

export default LoadingComponent;
