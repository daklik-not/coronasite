"use client"
import React, { Children, useState } from "react"

interface IContexte {
    filterText:any;
    setFilterText:any;
}

export const Context = React.createContext<IContexte | any>('');
/** i
export function ClientContext({children} : { children: React.ReactNode}){
    const [counter, setCounter] = useState(4);
    return <Context.Provider value={{counter,setCounter}}>{children}</Context.Provider>
} **/

export function ClientContext({children} : {children:React.ReactNode}){
    const [filterText,setFilterText] = useState('');
    return <Context.Provider value={{filterText,setFilterText}}>{children}</Context.Provider>
}
 