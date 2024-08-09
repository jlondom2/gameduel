import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ArticleElement } from "../interfaces/article";
import { VideoResult } from "../interfaces/video";

type State = {
  news: ArticleElement[];
  videos: VideoResult[];
  featuredVideo: VideoResult | null;
  animate: boolean;
};

type Actions = {
  reset: () => void;
  setArticles: (articles: ArticleElement[]) => void;
  setVideos: (videos: VideoResult[]) => void;
  movetoFirstPosition: (video: VideoResult) => void;
  setFeaturedVideo: (video: VideoResult) => void;
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
            const newVideos = state.videos.filter((v) => v.id !== video.id);
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
