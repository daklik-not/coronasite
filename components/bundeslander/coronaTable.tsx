'use client'
import { useContext, useState } from "react"
import { Context } from "@/app/ClientContext";
import React from "react";
import { CoronaRow } from "./coronaRow";

interface IJson{
    json:any 
}
interface TValue{
    weekIncidence:number,
    name:string,
    population:number,
    cases:number,
    deaths:number
}


export default function CoronaTable({ json }:IJson) {
    let context = useContext(Context);
    let arrayName:TValue[] = [];
    const rows = [];
    for (let key in json.data) {
        arrayName.push(json.data[key])
    }


    //сортировка по возрастанию
    arrayName.sort(function (a, b) {
        if (a.weekIncidence > b.weekIncidence) {
            return -1;
        }
        if (a.weekIncidence < b.weekIncidence) {
            return 1;
        }
        return 0;
    }
    )

    const weekIncidenceArray:number[] = []



    //получение максимального значения 
    arrayName.forEach(value => {
        weekIncidenceArray.push(value.weekIncidence)
    }
    )

    let maxValue = Math.max.apply(null, weekIncidenceArray).toFixed(2);

    //фильтрация текста
    let jsxArray = arrayName.map((state) => {
        if (state.name.toLowerCase().indexOf(
            context?.filterText.toLowerCase()
        ) === -1) {

            return;
        }

        const time = new Date(json.meta.lastUpdate)
        var actualData = time.toLocaleString('de', {
            month: 'long',
            day: 'numeric'
        })

        return <CoronaRow key={`${state.population}`} state={state} />


    }


    )



    return (
        <>
            <table>

                <thead>
                    <tr className=" border-bottom border-black border-b-2">
                        <td >
                            <strong> <p className="text-sm col-start-1 col-end-1 pr-4">Земля</p></strong>
                        </td>
                        <td>
                            <strong><p className="pr-3 text-sm col-start-2 col-end-2" >Новые инфекции (заболеваемость за 7 дней)</p></strong>
                        </td>
                        <td>
                            <strong><p className="pr-7 text-sm col-start-3 col-end-3"> Инфекции (всего) </p></strong>
                        </td>
                        <td>
                            <strong>  <p className="pr-7 text-sm col-start-4 col-end-4">Уровень инфицирования (всего) </p></strong>
                        </td>
                        <td>
                            <strong>  <p className="pr-7 text-sm col-start-5 col-end-5">Смертность (всего)</p></strong>
                        </td>
                        <td>
                            <strong>  <p className="pr-7 text-sm col-start-6 col-end-6">Уровень летальности (всего)) </p></strong>
                        </td>
                        <td>
                            <strong>  <p className="pr-7 text-sm col-start-7 col-end-7" >Актуально</p></strong>
                        </td>

                    </tr>
                </thead>


                <tbody>
                    {jsxArray}

                </tbody>

            </table >

        </>
    )
}