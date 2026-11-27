import {Pressable, View, Text} from "react-native";
import {globalStyles} from "../../../styles/global";
import {useUser} from "../../../contexts/UserContext";

export default function Profile(){
    const user = useUser();
    return (
        <View style={globalStyles.container}>
            <Pressable
                onPress={user?.logout}
                style={globalStyles.textInputButton}
            >
                <Text style={globalStyles.text}>
                    Log out
                </Text>
            </Pressable>
        </View>
    )
}