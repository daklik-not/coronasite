
import { Hospitalization } from "@/components/bundeslander/dataForDynamic";
import { stringify } from "querystring";

 async function getStateData() {
  const res = await fetch('https://api.corona-zahlen.org/states', { next: { revalidate: 10 } })
  return res.json()
}

 async function getVaccinationData() {
  const res = await fetch('https://api.corona-zahlen.org/vaccinations', { next: { revalidate: 10 } })
  return res.json()
}

export default async function DynamicPage({ params }: { params: { name:string } }) {
  const dataForTable = getStateData();
  const vaccintaionData = getVaccinationData();
  const [data, vaccinations] = await Promise.all([dataForTable, vaccintaionData])
  const arrayName: TValue[] = []
  const arrayVaccinations: IVaccinaiton[] = []
  
  interface TValue {
    id: number,
    name: string,
    population: number,
    cases: number,
    deaths: number,
    casesPerWeek: number,
    deathsPerWeek: number,
    recovered: string,
    weekIncidence: number,
    casesPer100k: number,
    delta: {
      cases: number,
      deaths: number,
      recovered: number,
      weekIncidence: number,
    }, hospitalization: {
      cases7Days: number,
      incidence7Days: number,
      date: string,
      lastUpdate: string,
    }
  }


  interface  IVaccinaiton{
    secondVaccination:{
        vaccinated:number
    },
    boosterVaccination:{
        vaccinated:number
    },
    vaccinated:number,
    name:string
 }




  for (let i in data.data) {
      arrayName.push(data.data[i])
  }

  for (let i in vaccinations.data.states) {
    arrayVaccinations.push(vaccinations.data.states[i])
  }
 
  let vaccinationObject:IVaccinaiton = {secondVaccination:{vaccinated:0},boosterVaccination:{vaccinated:0},vaccinated:0,name:''}

  //получение конкретного обьекта с данными о вакцинации
  arrayVaccinations.forEach((value) => {
    if (value.name.replace('ü', 'u') === params.name) {
      vaccinationObject = JSON.parse(JSON.stringify(value));

    }
  }
  )

  let newObj:TValue={id:0,name:'',population: 0,cases:0,deaths:0,casesPerWeek:0,deathsPerWeek:0,recovered:'',weekIncidence:0,casesPer100k:0,delta: {cases:0,deaths: 0,recovered:0, weekIncidence: 0,}, hospitalization: {cases7Days: 0,incidence7Days: 0,date: '',lastUpdate: '',
    }
  }
  arrayName.forEach((state) => {
    if (state.name.replace('ü', 'u') === params.name) {
      newObj = JSON.parse(JSON.stringify(state));
    }
  }
  )
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
          <strong><p className="text-2xl"> {newObj.name}</p></strong>
          <p className="text-lg pt-2 ">Здесь вы можете посмотреть статистику коронавируса для  {newObj.name}</p>
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



            <div className=" pb-20 col-start-2 row-start-2" >
              <p className="text-3xl font-bold ">{newObj.deaths}</p>
              <label className=" text-sm pt-4">Летальный исходы</label>
            </div>


            <div className=" pb-20 col-start-3 row-start-2" >
              <p className="text-3xl font-bold ">{(newObj.deaths / newObj.cases * 100).toFixed(2)}%</p>
              <label className=" text-sm
               pt-4">Летальность</label>
            </div>


            <div className=" pb-20 col-start-1 row-start-2" >
              <p className="text-3xl  font-bold "> {newObj.weekIncidence.toFixed(2)}</p>
              <label className=" text-ыь pt-4">Случаи за неделю на 100к населения</label>
            </div>

            <div className=" pb-20 col-start-1 row-start-3" >
              <p className="text-3xl  font-bold ">{(vaccinationObject.vaccinated / newObj.population * 100).toFixed(2)}</p>
              <label className=" text-sm pt-4">Уровень вакцинации (привит хотя бы один раз)</label>
            </div>

            <div className="pb-20 col-start-2 row-start-3" >
              <p className="text-3xl  font-bold ">{(vaccinationObject.secondVaccination.vaccinated / newObj.population * 100).toFixed(2)}%</p>
              <label className=" text-sm pt-4">Уровень вакцинации (полный)</label>
            </div>

            <div className="pb-20 col-start-3 row-start-3" >
              <p className="text-3xl  font-bold ">{(vaccinationObject.boosterVaccination.vaccinated / newObj.population * 100).toFixed(2)}%</p>
              <label className=" text-sm pt-4">Уровень вакцинации (бустер) </label>
            </div>
          </div>

          <Hospitalization json={newObj} />
        </div>

      </div>






    </>

  )
}