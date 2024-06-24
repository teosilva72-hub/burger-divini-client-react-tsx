import React, { useState } from "react";
import '../assets/css/index.css';
import { Chart } from "react-google-charts";
import apiUser from "../api/user";
import apiProduto from '../api/produto';
import { toast } from "react-toastify";
import $ from 'jquery';
import Menu01 from "./component/menu";

export default function Index() {

    

    return (
        <>
           
            <Menu01/><br /><br /><br />
            <iframe src="https://app.anota.ai/m/HTN5SmxJw" width="100%" height="500px" style={{border: "none"}}></iframe>

        </>
    );
}