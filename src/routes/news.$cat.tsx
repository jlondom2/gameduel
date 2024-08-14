import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "../pages/news.page";

export const Route = createFileRoute("/news/$cat")({
  component: () => <NewsPage />,
});
