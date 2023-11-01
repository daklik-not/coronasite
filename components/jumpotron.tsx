'use client'

import { ReactNode, useState } from "react"
import { JsxElement } from "typescript"

interface IProps{
    color:string,
    text:ReactNode,
    height:string,
    padding:string
}
export function Jumpotron({color, text,height,padding }:IProps) {
    const [state, setState] = useState(true)
    let jsx: any = <div className={`flex ${color} rounded-md items-center p-3 ${height}`}>
        {text}
        <button onClick={() => setState(!state)} className="p-3">X</button>
    </div>

    if (state === false) {
        jsx = null
    }
    return (
        <div className={padding }>
        {jsx}
        </div>
    )
}