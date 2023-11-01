import { SearchBar } from "@/components/bundeslander/searchBar";
import { Jumpotron } from "@/components/jumpotron";
import { AllLandTable } from "@/components/state-statistic/coronaAllTables";
import { Context } from "../ClientContext";
import { SearchBarLand } from "@/components/state-statistic/searchBarLand";
import { SpecialInfromation } from "@/components/state-statistic/specialInformation";
import { getLandValue } from "@/functions/getLandValue";
import Link from "next/link";
 async function getDistrictData() {
    const res = await fetch('https://api.corona-zahlen.org/districts', { next: { revalidate: 10 } })
    return res.json()
}

 async function getGermanyData() {
    const res = await fetch('https://api.corona-zahlen.org/germany', { next: { revalidate: 10 } })
    return res.json()
}



export default async function StateStatistic() {
    const dataForPage = getDistrictData();
    const dataAboutGermany = getGermanyData();
    const [data, germany] = await Promise.all([dataForPage, dataAboutGermany]);
    const arrayName:{
        weekIncidence: number,
        name: string,
         cases: number,
         population: number,
        deaths: number,
        delta:{
            weekIncidence:number
        }
    }[]=[];
    let DataLength = 0
    for (let i in data.data) {
        DataLength++;
        arrayName.push(data.data[i]);
    }
    const time = new Date(data.meta.lastUpdate)
    var actualData = time.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    })
    return (
        <>
            <div className='flex justify-center pt-16'>
                <div className='w-8/12'>
                    <div className="flex justify-left">
                        <strong><h1 className="text-3xl"> Показатели коронавируса по городам и районам Германии </h1></strong>
                    </div>
                    <p className="text-lg pt-3 pb-3">Здесь представлены текущие ключевые показатели COVID-19 по всем округам и независимым городам.</p>
                    <div className="w-44 h-5 bg-slate-500 text-white rounded text-center ">
                        <strong> <p className="text-sm">Актуально на {actualData} </p> </strong>
                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-16'>
                <div className='w-8/12'>
                    <Jumpotron color='bg-blue-200' padding={`p-4`} text={<p className="text-xs"><span className="font-bold"> Подсказка:</span> Воспользуйтесь функцией поиска или нажмите на столбец, чтобы изменить порядок таблицы. Нажмите на название города или района, чтобы получить дополнительную информацию</p>}  height='h-16' />
                </div>
            </div>

            <hr className="my-5"></hr>



            
            <div className='flex justify-center pt-1'>
                <div className='w-8/12'>
                    <SearchBarLand />
                    <AllLandTable json={data} />
                </div>
            </div>
            <hr className="my-auto"></hr>s


            <div className="flex justify-center pt-5">
                <div className="w-8/12 border border-slate-300 p-6 ">


                    <h2 className="text-xl font-bold">Подробнее о данных из {DataLength} городов и округов</h2>
                    <p className="pt-3"> В статистике Института Роберта Коха, используемой на Corona-in-Zahlen.de, вы найдете номера случаев коронавируса из {DataLength} районов или независимых городов Германии, от A для Арвайлера до Z для Цвиккау. В общей сложности во всех округах зарегистрировано {germany.cases} случаев заражения COVID-111, при этом одновременно было зарегистрировано {germany.deaths} смертей (все данные без гарантии).</p>

                    <p className="font-bold text-lg pt-2">
                        Значение заболеваемости
                    </p>

                    <p className="pt-2">За последнюю неделю число новых случаев заражения на 100 000 жителей (7-дневная заболеваемость) было самым высоким в следующих округах или городах:</p>


                        {getLandValue('weekIncidence',arrayName)}




                        <p className="font-bold text-lg pt-2">
                        Города и округа с наибольшим количеством инфекций
                    </p>

                    <p className="pt-2">ЗРайоны или города Германии с самыми высокими абсолютными инфекциями в настоящее время:</p>

                    {getLandValue('cases',arrayName)}




                   

                    <p className="pt-2">Что касается численности населения, то рейтинг районов или городов с самыми высокими показателями инфицирования выглядит следующим образом::</p>


                    {getLandValue('infection',arrayName)}



                    <p className="font-bold text-lg pt-2">
                    Города и округа с наибольшим количеством смертей
                    </p>

                    <p className="pt-2">Большинство смертей от коронавируса или с короной в настоящее время обнаруживается в:</p>

                    {getLandValue('deaths',arrayName)}


                    
                    <p className="pt-2">Расчетный коэффициент летальности или смертности (измеряемый в смертности от инфекции) в настоящее время является самым высоким в следующих округа:</p>
                    {getLandValue('deathsIncidence',arrayName)}

                    <p className="pt-2">Ниже приведены показатели по delta недельной статистике:</p>
                    {getLandValue('delta', arrayName)}



                    <Jumpotron color='bg-green-200'  text={<p className="text-xs "><span className="font-bold"> Подсказка:</span> Хотели бы вы, чтобы все ключевые показатели по вашему городу или округу были доступны с первого взгляда? Нажмите  <Link href={'/landkreis-uebersicht'}> здесь</Link> , чтобы просмотреть отдельные страницы по городам или районам.</p>}  height='h-14' padding='pt-5'/>
                        <hr className="p-3"/>
                    <Jumpotron color='bg-blue-200' padding='pt-5'  text={<p className="text-xs"><span className="font-bold"> Подсказка:</span>Все ключевые цифры зависят от количества проведенных тестов и могут быть сопоставлены только в ограниченной степени. Передача данных от местных органов власти к RKI иногда задерживается. Отсутствие гарантий правильности и своевременности данных и информации.</p>}  height='h-14'/>


                </div>




            </div>

            <hr className="p-10"></hr>

        </>
    )
}