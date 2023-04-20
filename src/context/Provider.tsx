import React,{ useState,createContext } from 'react';

export interface UserInfo {
    name: string;
    age: number;
    hobbies: string[];
}

const defaultUser:UserInfo = {
    name: 'yogev',
    age: 34,
    hobbies: ['reading', 'playing the piano']
}

export const UserContext = createContext<[UserInfo, (hobby:string) => void]>([
    defaultUser,
    () => null
]);

interface UserInfoProps{
    children:React.ReactNode
}

const Provider:React.FC<UserInfoProps> = ({children}) => {

    const [user, setUser] = useState<UserInfo>(defaultUser); //can also use useReducer when working with several states

    const addHobby = (hobby:string) => {

        setUser((prevUser) => {

            const updatedHobbies = [...prevUser.hobbies,hobby];

            return{
                ...prevUser,
                hobbies: updatedHobbies
            }
        });
    } //

    return <UserContext.Provider value={[user, addHobby]}>
        {children}
    </UserContext.Provider>
}

export default Provider;