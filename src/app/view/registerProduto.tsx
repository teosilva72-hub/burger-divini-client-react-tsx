import Cadastrar from "./props/cadastrarProduto";
import NavBar from "./props/navbar";
import '../assets/css/produto.css';
import ListUser from "./props/listUser";
import ListProd from "./props/listProdutos";
import Categoria from "./props/categoriaProdutos";
import ListCategoria from "./props/listCategoria";
import Fornecedor from "./props/cadastrarFornecedor";
import ListFornecedor from "./props/listFornecedor";

export default function RegisterProduto(props: any) {

    return (
        <>
            <NavBar />
            <main id="main">
                <div className="container-fluid">
                    <div className="card bg-secondary">
                        <div className="card-body">
                            <h1 className="card-title text-center">ESTOQUE</h1><hr />
                            <div className="row">
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="card mb-3 bg-danger" id="cadastrar">{/**LADO ESQUERDO */}
                                        <Cadastrar />
                                    </div>
                                    <div className="card mb-3 bg-dark" id="cadastrar">{/**LADO ESQUERDO */}
                                        <Categoria />
                                    </div>
                                    <div className="card mb-3 bg-success" id="cadastrar">{/**LADO ESQUERDO */}
                                        <Fornecedor />
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12 mb-3"> {/**LADO DIREITO */}
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <ListProd />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <ListCategoria />
                                        </div>
                                        <div className="col-12 mb-3">
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