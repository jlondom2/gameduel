import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  searchPopup: boolean;
};

type Actions = {
  reset: () => void;
  handleSearchPopup: () => void;
};

const initialState: State = {
  searchPopup: false,
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
    })),
  ),
);

export default useUIStore;
