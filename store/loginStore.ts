import { makeAutoObservable } from "mobx";

class LoginStore {
    stage: "CHECK_PHONE_NUMBER" | "PHONE_NUMBER_CONFIRMATION" | "CREATE_PROFILE" = "CREATE_PROFILE";

    phoneNumber: string = "";

    firstName: string = "";
    lastName: string = "";
    fatherName: string = "";

    dayOfBirth: number = 1;
    monthOfBirth: number = 1;
    yearOfBirth: number = 1901;

    constructor() {
        makeAutoObservable(this);
    }

    setStage(value: typeof this.stage) {
        this.stage = value;
    }

    setPhoneNumber(value: string) {
        this.phoneNumber = value;
    }

    setDayOfBirth(value: number) {
        this.dayOfBirth = value;
    }

    setMonthOfBirth(value: number) {
        this.monthOfBirth = value;
    }

    setYearOfBirth(value: number) {
        this.yearOfBirth = value;
    }
}

const loginStore = new LoginStore();

export default loginStore;
