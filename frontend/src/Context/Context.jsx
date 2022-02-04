import { useState,createContext } from "react";

export const Context = createContext();

export function UserProvider(props){
    const [user, setUser] = useState({user:null,token:null});
    return(
        <Context.Provider value={[user, setUser]}>
            {props.children}
        </Context.Provider>
    )

}