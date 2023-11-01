import CoronaTable from "@/components/bundeslander/coronaTable";
import { Jumpotron } from "@/components/jumpotron";
import { SearchBar } from "@/components/bundeslander/searchBar";
import { getHighestValue } from "@/functions/getHighestValue";
import Link from "next/link";
 async function getData() {
    const res = await fetch('https://api.corona-zahlen.org/states', { next: { revalidate: 10 } })
    return res.json();
}

 async function getVaccinationData() {
    const res = await fetch('https://api.corona-zahlen.org/vaccinations/states', { next: { revalidate: 10 } })
    return res.json();
}

interface IValue{
  
        weekIncidence: number,
        name: string,
         cases: number,
         population: number,
        deaths: number
    
}
export default async function Germany() {
    const dataForPage = getData();
    const exportVaccinationData=getVaccinationData();
    const arrayName:IValue[]  = []
    const vaccinationArray:{name:string,vaccinated:number}[]=[]
    const [data,vaccinationData] = await Promise.all([dataForPage,exportVaccinationData]);
    for (let key in data.data) {
        arrayName.push(data.data[key])
    }
    for (let key in vaccinationData.data) {
        vaccinationArray.push(vaccinationData.data[key])
    }


    //получние актуальной для данных даты
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
                        <strong><h1 className="text-2xl">Показатели коронавируса для федеральных земель Германии</h1></strong>
                    </div>
                    <p className="text-lg pt-3 pb-3">Здесь представлены текущие ключевые показатели COVID-19 по всем 16 федеральным землям.</p>
                    <div className="w-44 h-5 bg-slate-500 text-white rounded text-center ">
                        <strong> <p className="text-sm">Актуально на {actualData} </p> </strong>


                    </div>
                </div>
            </div>
            <hr className="my-7"></hr>
            <div className='flex justify-center pt-16'>
                <div className='w-8/12 '>
                    <div className="flex justify-left">

                        <p className="text-xl pb-3">Статистика заражений COVID-19 по федеральным округам</p>
                    </div>
                    <Jumpotron color='bg-blue-200' padding={'p-3'} text={<p className="text-xs"><span className="font-bold"> Подсказка:</span>Воспользуйтесь функцией поиска или нажмите на столбец, чтобы изменить порядок таблицы. Нажмите на название города или района, чтобы получить дополнительную информацию.</p>}  height='h-14'/>
                </div>
            </div>
            <hr className="my-5"></hr>

            <div className="flex justify-center ">
                <div className="w-8/12">
                    <SearchBar />
                </div>


            </div>

            <div className='flex justify-center pt-5'>
                <div className='w-8/12 '>
                    <div className="flex justify-left">
                        <div className="grid grid-cols-7 ">
                            <CoronaTable json={data} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4"></hr>



            <div className='flex justify-center pt-5'>
                <div className='w-8/12 '>
                    <div className="flex justify-left">

                    </div>
                </div>
            </div>
            <hr className="my-4"></hr>

            <div className="flex justify-center">
                <div className="w-8/12">
                    <div>
                        <p className="text-xl font-bold pb-5 ">Дополнительная информация о ключевых значениях в федеральных землях</p>
                        <p className="text-lg">В статистике Института Роберта Коха, используемой на Corona-in-Zahlen.de, вы найдете номера случаев коронавируса из всех 16 федеральных земель, от Шлезвиг-Гольштейна до Баварии. В общей сложности зарегистрировано 19 38 440 случаев заражения COVID-035, при этом было зарегистрировано 175 069 смертей (все данные без гарантии).</p>
                        <p className="text-xl font-bold pt-10 pb-5">Значение заболеваемости</p>
                        <p className="text-lg">За последнюю неделю число новых случаев заражения на 100 000 жителей (7-дневная заболеваемость) было самым высоким в следующих федеральных землях: </p>
                        <div className="pt-6">
                            {getHighestValue('weekIncidence',arrayName,vaccinationArray)}
                        </div>

                        <div className="pt-10">
                            <p className="text-xl font-bold">
                                Федеральные земли с наибольшим количеством инфекций
                            </p>
                            <p className="text-lg pb-6">
                                Федеральные земли в Германии с самыми высокими общими показателями заражения:
                            </p>
                            
                                {getHighestValue('cases',arrayName,vaccinationArray)}
                            
                            <p className="text-lg pb-5 pt-5" > Что касается численности населения, то рейтинг федеральных земель с самыми высокими показателями инфицирования выглядит следующим образом:</p>

                            {getHighestValue('infection',arrayName,vaccinationArray)}
                        </div>

                        <div className="pt-10">
                            <p className="text-xl font-bold">
                                Федеральные земли с наибольшим количеством смертей
                            </p>
                            <p className="text-lg pb-6">
                            Большинство смертей от коронавируса или с короной в настоящее время обнаруживается в:
                            </p>
                            
                                {getHighestValue('deaths',arrayName,vaccinationArray)}
                            
                           <p className="text-lg pt-6 pb-6">Расчетный коэффициент летальности или смертности (измеряемый в смертности от инфекций) в настоящее время является самым высоким в следующих федеральных землях:</p>


                           {getHighestValue('cdeaths',arrayName,vaccinationArray)}

                           <p className="text-xl font-bold pt-5 pb-3"> Федеральные земли с самым высоким уровнем вакцинации</p>
                           <p className="text-lg pb-3">В настоящее время большинство первичных прививок от COVID-19 было проведено в следующих федеральных землях:</p>
                            {getHighestValue('vaccination',arrayName,vaccinationArray)}

                        </div>
                        <Jumpotron  padding={'p-4'} text={<p className="text-xs"><span className="font-bold"> Подсказка:</span> Все ключевые цифры зависят от количества проведенных тестов и могут быть сопоставлены только в ограниченной степени. Передача данных от местных органов власти к RKI иногда задерживается. Отсутствие гарантий правильности и своевременности данных и информации.</p>} height='h-16' color='bg-yellow-100'/>
                    </div>
                </div>

                
            </div>
            
            <div className="flex justify-center">
            <Link href={`/`}><p className="text-blue-500 text-xl p-10">Go to home page</p></Link>
            </div>
        </>
    )
}