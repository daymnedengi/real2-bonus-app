import { makeAutoObservable } from "mobx";

class NavigationStore {
    pathName: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    navigate(path: string) {
        this.pathName = path;
    }
}

const navigationStore = new NavigationStore();

export default navigationStore;
