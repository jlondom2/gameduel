import { useParams } from "@tanstack/react-router";
import { PageBanner } from "../components/ui/PageBanner";

export const SearchPage = () => {
  const { query } = useParams({ strict: false });

  // Perform search logic based on the query parameter

  return (
    <>
      <PageBanner title={query || ""} />
    </>
  );
};
