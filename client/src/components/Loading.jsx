import React from "react";

const Loading = () => {
  return (
    <div className="flex h-[55vh] items-center justify-center">
      <div className="border-t-primary h-14 w-14 animate-spin rounded-full border-2"></div>
    </div>
  );
};

export default Loading;
