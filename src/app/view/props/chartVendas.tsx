import Chart from "react-google-charts";
import { screen } from '@testing-library/react';
import { useState } from "react";

export default function ChartVendas(props: any) {
    const [data, setData] = useState<any>([
        ['MÊS', 'Entrada', 'Saida'],
        ["01", 5950, 2200],
        ["02", 2100, 4800],
        ["03", 7580, 3980],

    ]);
    function getDay() {
        const date = new Date();
        let days = [];
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let day: number = lastDay.getDate();
        console.log(day)
        for (var i = 1; i <= day; i++) {
            days.push(i);
            data.push(`${days}`, 3500, 1520)
            console.log('valor de x ', i, '\nvalor de lastDay ', lastDay.getDate())
            if (i == day) break;
        }
        setData(days)
    }
   //getDay()
    //console.log(getDay())

    return (
        <>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                    <div className={`card-body bg-light`}>
                        <h5 className="card-title text-center text-dark">{props.title} {props.icon}</h5><hr />
                        <Chart
                            chartType="Line"
                            data= {data}
                            width="100%"
                            height="200px"
                            legendToggle
                        />
                    </div>
                </div>
            </div>
        </>
    );
}