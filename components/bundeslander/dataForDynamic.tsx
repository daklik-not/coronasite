'use client'

import { useState } from "react"
interface IJson{
  json:any
}
export function Hospitalization({json}:IJson) {
    const [state,setState]=useState(true);
    let jsx=<></>
    if (state===true){
            jsx=<a onClick={()=>setState(!state)} className="text-blue-400 text-sm my-32">Показать больше ключевых цифр</a>
    } else if (state===false){
        jsx=  <>
        <button onClick={()=>setState(!state)} className="text-blue-300 text-sm pb-20">  Показать больше ключевых цифр</button>
        <div className="grid grid-cols-3 grid-row-1">
        <div className=" pb-20 col-start-1 row-start-3" >
              <p className="text-3xl text-3xl font-bold font-bold ">{ (json.hospitalization.cases7Days/json.casesPerWeek).toFixed(2)}</p>
              <label className="  pt-4">Частота госпитализации </label>
            </div>

            <div className="pb-20 col-start-2 row-start-3" >
              <p className="text-3xl  font-bold ">{json.hospitalization.incidence7Days}</p>
              <label className=" text-sm pt-4">Инциденты за неделю</label>
            </div>

            <div className="pb-20 col-start-3 row-start-3" >
              <p className="text-3xl  font-bold ">{json.delta.recovered}</p>
              <label className=" text-sm pt-4">Выздоровевшие </label>
            </div>
            </div>
       </>
    }
    return (

        <>
        {jsx}
   
        </>

    )
}