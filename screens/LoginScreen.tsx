import { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { observer } from "mobx-react-lite";

import loginStore from "../store/loginStore";

import CheckPhoneNumber from "../components/CheckPhoneNumber";
import PhoneNumberConfirmation from "../components/PhoneNumberConfirmation";
import CreateProfile from "../components/CreateProfile";

const LoginScreen: FC = observer((): JSX.Element => {
    if (loginStore.stage == "CREATE_PROFILE") {
        return <CreateProfile />;
    }

    if (loginStore.stage == "PHONE_NUMBER_CONFIRMATION") {
        return <PhoneNumberConfirmation />;
    }

    return <CheckPhoneNumber />;
});

export default LoginScreen;
