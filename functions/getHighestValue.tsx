import Link from "next/link";

export function getHighestValue(value: string, arrayName: {
    weekIncidence: number,
    name: string,
     cases: number,
     population: number,
    deaths: number
}[],
 vaccinationArray: {
    vaccinated:number,
    name:string,

 }[]) {
    switch (value) {
        case 'weekIncidence':
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

            return <ul className="list-disc">
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>    <p className="text-lg p-1"><button className="text-blue-500">{arrayName[0].name}</button> c {arrayName[0].weekIncidence.toFixed(2)}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>   <p className="text-lg p-1 "><button className="text-blue-500">{arrayName[1].name}</button> c {arrayName[1].weekIncidence.toFixed(2)}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>  <p className="text-lg p-1"><button className="text-blue-500">{arrayName[2].name}</button> c {arrayName[2].weekIncidence.toFixed(2)}</p></Link>
                </li>
            </ul>

        case 'cases':
            arrayName.sort(function (a, b) {
                if (a.cases > b.cases) {
                    return -1;
                }
                if (a.cases < b.cases) {
                    return 1;
                }
                return 0;

            }
            )
            return <ul className="list-disc">
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>    <p className="text-lg p-1"><button className="text-blue-500">{arrayName[0].name}</button> c {arrayName[0].cases}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>  <p className="text-lg p-1 "><button className="text-blue-500">{arrayName[1].name}</button> c {arrayName[1].cases}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>    <p className="text-lg p-1"><button className="text-blue-500">{arrayName[2].name}</button> c {arrayName[2].cases}</p></Link>
                </li>
            </ul>

        case 'infection':
            arrayName.sort(function (a, b) {
                if (a.cases / a.population > b.cases / b.population) {
                    return -1;
                }
                if (a.cases / a.population < b.cases / b.population) {
                    return 1;
                }
                return 0;

            }
            )
            return <ul className="list-disc">
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}><p className="text-lg p-1"><button className="text-blue-500">{arrayName[0].name}</button> c {(arrayName[0].cases * 100 / arrayName[0].population).toFixed(2)}%</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[1].name.replace('ü', 'u')}`}><p className="text-lg p-1 "><button className="text-blue-500">{arrayName[1].name}</button> c {(arrayName[1].cases * 100 / arrayName[1].population).toFixed(2)}%</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[2].name.replace('ü', 'u')}`}><p className="text-lg p-1"><button className="text-blue-500">{arrayName[2].name}</button> c {(arrayName[2].cases * 100 / arrayName[2].population).toFixed(2)}%</p></Link>
                </li>
            </ul>

        case 'deaths':
            arrayName.sort(function (a, b) {
                if (a.deaths > b.deaths) {
                    return -1;
                }
                if (a.deaths < b.deaths) {
                    return 1;
                }
                return 0;

            }
            )
            return <ul className="list-disc">
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>          <p className="text-lg p-1"><button className="text-blue-500">{arrayName[0].name}</button> c {arrayName[0].deaths}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[1].name.replace('ü', 'u')}`}>     <p className="text-lg p-1 "><button className="text-blue-500">{arrayName[1].name}</button> c {arrayName[1].deaths}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[2].name.replace('ü', 'u')}`}>   <p className="text-lg p-1"><button className="text-blue-500">{arrayName[2].name}</button> c {arrayName[2].deaths}</p></Link>
                </li>
            </ul>

        case 'cdeaths':
            arrayName.sort(function (a, b) {
                if (a.deaths / a.cases > b.deaths / b.cases) {
                    return -1;
                }
                if (a.deaths / a.cases < b.deaths / b.cases) {
                    return 1;
                }
                return 0;

            }
            )
            return <ul className="list-disc">
                <li>
                    <Link href={`/bundeslander/${arrayName[0].name.replace('ü', 'u')}`}>        <p className="text-lg p-1"><button className="text-blue-500">{arrayName[0].name}</button> c {(arrayName[0].deaths * 100 / arrayName[0].cases).toFixed(2)}%</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[1].name.replace('ü', 'u')}`}>  <p className="text-lg p-1 "><button className="text-blue-500">{arrayName[1].name}</button> c {(arrayName[1].deaths * 100 / arrayName[1].cases).toFixed(2)}%</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${arrayName[2].name.replace('ü', 'u')}`}>
                        <p className="text-lg p-1"><button className="text-blue-500">{arrayName[2].name}</button> c {(arrayName[2].deaths * 100 / arrayName[2].cases).toFixed(2)}%</p></Link>
                </li>
            </ul>




        case 'vaccination':
            vaccinationArray.sort(function (a, b) {
                if (a.vaccinated > b.vaccinated) {
                    return -1;
                }
                if (a.vaccinated < b.vaccinated) {
                    return 1;
                }
                return 0;

            }
            )
            return <ul className="list-disc">
                <li>
                    <Link href={`/bundeslander/${vaccinationArray[0].name.replace('ü', 'u')}`}>      <p className="text-lg p-1"><button className="text-blue-500">{vaccinationArray[0].name}</button> c {(vaccinationArray[0].vaccinated)}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${vaccinationArray[1].name.replace('ü', 'u')}`}>     <p className="text-lg p-1 "><button className="text-blue-500">{vaccinationArray[1].name}</button> c {(vaccinationArray[1].vaccinated)}</p></Link>
                </li>
                <li>
                    <Link href={`/bundeslander/${vaccinationArray[2].name.replace('ü', 'u')}`}><p className="text-lg p-1"><button className="text-blue-500">{vaccinationArray[2].name}</button> c {(vaccinationArray[2].vaccinated)}</p></Link>
                </li>
            </ul>



    }



}