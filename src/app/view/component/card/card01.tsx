
export default function card01(props: any) {

    return (
        <>
            <div className="card">
                <img src={props.logoTipo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                    Desde 2021, a Burger Divini tem sido uma referência de excelência gastronômica em São Paulo. Fundada em 1º de setembro com a visão de oferecer aos amantes de hambúrguer uma experiência única e sabor inigualável!
                    </p>
                </div>
            </div>
        </>
    )
}