import { useArticles } from "../hooks/useArticles";
import { PostPreview } from "./postPreviews/PostPreview";
import { SlideShowLoader } from "./ui/SlideShowLoader";

export const PostPreviewSet = () => {
  const { queryArticles } = useArticles({
    query: "videogames",
    pageSize: 4,
    sortBy: "relevance",
  });

  const { data, isLoading, isError } = queryArticles;

  if (isError) {
    return (
      <div>
        <h1 className="text-3xl text-red-600">ERROR GETTING DATA</h1>
      </div>
    );
  }
  return (
    <>
      {isLoading && <SlideShowLoader />}

      <div className={`homeset grid grid-flow-col grid-rows-3 gap-0`}>
        {data?.articles?.map((article, index) => (
          <div
            className={`${index === 0 ? "row-span-3" : "col-span-1"} ${index === data.articles.length - 1 && "row-span-1"} `}
            key={article.title}
          >
            <PostPreview size={index === 0 ? "full" : ""} article={article} />
          </div>
        ))}
      </div>
      {/* <div className="grid grid-flow-col grid-rows-3 gap-0">
        <div className="row-span-3">
          <PostPreview size={"full"} />
        </div>
        <div className="col-span-1">
          <PostPreview />
        </div>
        <div className="col-span-1">
          <PostPreview />
        </div>

        <div className="col-span-1 row-span-1">
          <PostPreview />
        </div>
      </div> */}
    </>
  );
};
