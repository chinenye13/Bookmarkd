import {Link} from "expo-router";
import {Keyboard, Pressable, TextInput, Text, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles} from "../../../styles/global";
import {useState} from "react";

export default function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                >
                    <Text>Submit</Text>
                </Pressable>
                <Link href={'/SignUp'}>
                    Don't have an account? Sign Up
                </Link>
            </View>
        </TouchableWithoutFeedback>
    );
}