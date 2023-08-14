import { toast } from "react-toastify";
import { useState } from "react";
import $ from 'jquery';
import produto from "../../api/produto";
import { async } from "q";

export default function Categoria(props: any) {

    const [nome, setNome] = useState<any>();

    const cadastrar = async (value: any) => {
        if (value) $('#rowCadastrarCategoria').removeClass('d-none');
        else $('#rowCadastrarCategoria').addClass('d-none');
    }
    const valideProduto = async () => {
        try {
            if (nome == undefined || nome.trim() == '') throw 'nome é obrigatório!';
            else return true;
        } catch (error) {
            return error;
        }
    }

    const SaveProduto = async (e: any) => {
        try {
            e.preventDefault()
            await valideProduto();
            const data = {
                nome: nome
            };

            const result: any = await produto.saveCategoria(data);
            //console.log(result)
            if (result.status) {
                toast.success(`${result.message}`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
            } else throw result.message
        } catch (error: any) {
            toast.error(`${error}`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        }
    }

    return (
        <>
            <form onSubmit={SaveProduto}>
                <div className="card-body">
                    <h5 className="card-title text-center">CATEGORIA</h5><hr />
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox" value=""
                            onClick={(e: any) => { cadastrar(e.target.checked) }}
                        />
                        <label className="form-check-label">
                            Cadastrar Categoria
                        </label>
                    </div>
                    <div className="row d-none" id="rowCadastrarCategoria">
                        <div className="col-md-12 col-sm-12">
                            <span>Nome</span>
                            <input type="text"
                                onChange={(e: any) => setNome(e.target.value)}
                                value={nome}
                                className="form-control mb-2" />
                        </div>
                        {/**/}

                        <button type="submit"
                            className="btn btn-danger col-12">Cadastrar
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}