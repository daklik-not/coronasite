import Link from "next/link"

interface IRow {
    state: {
        name:string,
        population:number,
        weekIncidence:number,
        cases:number,
        deaths:number
    }
    
}
var now = new Date();
var actualData = now.toLocaleString('ru', {
    month: 'long',
    day: 'numeric'
})

export function CoronaRow({state}: IRow) {
    let urlName = state.name;


    return (
        <>

            <tr className="border-bottom border-slate-400 border-b-2">
                <td className=" col-start-1 col-end-1 pr-14 pb-4">
                    <Link href={`/bundeslander/${urlName.replace('ü', 'u')}`} ><div className=" text-blue-400 ">{state.name}</div></Link>
                    <p className="text-sm text-slate-500">Land</p>
                </td>
                <td className=" col-start-2 col-end-2 pb-4">
                    <div className=''>{state.weekIncidence.toFixed(2)}</div>
                </td>
                <td className="col-start-3 col-end-3 pb-4">
                    <div className="text-left  ">{state.cases} </div>
                </td>
                <td className=" col-start-4 col-end-4 pb-4 ">
                    <div className="text-lg text-center">{(state.cases/state.population*100).toFixed(2)}%</div>
                </td>
                <td className=" col-start-5 col-end-5 pb-4">
                    <div className="text-lg text-center">{state.deaths}</div>
                </td>
                <td className=" col-start-1 col-end-6 pb-4  ">
                    <div className="text-lg text-center">{(state.deaths/state.cases*100).toFixed(2)}</div>
                </td>
                <td className="col-start-7 col-end-7 pb-4 ">
                    <div className="text-lg text-center">{actualData}</div>
                </td>
            </tr>

        </>
    )
}