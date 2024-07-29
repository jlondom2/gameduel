import { useEffect } from "react";
import { LiveNews } from "../components/LiveNews";
import { SlideShow } from "../components/SlideShow";
import { PostPreviewSet } from "../components/PostPreviewSet";
import { SearchForm } from "../components/sidebar/SearchForm";

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
      <div className="container py-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-10">
          <div className="layout-content col-span-1 md:col-span-8">
            <PostPreviewSet />
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="layout-sidebar layout-item">
              <div className="widget-sidebar">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
