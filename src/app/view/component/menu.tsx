import locale from '../../assets/locale/Pt_BR.json';
import '../../assets/css/index.css'
import anotaAi from '../../assets/img/anotaai.png'

export default function Menu01(props: any) {
    const linkWpp = () => {
        window.open(locale.contato.whatsapp, '_blank');
    }

    const linkAnotaAi = () => {
        window.open(locale.integrator.anotaAi, '_blank');

    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{locale.empresa}</a>
                    <a href="#" onClick={linkAnotaAi}>
                        <img src={anotaAi} style={{ width: '40px' }} />
                    </a>
                    <a href='#' id='linkWpp' onClick={linkWpp}>
                        <i className="bi bi-whatsapp" style={{ fontSize: "20pt", color: "green" }}></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" disabled={true} data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">{locale.menu.home}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cardápio</a>
                                </li>

                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}