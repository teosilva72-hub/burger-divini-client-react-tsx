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
                        <div className="row" >
                            <WidgetOne total={10} title="Usuários" btnDanger="Visualizar" icon={<i className="bi bi-people-fill"></i>} />
                            <WidgetOne total={10} title="Produtos" btnDanger="Visualizar" icon={<i className="bi bi-box"></i>} />
                            <WidgetOne total={10} title="Caixa" btnDanger="Visualizar" icon={<i className="bi bi-coin"></i>} />
                            <WidgetOne total={10} title="Perfil" btnDanger="Visualizar" icon={<i className="bi bi-person-circle"></i>} />
                        </div>
                    </article>
                    <article id="graficoVendas">
                        <div className="row">
                            <ChartVendas title="Movimentação"/>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}