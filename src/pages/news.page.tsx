import { useParams } from "@tanstack/react-router";
import { PageBanner } from "../components/ui/PageBanner";

import { Sidebar } from "../components/Sidebar";
import { useArticles } from "../hooks";
import { PostPreviewBig } from "../components/postPreviews/PostPreviewBig";

import { Pagination } from "../components/Pagination";
import { NotFound } from "./notFound.page";
import { LoaderSmall } from "../components/ui/LoaderSmall";
import useUIStore from "../stores/ui.store";

export const NewsPage = () => {
  const { cat } = useParams({ strict: false });

  const newsPage = useUIStore((state) => state.newsPage);

  const { queryArticles } = useArticles({
    query: cat || "",
    pageSize: 8,
    sortBy: "publishedAt",
    page: newsPage,
  });

  const articles = queryArticles.data?.articles || [];

  if (queryArticles.isError) {
    return <NotFound />;
  }

  return (
    <>
      <PageBanner title={`${cat}`} />
      <div className="container py-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-10">
          <div className="col-span-1 md:col-span-8">
            <div className="section-title-wrap blue">
              <h2 className="section-title medium">{cat} News</h2>
              <div className="section-title-separator"></div>
            </div>

            {queryArticles.isLoading || queryArticles.isFetching ? (
              <LoaderSmall />
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-10">
                {articles.map((article, index) => (
                  <div className="col-span-1 md:col-span-5" key={index}>
                    <PostPreviewBig article={article} index={index} />
                  </div>
                ))}
              </div>
            )}

            <Pagination data={queryArticles.data || []} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
