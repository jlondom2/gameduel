import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ArticleElement } from "../interfaces/article";

type State = {
  news: ArticleElement[];
};

type Actions = {
  reset: () => void;
  setArticles: (articles: ArticleElement[]) => void;
};

const initialState: State = {
  news: [],
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
      })),
      {
        name: "news-storage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useNewsStore;
