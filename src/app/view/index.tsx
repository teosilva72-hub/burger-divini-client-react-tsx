import React, { useState } from "react";
import '../assets/css/index.css';
import NavBar from "./props/navbar";
import WidgetOne from "./props/widgetOne";
import { Chart } from "react-google-charts";
import apiUser from "../api/user";
import apiProduto from '../api/produto';
import { toast } from "react-toastify";
import $ from 'jquery';
import ChartVendas from "./props/chartVendas";

export default function Index() {

    const [user, setUser] = useState<any>();
    const [produto, setProduto] = useState<any>();
    const [fornecedor, setFornecedor] = useState<any>();
    const [categoria, setCategoria] = useState<any>();

    const getDataCard = async () => {
        try {
            const reqUser = await apiUser.listUser();
            const reqProduto = await apiProduto.getProdutos();
            const reqFornecedor = await apiProduto.getFornecedor();
            const reqCategoria = await apiProduto.getCategoria();
            setUser(reqUser);
            setProduto(reqProduto);
            setFornecedor(reqFornecedor);
            setCategoria(reqCategoria);
            if (user.status) {

            } else throw `${user.message}`
        } catch (e: any) {
            return false
        }
    }
    getDataCard();

    return (
        <>
            <NavBar />
            <section className="card-color-blue" id="widgetOne">
                <div className="container-fluid">
                    <div className="card position">
                        <div className="card-body">
                            <article id="menu-header">
                                <div className="row">
                                    <h3 className="text-center">OFFICE</h3><hr />
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row" onClick={getDataCard}>
                                            <WidgetOne total={user?.data?.length} title="Usuários" tipo={'usuario'}
                                                btnDanger={<i className="bi bi-three-dots"></i>}
                                                btnCriar={<i className="bi bi-person-fill-add"></i>} icon={<i className="bi bi-people-fill"></i>}
                                                colorCard={"card-color-blue"}
                                                titlecolorwhite={"card-title-white"}
                                            />
                                            <WidgetOne total={produto?.data?.length} title="Produtos" tipo={'produtos'}
                                                btnDanger={<i className="bi bi-three-dots"></i>}
                                                icon={<i className="bi bi-box"></i>}
                                                btnCriar={<i className="bi bi-align-middle"></i>}
                                                colorCard={"card-color-blue"}
                                                titlecolorwhite={"card-title-white"}
                                            />
                                            <WidgetOne total={fornecedor?.data?.length} title="Fornecedor" tipo={'fornecedor'}
                                                btnDanger={<i className="bi bi-three-dots"></i>}
                                                icon={<i className="bi bi-truck"></i>}
                                                btnCriar={<i className="bi bi-align-middle"></i>}
                                                colorCard={"card-color-blue"}
                                                titlecolorwhite={"card-title-white"}
                                            />
                                            <WidgetOne total={categoria?.data?.length} title="Categória" tipo={'categoria'}
                                                btnDanger={<i className="bi bi-three-dots"></i>}
                                                icon={<i className="bi bi-truck"></i>}
                                                btnCriar={<i className="bi bi-align-middle"></i>}
                                                colorCard={"card-color-blue"}
                                                titlecolorwhite={"card-title-white"}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <ChartVendas />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <article id="graficoVendas">

                    </article>
                </div>
            </section>

        </>
    );
}