"use client"
import React, { Children, useState } from "react"

interface IContexte {
    filterText:any
    setFilterText:any
    table:any
    setTable:any;
}

export const  StatisticContext = React.createContext<IContexte | any>(null);
/** i
export function ClientContext({children} : { children: React.ReactNode}){
    const [counter, setCounter] = useState(4);
    return <Context.Provider value={{counter,setCounter}}>{children}</Context.Provider>
} **/

export function LandContext({children} : {children:React.ReactNode}){
    const [filterText,setFilterText] = useState('');
    const [table,setTable] = useState(0);
    return <StatisticContext.Provider value={{filterText,setFilterText,table,setTable}}>{children}</StatisticContext.Provider>
}
 