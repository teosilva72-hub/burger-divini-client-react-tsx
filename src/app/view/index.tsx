import React from "react";
import '../assets/css/index.css';
import Footer from "./props/footer";
import NavBar from "./props/navbar";
import WidgetOne from "./props/widgetOne";
import { Chart } from "react-google-charts";
import ChartVendas from "./props/chartVendas";

export default function Index() {

    return (
        <>
            <NavBar />
            <section id="widgetOne">
                <div className="container-fluid">
                    <article id="menu-header">
                        <div className="row">
                            <div className="col-6">
                                <div className="row" >
                                    <WidgetOne total={10} title="Usuários" tipo={'usuario'}
                                        btnDanger={<i className="bi bi-three-dots"></i>}
                                        btnCriar={<i className="bi bi-person-fill-add"></i>} icon={<i className="bi bi-people-fill"></i>}
                                    />
                                    <WidgetOne total={10} title="Produtos" tipo={'produto'}
                                        btnDanger={<i className="bi bi-three-dots"></i>}
                                        icon={<i className="bi bi-box"></i>}
                                        btnCriar={<i className="bi bi-align-middle"></i>}
                                    />
                                    <WidgetOne total={10} title="Fornecedor" tipo={'fornecedor'}
                                        btnDanger={<i className="bi bi-three-dots"></i>}
                                        icon={<i className="bi bi-truck"></i>}
                                        btnCriar={<i className="bi bi-align-middle"></i>}
                                    />
                                    <WidgetOne total={10} title="Categória" tipo={'categoria'}
                                        btnDanger={<i className="bi bi-three-dots"></i>}
                                        icon={<i className="bi bi-truck"></i>}
                                        btnCriar={<i className="bi bi-align-middle"></i>}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
teste
                            </div>
                        </div>
                    </article>
                    <article id="graficoVendas">
                        <div className="row">

                        </div>
                    </article>
                </div>
            </section>

        </>
    );
}