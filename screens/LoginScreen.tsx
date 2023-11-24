import { FC, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { observer } from "mobx-react-lite";

import navigationStore from "../store/navigationStore";

import CheckPhoneNumber from "../components/CheckPhoneNumber";
import PhoneNumberConfirmation from "../components/PhoneNumberConfirmation";
import CreateProfile from "../components/CreateProfile";

const LoginScreen: FC = observer((): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [fatherName, setFatherName] = useState<string>("");

    const [gender, setGender] = useState<"" | "male" | "female">("");

    const [dayOfBirth, setDayOfBirth] = useState<number>(0);
    const [monthOfBirth, setMonthOfBirtg] = useState<number>(0);
    const [yearOfBirth, setYearOfBirth] = useState<number>(0);

    if (navigationStore.pathName.startsWith("/login/phoneNumberConfirmation")) {
        return <PhoneNumberConfirmation phoneNumber={phoneNumber} />;
    }

    if (navigationStore.pathName.startsWith("/login/createProfile")) {
        return (
            <CreateProfile
                lastName={lastName}
                setLastName={setLastName}
                firstName={firstName}
                setFirstName={setFirstName}
                fatherName={fatherName}
                setFatherName={setFatherName}
                gender={gender}
                setGender={setGender}
                dayOfBirth={dayOfBirth}
                setDayOfBirth={setDayOfBirth}
                monthOfBirth={monthOfBirth}
                setMonthOfBirth={setMonthOfBirtg}
                yearOfBirth={yearOfBirth}
                setYearOfBirth={setYearOfBirth}
            />
        );
    }

    return <CheckPhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />;
});

export default LoginScreen;
