import { createFileRoute } from "@tanstack/react-router";
import { VideoPage } from "../pages/video.page";

export const Route = createFileRoute("/videos")({
  component: VideoPage,
});
