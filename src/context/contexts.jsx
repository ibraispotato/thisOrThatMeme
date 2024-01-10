import React, { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
uuidv4()

export const Context = createContext()

export const GetContext = ({ children }) => {
    const [addOne, setAddOne] = useState([])
    const [numberChoosen, setNumberChoosen] = useState()
    // console.log(addOne)
    return (
        <Context.Provider value={{
            addOne,
            setAddOne,
            setNumberChoosen,
            numberChoosen
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext =() => useContext(Context)
