import { View } from 'react-native'
import {globalStyles} from "../../../styles/global";
import {Link} from "expo-router";

export default function AuthIndex(){
    return (
        <View style={globalStyles.container}>
            <Link href="/SignIn" aria-modal={true}>
                Sign In
            </Link>
            <Link href={'/SignUp'} aria-modal={true}>
                Sign Up
            </Link>
        </View>
    )
}
