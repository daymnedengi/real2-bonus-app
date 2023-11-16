import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface NavigationStore {
    pathName: string;
    navigate: (path: string) => void;
}

const useNavigationStore = create<NavigationStore>()(
    immer((set) => ({
        pathName: "/",
        navigate: (path: string) => {
            set((state) => {
                state.pathName = path;
            });
        },
    }))
);

const selectPathName = (state: NavigationStore) => state.pathName;
const selectNavigate = (state: NavigationStore) => state.navigate;

export { useNavigationStore, selectPathName, selectNavigate };
