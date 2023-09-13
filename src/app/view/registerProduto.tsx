import Cadastrar from "./props/cadastrarProduto";
import NavBar from "./props/navbar";
import '../assets/css/produto.css';
import ListUser from "./props/listUser";
import ListProd from "./props/listProdutos";
import Categoria from "./props/categoriaProdutos";
import ListCategoria from "./props/listCategoria";
import Fornecedor from "./props/cadastrarFornecedor";
import ListFornecedor from "./props/listFornecedor";
import "../assets/css/cards.css";

export default function RegisterProduto(props: any) {

    return (
        <>
            <NavBar />
            <main id="main" className="card-color-blue">
                <div className="container-fluid">
                    <div className="card card-color-gray position-card">
                        <div className="card-body">
                            <h1 className="card-title text-center card-title-white">ESTOQUE</h1><hr />
                            <div className="row">
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="card mb-3 card-color-blue" id="cadastrar">{/**LADO ESQUERDO */}
                                        <Cadastrar />
                                    </div>
                                    <div className="card mb-3 card-color-gold" id="cadastrar">{/**LADO ESQUERDO */}
                                        <Categoria />
                                    </div>
                                    <div className="card mb-3 card-color-blue" id="cadastrar">{/**LADO ESQUERDO */}
                                        <Fornecedor />
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12 mb-3"> {/**LADO DIREITO */}
                                    <div className="row">
                                        <div className="col-12 mb-3"> {/**LADO DIREITO */}
                                            <ListProd />
                                        </div>
                                        <div className="col-12 mb-3"> {/**LADO DIREITO */}
                                            <ListCategoria />
                                        </div>
                                        <div className="col-12 mb-3"> {/**LADO DIREITO */}
                                            <ListFornecedor />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    );
}