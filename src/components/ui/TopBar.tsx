import React from "react";

export const TopBar = () => {
  return (
    <div className="mx-auto flex w-full justify-end bg-gray py-2 text-white">
      <div className="container">
        <div className="flex items-center justify-end">
          <button className="rounded-full bg-pink px-4 font-exo text-sm font-semibold text-white">
            Logout{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
