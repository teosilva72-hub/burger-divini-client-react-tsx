import NavBar from "./props/navbar";
import '../assets/css/user.css';
import $ from 'jquery';
import axios from "axios";
import CadastrarUser from "./props/cadastrarUser";
import ListUser from "./props/listUser";
export default function RegisterUser(props: any) {


    return (
        <>
            <NavBar />
            <section id="registerUser">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">USUÁRIOS</h1><hr />
                            <div className="row">
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="card" id="cadastrar">{/**LADO ESQUERDO */}
                                        <CadastrarUser/>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12 mb-3"> {/**LADO DIREITO */}
                                    <ListUser/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}