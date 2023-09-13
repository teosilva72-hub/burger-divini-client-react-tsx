import $ from 'jquery';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function WidgetOne(props: any) {
    const navigate = useNavigate();
    async function moreOption(e: any) {
        let tipo = ['produtos', 'categoria', 'fornecedor'];
        if(props.tipo == 'usuario') navigate('/user/register');
        else if(props.tipo.indexOf(tipo)) navigate('/user/produto')
    }


    return (
        <>
            
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className={`card ${props.colorCard}`} onClick={(e:any)=>moreOption((props.tipo))}>
                    <div className={`card-body`}>
                        <h5 className={`card-title text-center ${props.titlecolorwhite}`}>{props.title} {props.icon}</h5>
                        <h6 className="card-subtitle text-body-secondary">{props.subTitle}</h6><hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className={`card-body card-color-gold`}>
                                    <h6 className="card-subtitle text-center text-body-secondary"><b>Total: {props.total}</b></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}