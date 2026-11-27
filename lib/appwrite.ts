import { Client, Account } from 'react-native-appwrite';

export const client = new Client();
client
    .setProject(String(process.env.EXPO_PUBLIC_PROJECT_ID))
    .setPlatform(String(process.env.EXPO_PUBLIC_PACKAGE_NAME))

export const account = new Account(client)

