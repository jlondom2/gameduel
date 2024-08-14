import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ArticleElement } from "../interfaces/article";
import { VideoItems } from "../interfaces/video";

type State = {
  news: ArticleElement[];
  videos: VideoItems[];
  featuredVideo: VideoItems | null;
  animate: boolean;
};

type Actions = {
  reset: () => void;
  setArticles: (articles: ArticleElement[]) => void;
  setVideos: (videos: VideoItems[]) => void;
  movetoFirstPosition: (video: VideoItems) => void;
  setFeaturedVideo: (video: VideoItems) => void;
  handleAnimation: (value: boolean) => void;
};

const initialState: State = {
  news: [],
  videos: [],
  featuredVideo: null,
  animate: false,
};

const useNewsStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialState,
        reset: () => {
          set(initialState);
        },
        setArticles: (articles) => {
          set(() => ({
            news: articles,
          }));
        },
        setVideos: (videos) => {
          set(() => ({
            videos: videos ?? [],
          }));
        },

        movetoFirstPosition: (video) => {
          set((state) => {
            const newVideos = state.videos.filter(
              (v) => v.id.videoId !== video.id.videoId,
            );
            return {
              videos: [video, ...newVideos],
            };
          });
        },

        setFeaturedVideo: (video) => {
          set(() => ({
            featuredVideo: video,
          }));
        },
        handleAnimation: (value) => {
          set(() => {
            return {
              animate: value,
            };
          });
        },
      })),
      {
        name: "news-storage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useNewsStore;
