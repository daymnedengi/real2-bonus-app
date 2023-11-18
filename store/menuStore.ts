import { makeAutoObservable } from "mobx";

class MenuStore {
    showMenu: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleMenu(value: boolean) {
        this.showMenu = value;
    }
}

const menuStore = new MenuStore();

export default menuStore;
