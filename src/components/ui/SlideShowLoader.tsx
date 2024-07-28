import { FaSpinner } from "react-icons/fa6";

import loaderimage from "../../assets/loaderimg.jpg";

export const SlideShowLoader = () => {
  return (
    <>
      <div
        className="slide-container"
        style={{
          backgroundImage: `url(${loaderimage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="z-50 h-full w-full bg-white opacity-75">
          <div className="flex h-full w-full items-center justify-center">
            <FaSpinner className="animate-spin text-5xl text-purple-500" />
          </div>
        </div>
      </div>
    </>
  );
};
