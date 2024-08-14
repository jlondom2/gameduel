import { LatestNews } from "./sidebar/LatestNews";
import { PopularPosts } from "./sidebar/PopularPosts";
import { SearchForm } from "./sidebar/SearchForm";

export const Sidebar = () => {
  return (
    <div className="layout-sidebar layout-item">
      <div className="widget-sidebar">
        <SearchForm />
      </div>
      <div className="widget-sidebar">
        <PopularPosts />
      </div>

      <div className="widget-sidebar">
        <LatestNews />
      </div>
    </div>
  );
};
