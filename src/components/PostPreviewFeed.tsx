import { ErrorComponent } from "@tanstack/react-router";
import { useArticles } from "../hooks/useArticles";
import { PostPreviewLandscape } from "./postPreviews/PostPreviewLandscape";
export const PostPreviewFeed = () => {
  const { queryArticles } = useArticles({
    query: "VideoGames",
    pageSize: 5,
    sortBy: "publishedAt",
  });

  const { data, isError } = queryArticles;

  if (isError) return <ErrorComponent error={"Error Loading Data"} />;
  return (
    <>
      {data?.articles?.map((article, index) => (
        /*  <PostPreviewBig key={article.title} article={article} index={index} /> */
        <PostPreviewLandscape
          key={article.title}
          index={index}
          article={article}
          size="big"
        />
        /* Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni, debitis et voluptate molestias possimus nihil veniam cumque omnis dolor a beatae dolorem necessitatibus laborum delectus atque dicta ex facere. */
      ))}
    </>
  );
};
