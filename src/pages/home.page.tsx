import { useEffect } from "react";
import { LiveNews } from "../components/LiveNews";
import { SlideShow } from "../components/SlideShow";
import { PostPreviewSet } from "../components/PostPreviewSet";

import { PostPreviewFeed } from "../components/PostPreviewFeed";

import { Videos } from "../components/Videos";
import { Sidebar } from "../components/Sidebar";

export const HomePage = () => {
  //clear localstorage every 2 hours

  useEffect(() => {
    const interval = setInterval(
      () => {
        console.log("clearing local storage");
        localStorage.clear();
      },
      2 * 60 * 60 * 1000,
    ); // 2 hours in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  /* END CLEAR LOCAL STORAGE */

  return (
    <div>
      <SlideShow />

      <LiveNews />
      <div className="container max-w-screen-xl py-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-10">
          <div className="layout-content col-span-1 md:col-span-8">
            <PostPreviewSet />

            <div className="mt-7 grid grid-cols-10 gap-5">
              <div className="col-span-10">
                <PostPreviewFeed />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <Sidebar />
          </div>
        </div>
      </div>

      <Videos />
    </div>
  );
};
