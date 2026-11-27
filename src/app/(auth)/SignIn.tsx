import {Link, Redirect, useRouter} from "expo-router";
import {Keyboard, Pressable, TextInput, Text, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles} from "../../../styles/global";
import {useState} from "react";
import { useUser } from '../../../contexts/UserContext'

export default function SignIn(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useUser();
    console.log(user?.user);

    const handleSubmit = async () => {
        user?.login(email, password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <Text>Log into your account</Text>
                <TextInput
                    placeholder={'Email address'}
                    style={globalStyles.textInput}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    value={email}
                />
                <TextInput
                    placeholder={'Password'}
                    style={globalStyles.textInput}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
                <Pressable
                    style={globalStyles.textInputButton}
                    onPress={handleSubmit}
                >
                    <Text>Submit</Text>
                </Pressable>
                <Link href={'/SignUp'} replace>
                    Don't have an account? Sign Up
                </Link>
            </View>
        </TouchableWithoutFeedback>
    );
}