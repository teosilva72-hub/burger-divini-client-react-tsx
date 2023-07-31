

export default function WidgetOne(props: any) {

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <div className={`card-body ${props.color}`}>
                    <h5 className="card-title text-center">{props.title} {props.icon}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.subTitle}</h6>
                    <button className="btn btn-primary col-12 mb-1">Total: {props.total}</button>
                    <button type="button" className="btn btn-danger col-12">{props.btnDanger}</button>
                </div>
            </div>
        </div>
    );

}