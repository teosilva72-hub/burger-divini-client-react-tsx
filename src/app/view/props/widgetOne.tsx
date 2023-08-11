import $ from 'jquery';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function WidgetOne(props: any) {
    const navigate = useNavigate();
    async function moreOption(e: any) {
        if(props.tipo == 'usuario') navigate('/user/register')
    }


    return (
        <>
            
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                <div className="card">
                    <div className={`card-body ${props.color}`}>
                        <h5 className="card-title text-center">{props.title} {props.icon}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{props.subTitle}</h6>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-primary col-12 mb-1">Total: {props.total}</button>
                            </div>
                            <div className="col-6">
                                <button type="button"
                                    onClick={moreOption}
                                    id={`${props.tipo}`}
                                    className="btn btn-danger col-12">
                                    {props.btnDanger}
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-warning col-12" >{props.btnCriar}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}