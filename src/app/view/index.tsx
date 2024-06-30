import React, { useState, useEffect } from "react";
import '../assets/css/index.css';

import { toast } from "react-toastify";
import $ from 'jquery';
import Menu01 from "./component/menu";
import Carrosel01 from "../view/component/carrossel"
import ModalBemVinda from "./component/mod/modalBemVinda";
import locale from "../assets/locale/Pt_BR.json"
import card01 from "./component/card/card01";
declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }

export default function Index() {

    const useGTM = (trackingId: string) => {
        useEffect(() => {
            try {
                const script = document.createElement('script');
                script.async = true;
                script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
                document.head.appendChild(script);

                const inlineScript = document.createElement('script');
                inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `;
                document.head.appendChild(inlineScript);

                return () => {
                    document.head.removeChild(script);
                    document.head.removeChild(inlineScript);
                };
            } catch (e: any) {
                console.log("error google::: ", e.toString())
            }
        }, [trackingId]);
    };
    const gtagReportConversion = (): boolean => {
       
          if (window.gtag) {
            window.gtag('event', 'conversion', {
              send_to: 'AW-16531069974/Gq2mCNbq37oZEJa40Mo9',
              transaction_id: ''
            });
          }

        return false;
    };

    useGTM("AW-16531069974")
    

    const welcome = () => {
        $('#modalWelcome').click()
    }

    setTimeout(() => {
        welcome()
        gtagReportConversion()
    }, 100)

    return (
        <>
            <Menu01/>
            <ModalBemVinda title={locale.empresa} close={locale.modal.close} component={card01} />
            <div className="content">
                <Carrosel01/>
                <iframe src={locale.integrator.anotaAi} width="100%" height="650px" style={{ border: "none" }}></iframe>
                <button type="button" id="modalWelcome" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>
            </div>

        </>
    );
}