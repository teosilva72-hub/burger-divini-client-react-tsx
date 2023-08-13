import Cadastrar from "./props/cadastrarProduto";
import NavBar from "./props/navbar";
import '../assets/css/produto.css';
import ListUser from "./props/listUser";

export default function RegisterProduto(props: any) {

    return (
        <>
            <NavBar />
            <main id="main">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">PRODUTOS</h1><hr />
                            <div className="row">
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="card" id="cadastrar">{/**LADO ESQUERDO */}
                                        <Cadastrar />
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12 mb-3"> {/**LADO DIREITO */}
                                    <ListUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    );
}