import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = (props) => {

    const [city, setCity] = useState();

    return(
        <GlobalContext.Provider value={{ city, setCity }}>
            {props.children}
        </GlobalContext.Provider>
    )
}