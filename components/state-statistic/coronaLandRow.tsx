import Link from "next/link"

interface ILand{
land:{
    name:string,
    state:string,
    weekIncidence:number,
    delta:{
        weekIncidence:number
    },
    cases:number,
    population:number,
    deaths:number
}
}

export function LandRow({land}:ILand) {
   
        let jsx=<></>
        jsx= <tr className="border-bottom border-slate-300 border-b-2 ">
        <td className=" col-start-1 col-end-1 pr-14 ">
            <Link href={`state-statistic/${land.name.replace('ü', 'u').replace(' ','-').replace(' ','-').replace(' ','-').replace('ß','b').replace('ö','o').replace('ä','a')}`} ><div className=" text-blue-400 ">{land.name}</div></Link>
            <p className="text-xs text-slate-500">Land</p>
        </td>
        <td className=" col-start-2 col-end-2 pb-4">
            <div className=''>{land.state}</div>
        </td>
        <td className="col-start-3 col-end-3 pb-4">
            <div className="text-center  ">{land.weekIncidence.toFixed(1)} </div>
        </td>
        <td className=" col-start-4 col-end-4 pb-4 ">
            <div className="text-lg text-center">{land.delta.weekIncidence.toFixed(2)}</div>
        </td>
        <td className=" col-start-5 col-end-5 pb-4">
            <div className="text-lg text-center">{(land.cases*100/land.population).toFixed(2)}</div>
        </td>
        <td className=" col-start-5 col-end-5 pb-4">
            <div className="text-lg text-center">{land.cases}</div>
        </td>
        <td className=" col-start-1 col-end-6 pb-4  ">
            <div className="text-lg text-center">{land.deaths}</div>
        </td>
        <td className="col-start-7 col-end-7 pb-4 ">
            <div className="text-lg text-center">{(land.deaths*100/land.cases).toFixed(2)}%</div>
        </td>
    </tr>
    
    return (
            
        <>
        {jsx}
        </> 
        
    )
    }