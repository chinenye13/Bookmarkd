import {Link, Redirect} from "expo-router";
import {Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles} from "../../../styles/global";
import {useState} from "react";
import {useUser} from "../../../contexts/UserContext"

export default function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useUser();

    const handleSubmit =  () => {
        user?.signup(email, password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <Text>Welcome to Bookmarkd. Create an account.</Text>
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
                <Link href={'/SignIn'} replace>
                    Already have an account? Sign In.
                </Link>
            </View>
        </TouchableWithoutFeedback>
    );
}