'use client'

import { useContext, useState } from "react"
import { LandTable } from "./coronaLandTable";

import { Context } from "@/app/ClientContext";
import { StatisticContext } from "@/app/state-statistic/statisticContext";
import { table } from "console";

interface IJson{
    json:any
}

export function AllLandTable({ json }:IJson) {

   
    const jsxArray = [];
    let context1 = useContext(StatisticContext);
    let array = [];
    const arrayName = [];
    let leastArray = [];
    let specialArray = [];
    let changeNextPage = <></>;
    //arrayName= [{1,2,3,4,},{1,2,3,4}]
    for (let key in json.data) {
        arrayName.push(json.data[key]);
    }

    let filteredArray = [];


    for (let i in arrayName) {
        if (arrayName[i].name.toLowerCase().indexOf(
            context1?.filterText.toLowerCase()
        ) !== -1) {
            filteredArray.push(arrayName[i])
        }

    }

    for (let key in filteredArray) {
        if (array[9]) {
            specialArray.push(array);
            array = [];
        }
        array.push(filteredArray[key]);
    }

    for (let i = 0; i <= (filteredArray.length - 1) % 10; i++) {
        leastArray.push(filteredArray[Number(Object.keys(filteredArray).reverse()[i])]);

    }
    specialArray.push(leastArray);

    for (let i in specialArray) {


        jsxArray.push(<LandTable data={specialArray[i]} />);


    }



    if (filteredArray.length <= 10) {
        changeNextPage = <></>
    } else if (context1?.table === 0) {

        changeNextPage = <>{context1?.table+1}/{specialArray.length}<button onClick={() => { context1?.setTable(context1.table + 1) }}>{'>'}</button></>
    } else if (context1?.table === specialArray.length - 1) {

        changeNextPage = <><button onClick={() => { context1?.setTable(context1?.table - 1) }}>{'<'}</button>{context1?.table+1}/{specialArray.length}</>
    }

    else {
        changeNextPage =<>  <button onClick={() => { context1?.setTable(context1?.table - 1) }}>{'<'} </button> <label>{context1?.table+1}/{specialArray.length}</label> <button onClick={() => { context1?.setTable(context1.table + 1) }}> {'>'} </button></> 
    }

    return (
        <>
            {changeNextPage}
            {jsxArray[context1?.table]}

        </>
    )
}