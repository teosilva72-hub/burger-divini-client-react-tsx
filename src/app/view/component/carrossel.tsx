import lanche1 from '../../assets/img/lanches/Catupiry Divini.webp'
import lanche2 from '../../assets/img/lanches/Cheddar Duplo.webp'
import lanche3 from '../../assets/img/lanches/Divini Master.webp'
import lanche4 from '../../assets/img/lanches/Smash Divini.webp'

export default function carrosel(props: any) {
    

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={lanche1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={lanche2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={lanche3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={lanche4} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}