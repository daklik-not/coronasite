import { SpecialInfromation } from "@/components/state-statistic/specialInformation";
import React from "react";
 async function getDistrictData() {
  const res = await fetch('https://api.corona-zahlen.org/districts', { next: { revalidate: 10 } })
  return res.json()
}

 async function getVaccinationData() {
  const res = await fetch('https://api.corona-zahlen.org/vaccinations/states', { next: { revalidate: 10 } })
  return res.json();
}
 async function getStateData() {
  const res = await fetch('https://api.corona-zahlen.org/states', { next: { revalidate: 10 } })
  return res.json();
}

 async function getWikiData(name: string) {

  const res = await fetch(`https://de.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=true&exintro&titles=${name}`)
  return res.json();
}



export default async function Page({ params }: { params: { name:string } }) {
  const dataForTable = getDistrictData();
  const vaccinationData = getVaccinationData();
  const stateData = getStateData();

  const crazyData = getWikiData(params.name);

  const [data, vaccination, states, wikiData] = await Promise.all([dataForTable, vaccinationData, stateData, crazyData])

  const arrayName:TValue[] = []
  const arrayVaccinations:TValue[]  = []
  const arrayState:TValue[]  = [];

  for (let i in data.data) {
    arrayName.push(data.data[i])
  }

  for (let i in vaccination.data) {
    arrayVaccinations.push(vaccination.data[i])
  }

  for (let i in states.data) {
    arrayState.push(states.data[i])
  }

  let stateObject = {population:0,};
  let vaccinationObject = {
      vaccinated:0,  
      secondVaccination:{
          vaccinated:0
      },
      boosterVaccination:{
          vaccinated:0
      }
  };
  let newObj = {
    state:'',
    name:'',
    population:0,
    weekIncidence:0,
    deaths:0,
    cases:0,
    casesPer100k:0,
    deathsPerWeek:0,
    casesPerWeek:0,
    delta:{
      deaths:0
    }
  };

  //получение конкретного обьекта с данными о вакцинации

interface TValue{
  name:string
}


  //получение конкретного обьекта
  arrayName.forEach((value) => {
    if (value.name.replace('ü', 'u').replace(' ', '-').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a') === params.name) {
      newObj = JSON.parse(JSON.stringify(value));
    }
  }
  )
  arrayVaccinations.forEach((value) => {
    if (value.name.replace('ü', 'u').replace(' ', '-').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a') === newObj.state.replace('ü', 'u').replace(' ', '-').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a')) {
      vaccinationObject = JSON.parse(JSON.stringify(value));
    }
  }

  )

  arrayState.forEach((value) => {
    if (value.name.replace('ü', 'u').replace(' ', '-').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a') === newObj.state.replace('ü', 'u').replace(' ', '-').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a')) {
      stateObject = JSON.parse(JSON.stringify(value));
    }
  })

  //акиуальная дата
  const today = new Date(data.meta.lastUpdate)
  var tomorrow = today.toLocaleString('ru', {
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      <div className=' flex justify-center pt-16'>
        <div className="w-8/12">
          <strong><p className="text-2xl"> Статистика коронавируса {newObj.name}</p></strong>
          <p className="text-lg pt-2 ">Здесь вы можете посмотреть актуальную статистика для  {newObj.name}</p>
          <button className=" text-white text-sm rounded-md w-60 h-5 bg-slate-500" ><p>Актуально на {tomorrow}</p></button>
        </div>
      </div>

      <div className=' flex justify-center pt-40'>
        <div className="w-8/12">
          <div className="grid grid-rows-3 grid-cols-3">

            <div className="  pb-20 col-start-1 row-start-1" >
              <p className="text-3xl  font-bold col-start-1 row-start-1">{newObj.population}</p>
              <label className=" text-sm pt-4">Население</label>
            </div>

            <div className=" pb-20 col-start-2 row-start-1" >
              <p className="text-3xl font-bold">{newObj.cases}</p>
              <label className=" text-sm pt-4">Всего инфекций</label>
            </div>

            <div className=" pb-20 col-start-3 row-start-1" >
              <p className="text-3xl  font-bold ">{(newObj.cases / newObj.population * 100).toFixed(2)}%</p>
              <label className=" text-sm pt-4">Коэффициент инфицирования (общий)</label>
            </div>

            <div className=" pb-20 col-start-1 row-start-2" >
              <p className="text-3xl  font-bold ">{(newObj.weekIncidence).toFixed(2)}%</p>
              <label className=" text-sm pt-4">Недельная заболеваемость</label>
            </div>



            <div className=" pb-20 col-start-2 row-start-2" >
              <p className="text-3xl font-bold ">{newObj.deaths}</p>
              <label className=" text-sm pt-4">Летальный исходы</label>
            </div>


            <div className=" pb-20 col-start-3 row-start-2" >
              <p className="text-3xl font-bold ">{(newObj.deaths / newObj.cases * 100).toFixed(2)}%</p>
              <label className=" text-sm
               pt-4">Летальность</label>
            </div>

            <div className=" pb-20 col-start-1 row-start-3" >
              <p className="text-3xl font-bold ">{(newObj.deathsPerWeek)}</p>
              <label className=" text-sm
               pt-4">Смерти за неделю</label>
            </div>

            <div className=" pb-20 col-start-2 row-start-3" >
              <p className="text-3xl font-bold ">{(newObj.delta.deaths)}</p>
              <label className=" text-sm
               pt-4">Разница в смертях </label>
            </div>

            <div className=" pb-20 col-start-3 row-start-3" >
              <p className="text-3xl font-bold ">{(newObj.casesPer100k).toFixed(2)}</p>
              <label className=" text-sm
               pt-4">Случаи на 100 тысяч </label>
            </div>



          </div>


        </div>


      </div>


      <div className="flex justify-center pt-5">
        <div className="w-8/12 border border-slate-300 p-6 ">
          <div className="flex justify-left ">
            <p className="text-2xl font-bol "> Подробная информация о {newObj.name}</p>

          </div>
          <SpecialInfromation wikiData={wikiData} state={stateObject} data={newObj} vaccinationData={vaccinationObject} />
        </div>


      </div>





    </>
  )
}