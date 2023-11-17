import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface LocalUserStore {
    authToken: string;
    isAuth: () => boolean;
    login: (token: string) => void;
    logout: () => void;
}

const useLocalUserStore = create<LocalUserStore>()(
    immer((set, get) => ({
        authToken: "",
        isAuth: () => {
            return get().authToken != "";
        },
        login: (token: string) => {
            set((state) => {
                state.authToken = token;
            });
        },
        logout: () => {
            set((state) => {
                state.authToken = "";
            });
        },
    }))
);

const selectIsAuth = (state: LocalUserStore) => state.isAuth;
const selectLogin = (state: LocalUserStore) => state.login;
const selectLogout = (state: LocalUserStore) => state.logout;

export { useLocalUserStore, selectIsAuth, selectLogin, selectLogout };
