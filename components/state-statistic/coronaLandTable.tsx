'use client'
import { useContext, useState } from "react"
import { Context } from "@/app/ClientContext";
import React from "react";
import { LandRow } from "./coronaLandRow";

interface IData{
    data:{
        name:string,
        state:string,
        weekIncidence:number,
        delta:{
            weekIncidence:number
        },
        cases:number,
        population:number,
        deaths:number
    }[]
}

export function LandTable({data}:IData) {
    let jsx=[]
    
    for (let i in data){ 
        if(data.length!==0){
            jsx.push(<LandRow  land={data[i]}/>)
        }
       
        
    }
    
    
    return (
        <div>
            <table>

                <thead>
                    <tr className=" border-bottom border-black border-b-2">
                        <td >
                            <strong> <p className=" text-center text-sm col-start-1 col-end-1 pr-4">Округ</p></strong>
                        </td>
                        <td>
                            <strong><p className=" text-centerpr-7 text-sm col-start-2 col-end-2" >Земля</p></strong>
                        </td>
                        <td>
                            <strong><p className=" pr-6 pl-5 text-center text-sm col-start-3 col-end-3">Новые инфекции (7-дневная заболеваемость)</p></strong>
                        </td>
                        <td>
                            <strong>  <p className=" text-center pr-7 text-sm col-start-4 col-end-4">Динамика заболеваемости за 3 дня</p></strong>
                        </td>
                        <td>
                            <strong>  <p className=" text-center pr-7 text-sm col-start-5 col-end-5">Инфекции (всего)) </p></strong>
                        </td>
                        <td>
                            <strong>  <p className=" text-center pr-7 text-sm col-start-6 col-end-6">Уровень инфицирования (всего) </p></strong>
                        </td>
                        <td>
                            <strong>  <p className=" text-center pr-7 text-sm col-start-7 col-end-7" >Смертность (всего)</p></strong>
                        </td>
                        <td>
                            <strong>  <p className=" text-center pr-7 text-sm col-start-7 col-end-7" >Уровень летальности (всего)</p></strong>
                        </td>
                        

                    </tr>
                </thead>


                <tbody>
                    {jsx}
                </tbody>
            </table>
        </div>


    )
}