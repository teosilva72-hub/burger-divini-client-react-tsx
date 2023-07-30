

export default function NavBar(props:any) {


    return (
        <><nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#/index"><i className="bi bi-house-door"></i> Início</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/caixa"><i className="bi bi-cash-coin"></i> Caixa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/produtos"><i className="bi bi-shop-window"></i> Produtos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </nav>


        </>
    );
}