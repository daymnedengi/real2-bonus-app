import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface MenuStore {
    showMenu: boolean;
    toggleMenu: (value: boolean) => void;
}

const useMenuStore = create<MenuStore>()(
    immer((set) => ({
        showMenu: false,
        toggleMenu: (value) => {
            set((state) => {
                state.showMenu = value;
            });
        },
    }))
);

const selectShowMenu = (state: MenuStore) => state.showMenu;
const selectToggleMenu = (state: MenuStore) => state.toggleMenu;

export { useMenuStore, selectShowMenu, selectToggleMenu };
