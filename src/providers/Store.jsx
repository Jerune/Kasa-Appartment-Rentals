import {createContext, useState} from "react";
import { getAllData } from "../services/dataManager";
import defaultData from "../services/defaultData";

const StoreContext = createContext(undefined);

function StoreProvider({children}){
    const [data, setData]= useState(defaultData);
    return (
        <StoreContext.Provider value={{data, setData}} >
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreContext, 
    StoreProvider
}