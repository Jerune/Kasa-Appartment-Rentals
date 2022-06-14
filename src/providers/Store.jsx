/**
 * @typedef {Object}  storage
 * @property {Object}  get contains all data
 * @property {Function} set updates data in object
 */

import {createContext, useState} from "react";
import data from "../services/defaultData";

const StoreContext = createContext(undefined);

/**
 * @type {storage}
 */
const store = {
    get : {},
    set : () => {}
};

function StoreProvider({children}){
    const [get, set]= useState(data);
    store.get = get;
    store.set = update;

    function update(newData){
        set({
            ...get,
            ...newData
        })
    }

    return (
        <StoreContext.Provider 
// @ts-ignore
        value={[get, update]} >
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreContext, 
    StoreProvider, 
    store
}