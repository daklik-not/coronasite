'use client'
import translate from "translate";
import { useState } from "react"
import { JsxElement } from "typescript";
import { Jumpotron } from "../jumpotron";



interface IWiki {
    data: {
        name: string
        cases:number,
        deaths:number,
        population:number,
        casesPerWeek:number,
        
    },
    wikiData: {
        query: {
            pages: {
                [index: string]: {
                    extract: string
                } 
            }
        }
    },
    state: {
        population:number,

    },
    vaccinationData: {
        vaccinated:number,  
        secondVaccination:{
            vaccinated:number
        },
        boosterVaccination:{
            vaccinated:number
        }



}

    


}

export function SpecialInfromation({ wikiData, state, data, vaccinationData }: IWiki) {
    const [button, setState] = useState(false)
    let text = '';
    for (let i in wikiData.query.pages) {
        text = wikiData.query.pages[i].extract
    }
    let jsx = <></>

    if (button === false) {
        jsx = <><div className="">
            <p className="text-sm pt-5"> На Corona-in-Zahlen.de вы найдете ключевые показатели COVID-19, собранные Институтом Роберта Коха (см. Источники данных для получения дополнительной информации, все данные без гарантии).</p>
            <p className="text-2xl pt-5">Инфекционная ситуация во {data.name}</p>
            <p className="text-sm pt-5">Во {data.name}  на данный момент зарегистрировано в общей сложности {data.cases} случаев заражения COVID-19, из которых {data.deaths} смертей от короны или с ней ). Это соответствует уровню инфицирования {(data.cases * 100 / data.population).toFixed(2)} и летальности {(data.deaths * 100 / data.cases).toFixed(2)}%. За последнюю неделю во {data.name} было зарегистрировано {data.casesPerWeek} новых случая заражения на 100 000 жителей («7-дневная заболеваемость»).</p>
            <p className="text-2xl font-bold pt-5">Прививки в земле {data.name}</p>
            <p className="text-sm pt-5">Во всей земле {data.name} на сегодняшний день проведено {vaccinationData.vaccinated} прививок от COVID-19 (по состоянию на 11.07.2023). Это соответствует уровню вакцинации {(vaccinationData.vaccinated * 100 / state.population).toFixed(2)}.% вакцинированных хотя бы один раз. Дважды привитыми («базовыми иммунизированными») являются {(vaccinationData.secondVaccination.vaccinated * 100 / state.population).toFixed(2)}% населения земли Рейнланд-Пфальц. {(vaccinationData.boosterVaccination.vaccinated * 100 / state.population).toFixed(2)}% получили бустерную прививку. {(vaccinationData.vaccinated * 100 / state.population).toFixed(2)}% населения уже получили прививку дважды</p>
        </div>


        </>
    } else {
        if (text === undefined) {
            jsx = <><p>Sorry but information is not defined. You can always check data on Wikipedia)</p></>
        }
        else {
            jsx = <>
                <p className="p-5 text-sm">{text}</p>
            </>
        }
    }


    return (
        <>
            <div className="flex justify left ">
                <button onClick={() => { setState(false) }} className=" text-center text-sm text-blue-400  pr-5">Даныне </button>
                <button onClick={() => { setState(true) }} className="text-sm text-blue-400">Данные о земле </button>
            </div>
            {jsx}
            <Jumpotron padding={'pt-4'} text={<p className="text-xs"><span className="font-bold">Подсказка:</span> Все ключевые цифры зависят от количества проведенных тестов и могут быть сопоставлены только в ограниченной степени. Передача данных от местных органов власти к RKI иногда задерживается. Отсутствие гарантий правильности и своевременности данных и информации</p>} color={'bg-yellow-100'} height='h-16'
            />
        </>
    )

}