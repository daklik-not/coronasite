import { Jumpotron } from "@/components/jumpotron";
import Link from "next/link";
import { ReactElement } from "react";
 async function getData() {
    const res = await fetch('https://api.corona-zahlen.org/districts', { next: { revalidate: 10 } })
    return res.json();
}

export default async function SortLands() {
    const dataForPage = getData();
    const [data] = await Promise.all([dataForPage]);
    const arrayName:any[] = [];
    let names = '';
    const firstLetterArray = [];
    const jsxArray: any = [];
   
    for (let i in data.data) {
        arrayName.push(data.data[i].name)
    }
    arrayName.sort((function (a, b) {
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        return 0;

    }))

    for (let i in arrayName) {
        if (arrayName[i][0] != arrayName[i][0]) {
            arrayName.push(arrayName.slice())
        }
    }
    for (let i in arrayName) {
        names = names + arrayName[i][0];
    }

    for (let value of names.replace(/(.)(?=.*\1)/g, "")) {
        firstLetterArray.push(
            <>
                <Link className='text-blue-400 ' href={`#${value}`}>

                    {value}

                </Link> <span> | </span>
            </>
        )
    }
    const displayArray:string[][]=[];

    for (let value of names.replace(/(.)(?=.*\1)/g, "")) {
        displayArray.push([])
        for (let i in arrayName) {
            if (arrayName[i][0] === value) {
                displayArray[names.replace(/(.)(?=.*\1)/g, "").indexOf(value)].push(arrayName[i])
            }
        }
    }
    //вот здесь 1 час ночи кстатиЮ Суть во вложенном массиве с jsx 0 displayArray должен выглядеть вот так [[ab,ac,ad],[baI,bg]] и тж
    for (let i in displayArray) {
        jsxArray.push([

        ])
        for (let j in displayArray[i]) {
            jsxArray[i].push(
                <div className=" pb-3 pr-3 ">
                    <div className=" w-30 h-4 bg-slate-500 text-white rounded   ">
                        <strong ><Link href={`/state-statistic/${displayArray[i][j].replace('ü', 'u').replace(' ','-').replace(' ','-').replace(' ','-').replace('ß','b').replace('ö','o').replace('ä','a')}`}><p className="px-1 text-xs text-center "> {(displayArray[i][j])} </p></Link></strong>
                    </div>
                </div>
            )
        }

    }
//eще час ночи и я все доделал))
    for (let i=0;i<jsxArray.length;i++) {
        jsxArray[i] = <>
            <h2 id={`${names.replace(/(.)(?=.*\1)/g, "")[i]}`} className="text-lg font-bold">{names.replace(/(.)(?=.*\1)/g, "")[i]}</h2>
            <div className="flex   flex-wrap flex-row ">{jsxArray[i]}</div>
        </>
    }

    return (
        <>
            <div className="flex justify-center pt-10 ">
                <div className="w-8/12 border border-slate-400">

                    <div className=" bg-gray-200">
                        <h1 className="text-xl font-bold border border-slate-300 p-4">Непосредственно на страницы отдельных городов или округов</h1>

                    </div>

                    <Jumpotron padding={'pt-5 pl-4'} height={'h-14'} color={'bg-green-200'} text={<p className="text-xs"><span className="font-bold">Подсказка</span>: Выберите начальную букву и нажмите на выбранный вами город или округ, чтобы перейти непосредственно на страницу сведений со всеми ключевыми цифрами. </p>}></Jumpotron>

                    <div className="flex justify-center p-10">
                        <p>{firstLetterArray}</p>
                    </div>

                <div className="pl-4">
                    {jsxArray}
                    </div>
                </div>
            </div>


















        </>
    )
}