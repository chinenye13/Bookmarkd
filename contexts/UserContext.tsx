import {useState, createContext, useContext, ReactNode, useEffect} from 'react'
import { ID, Models } from "react-native-appwrite";
import { account } from '../lib/appwrite'

type UserContextType = {
    user: Models.User<Models.Preferences> | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

type UserProviderProps = {
    children: ReactNode;
}


export const UserContext = createContext<UserContextType | null>(null);

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider ({ children }: UserProviderProps) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)

    async function login(email:string, password:string): Promise<void> {
        await account.createEmailPasswordSession({
            email,
            password
        });
        const response = await account.get();
        setUser(response);
    }

    async function signup(email: string, password:string): Promise<void> {
        try {
            await account.create({
                userId: ID.unique(),
                email,
                password,
            });
            await login(email, password);
        }
        catch(err){
            console.log(err)
        }
    }

    async function logout(): Promise<void> {
        await account.deleteSession({ sessionId: "current" });
        setUser(null);
    }

    async function init(): Promise<void> {
        try {
            const loggedIn = await account.get();
            setUser(loggedIn);
        } catch (err) {
            setUser(null);
        }
    }

    useEffect(() => {
        void init();
    }, []);

    return (
        <UserContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    );
}
