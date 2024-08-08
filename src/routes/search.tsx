import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "../pages/search.page";

interface NewsSearch {
  q: string;
}

export const Route = createFileRoute("/search")({
  component: () => <SearchPage />,
  validateSearch: (search: Record<string, unknown>): NewsSearch => {
    return {
      q: (search.q as string) || "",
    };
  },
});
