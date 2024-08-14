import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  searchPopup: boolean;
  newsPage: number;
};

type Actions = {
  reset: () => void;
  handleSearchPopup: () => void;
  setPage: (page: number) => void;
};

const initialState: State = {
  searchPopup: false,
  newsPage: 1,
};

const useUIStore = create<State & Actions>()(
  devtools(
    immer((set) => ({
      ...initialState,
      reset: () => {
        set(initialState);
      },
      handleSearchPopup: () => {
        set((state) => {
          return {
            searchPopup: !state.searchPopup,
          };
        });
      },
      setPage: (page) => {
        set(() => {
          return {
            newsPage: page,
          };
        });
      },
    })),
  ),
);

export default useUIStore;
