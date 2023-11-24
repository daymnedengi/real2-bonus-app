import { makeAutoObservable } from "mobx";

class LoginStore {
    stage: "CHECK_PHONE_NUMBER" | "PHONE_NUMBER_CONFIRMATION" | "CREATE_PROFILE" = "CREATE_PROFILE";

    phoneNumber: string = "";

    lastName: string = "";
    firstName: string = "";
    fatherName: string = "";

    gender: null | "male" | "female" = null;

    dayOfBirth: number = 0;
    monthOfBirth: number = 0;
    yearOfBirth: number = 0;

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

    setGender(value: typeof this.gender) {
        this.gender = value;
    }
}

const loginStore = new LoginStore();

export default loginStore;
