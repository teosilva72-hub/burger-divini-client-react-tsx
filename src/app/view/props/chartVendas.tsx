import Chart from "react-google-charts";
import { screen } from '@testing-library/react';


export default function ChartVendas(props: any) {

    return (
        <>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                    <div className={`card-body`}>
                        <h5 className="card-title text-center">{props.title} {props.icon}</h5><hr />
                        <Chart
                            chartType="Bar"
                            data = {[
                                ["MÊS", "Vendas", "Saídas"],
                                ["01", 1000, 400],
                                ["02", 1170, 460],
                                ["03", 660, 1120],
                                ["04", 1030, 540],
                                ["05", 1030, 540],
                                ["06", 1030, 540],
                                ["07", 1030, 540],
                                ["08", 1030, 540],
                                ["09", 1030, 540],
                                ["10", 1030, 540],
                                ["11", 1030, 540],
                                ["12", 1030, 540],
                                ["13", 1030, 540],
                                ["14", 1030, 540],
                                ["15", 1030, 540],
                                ["16", 1030, 540],
                                ["17", 1030, 540],
                                ["18", 1030, 540],
                                ["19", 1030, 540],
                                ["20", 1030, 540],
                                ["21", 1030, 540],
                                ["22", 1030, 540],
                                ["23", 1030, 540],
                                ["24", 1030, 540],
                                ["25", 1030, 540],
                                ["26", 1030, 540],
                                ["27", 1030, 540],
                                ["28", 1030, 540],
                              ]}
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