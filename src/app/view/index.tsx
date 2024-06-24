import React, { useState } from "react";
import '../assets/css/index.css';

import { toast } from "react-toastify";
import $ from 'jquery';
import Menu01 from "./component/menu";

export default function Index() {

    const anotaAI = (link:any) => {
       return window.location.href = link
    }

    return (
        <>
           
            <Menu01/><br /><br /><br /><br />
            <iframe  src="https://app.anota.ai/m/HTN5SmxJw" width="100%" height="650px" style={{border: "none"}}></iframe>

        </>
    );
}