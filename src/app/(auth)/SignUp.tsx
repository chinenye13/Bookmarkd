import {Link} from "expo-router";
import {TextInput, View} from "react-native";
import {globalStyles} from "../../../styles/global";

export default function SignUp(){
    return (
        <View style={globalStyles.container}>
            <TextInput placeholder={'Email address'}/>
            <TextInput placeholder={'Password'}/>
            <Link href={'/SignIn'}>
                Already have an account? Sign In.
            </Link>
        </View>
    );
}