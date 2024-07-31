import { PageBanner } from "../components/ui/PageBanner";
import { PostPreviewLandscape } from "../components/postPreviews/PostPreviewLandscape";
import { SearchForm } from "../components/sidebar/SearchForm";
import { getRouteApi } from "@tanstack/react-router";
import { NoSearch } from "../components/search/NoSearch";
import { useSearchHook } from "../hooks/useSearch";
import { FullScreenLoader } from "../components/ui/FullScreenLoader";

export const SearchPage = () => {
  const pageSize = 100; // Adjust as needed

  const route = getRouteApi("/search");

  const routeSearch = route.useSearch();

  const query = routeSearch.q;

  const { querySearch } = useSearchHook({ query: query, pageSize: pageSize });

  const { data, isLoading, isError } = querySearch;
  console.log("🚀 ~ SearchPage ~ data:", data);

  if (!routeSearch.q) {
    return <NoSearch />;
  }
  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <PageBanner title={"Search Results"} />

      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-10">
          <div className="col-span-1 md:col-span-8">
            <div className="section-title-wrap blue">
              <h2 className="section-title medium">
                Search Results for "
                <span className="text-blue-100">{query}</span>"
              </h2>
              <div className="section-title-separator"></div>
            </div>

            <div className="filter-heading">
              <p className="filter-heading-text" style={{ fontSize: "14px" }}>
                <span className="highlight" style={{ fontSize: "14px" }}>
                  {data?.totalArticles}
                </span>{" "}
                Results found
              </p>
            </div>

            <div className="post-preview-showcase">
              {data?.articles?.map((article) => (
                <PostPreviewLandscape key={article.title} article={article} />
              )) || (
                <>
                  <div
                    className="dark:bg-gray-800 mb-4 flex items-center rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:text-red-400"
                    role="alert"
                  >
                    <svg
                      className="me-3 inline h-4 w-4 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">Error!</span> No Results
                      Found. Please Try Again!
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <SearchForm />
          </div>
        </div>
      </div>
    </>
  );
};
