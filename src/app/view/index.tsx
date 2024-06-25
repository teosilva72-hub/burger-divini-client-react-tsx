import React, { useState } from "react";
import '../assets/css/index.css';

import { toast } from "react-toastify";
import $ from 'jquery';
import Menu01 from "./component/menu";
import Carrosel01 from "../view/component/carrossel"
import ModalBemVinda from "./component/mod/modalBemVinda";
import locale from "../assets/locale/Pt_BR.json"
import card01 from "./component/card/card01";


export default function Index() {

    const welcome = () => {
        $('#modalWelcome').click()
    }
    
    setTimeout(()=>{
        welcome()
    },100)

    return (
        <>
            <Menu01 />
            <ModalBemVinda title={locale.empresa} close={locale.modal.close} component={card01}/>
            <div className="content">
                <Carrosel01 />
                <iframe src={locale.integrator.anotaAi} width="100%" height="650px" style={{border: "none"}}></iframe>
                <button type="button" id="modalWelcome" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>
            </div>

        </>
    );
}