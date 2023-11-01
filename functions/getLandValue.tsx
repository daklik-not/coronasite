import Link from "next/link";

export function getLandValue(value: string, arrayName: {
    weekIncidence: number,
    name: string,
     cases: number,
     population: number,
    deaths: number,
    delta:{
        weekIncidence:number
    }
}[]) {
    const regex = / /g;
    let jsx = []
    let counter = 0;
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
            for (let value of arrayName) {
                if (counter === 5) {
                    break
                }
                jsx.push(<li>
                    <Link href={`/state-statistic/${value.name.replace('ü', 'u').replace(regex, '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a')}`}>    <p className="text-2sm p-1">
                        <button className="text-blue-500">{value.name}
                        </button> c {value.weekIncidence.toFixed(2)}
                    </p>
                    </Link>
                </li>)
                counter++;
            }

            return <ul className="list-disc pt-5">
                {jsx}
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
            for (let value of arrayName) {
                if (counter === 5) {
                    break
                }
                jsx.push(<li>
                    <Link href={`/state-statistic/${value.name.replace('ü', 'u').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a')}`}>    <p className="text-2sm p-1">
                        <button className="text-blue-500">{value.name}
                        </button> c {value.cases}
                    </p>
                    </Link>
                </li>)
                counter++;
            }

            return <ul className="list-disc pt-5">
                {jsx}
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
            for (let value of arrayName) {
                if (counter === 5) {
                    break
                }
                jsx.push(<li>
                    <Link href={`/state-statistic/${value.name.replace(' ', '-').replace(' ', '-').replace('ü', 'u').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a')}`}>    <p className="text-2sm p-1">
                        <button className="text-blue-500">{value.name}
                        </button> c {(value.cases * 100 / value.population).toFixed(2)}
                        %
                    </p>
                    </Link>
                </li>)
                counter++;
            }

            return <ul className="list-disc pt-5">
                {jsx}
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
            for (let value of arrayName) {
                if (counter === 5) {
                    break
                }
                jsx.push(<li>
                    <Link href={`/state-statistic/${value.name.replace('ü', 'u').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a')}`}>    <p className="text-2sm p-1">
                        <button className="text-blue-500">{value.name}
                        </button> c {(value.deaths)}

                    </p>
                    </Link>
                </li>)
                counter++;
            }

            return <ul className="list-disc pt-5">
                {jsx}
            </ul>



        case 'deathsIncidence':
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
            for (let value of arrayName) {
                if (counter === 5) {
                    break
                }
                jsx.push(<li>
                    <Link href={`/state-statistic/${value.name.replace('ü', 'u').replace(' ', '-').replace('ß', 'b').replace('ö', 'o').replace('ä', 'a')}`}>
                        <p className="text-2sm p-1">
                            <button className="text-blue-500">{value.name}
                            </button> c {(value.deaths * 100 / value.cases).toFixed(2)}

                        </p>
                    </Link>
                </li>)
                counter++;
            }

            return <ul className="list-disc pt-5">
                {jsx}
            </ul>

        case 'delta':
            arrayName.sort(function (a, b) {
                if (a.delta.weekIncidence > b.delta.weekIncidence) {
                    return -1;
                }
                if (a.delta.weekIncidence < b.delta.weekIncidence) {
                    return 1;
                }
                return 0;
            }
            )
            for (let value of arrayName) {
                if (counter === 5) {
                    break
                }
                jsx.push(<li>
                    <Link href={`/state-statistic/${value.name.replace('ü', 'u')}`}>
                        <p className="text-2sm p-1">
                            <button className="text-blue-500">{value.name}
                            </button> c {(value.delta.weekIncidence).toFixed(2)}

                        </p>
                    </Link>
                </li>)
                counter++;
            }

            return <ul className="list-disc pt-5">
                {jsx}
            </ul>

    }
}