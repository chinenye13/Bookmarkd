import {Link} from "expo-router";
import {View} from "react-native";
import {globalStyles} from "../../../styles/global";

export default function SignIn(){
    return (
        <View style={globalStyles.container}>
            <Link href={'/SignUp'}>
                Don't have an account? Sign Up
            </Link>
        </View>
    );
}