import { toast } from "react-toastify";
import { useState } from "react";
import $ from 'jquery';
import produto from "../../api/produto";
import { async } from "q";

export default function Cadastrar(props: any) {

    const [nome, setNome] = useState<any>();
    const [marca, setMarca] = useState<any>();
    const [descricao, setDescricao] = useState<any>();
    const [valor, setValor] = useState<any>();
    const [valorVenda, setValorVenda] = useState<any>();
    const [unidades, setUnidades] = useState<any>();
    const [validade, setValidade] = useState<any>();
    const [fornecedor, setFornecedor] = useState<any>();
    const [categoria, setCategoria] = useState<any>();

    const cadastrar = async (value: any) => {
        if (value) $('#rowCadastrar').removeClass('d-none');
        else $('#rowCadastrar').addClass('d-none');
    }
    const valideProduto = async () => {
        try {
            if (nome == undefined || nome.trim() == '') throw 'nome é obrigatório!';
            else if (marca == undefined || marca.trim() == '') throw 'marca é obrigatório!';
            else if (descricao == undefined || descricao.trim() == '') throw 'descrição é obrigatório!'
            else if (valor == undefined || valor == null) throw 'valor é  obrigatório!';
            else if (unidades == undefined || unidades == null) throw 'unidade é obrigatório!'
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
                nome: nome,
                marca: marca,
                descricao: descricao,
                valor: Number(valor),
                valor_venda: Number(valorVenda),
                id_fornecedor: Number(fornecedor),
                id_categoria: Number(categoria),
                unidades: Number(unidades),
                validade: validade
            };

            const result: any = await produto.saveProduto(data);
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

    (async () => {
        try {
            const getCategoria = await produto.getCategoria();
            const getFornecedor = await produto.getFornecedor();
            if (getCategoria.status && getCategoria.status){
                for(let t of getCategoria.data){
                    $('#categoria').append(
                        `
                            <option value="${t.id}">${t.nome}</option>
                        `
                    );
                }
                for(let t of getFornecedor.data){
                    $('#fornecedor').append(
                        `
                            <option value="${t.id}">${t.nome_fantasia}</option>
                        `
                    );
                }
            }else throw `${getCategoria.message} && ${getFornecedor.message}`;
        } catch (e: any) {
            toast.error(`${e}`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        }
    })()

    return (
        <>
            <form onSubmit={SaveProduto}>
                <div className="card-body">
                    <h5 className="card-title text-center">PRODUTOS</h5><hr />
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox" value="" id="checkCadastrar"
                            onClick={(e: any) => { cadastrar(e.target.checked) }}
                        />
                        <label className="form-check-label">
                            Cadastrar Produto
                        </label>
                    </div>
                    <div className="row d-none" id="rowCadastrar">
                        <div className="col-md-6 col-sm-12">
                            <span>Nome</span>
                            <input type="text"
                                onChange={(e: any) => setNome(e.target.value)}
                                value={nome}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <span>Marca</span>
                            <input type="text"
                                onChange={(e: any) => setMarca(e.target.value)}
                                value={marca}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <span>Descrição</span>
                            <textarea
                                onChange={(e: any) => setDescricao(e.target.value)}
                                value={descricao}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <span>valor</span>
                            <input type="number"
                                onChange={(e: any) => setValor(e.target.value)}
                                value={valor}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <span>Valor Venda</span>
                            <input type="number"
                                onChange={(e: any) => setValorVenda(e.target.value)}
                                value={valorVenda}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <span>Unidades</span>
                            <input type="number"
                                onChange={(e: any) => setUnidades(e.target.value)}
                                value={unidades}
                                className="form-control mb-3" />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <span>Fornecedor</span>
                            <select className="form-select form-select-md mb-3" id="fornecedor"
                                onChange={(e: any) => setFornecedor(e.target.value)}
                                value={fornecedor}
                                aria-label="Large select example">
                                <option selected>-------</option>
                            </select>

                        </div>
                        <div className="col-md-6 col-sm-6">
                            <span>Categoria</span>
                            <select className="form-select form-select-md mb-3" id="categoria"
                                onChange={(e: any) => setCategoria(e.target.value)}
                                value={categoria}
                                aria-label="Large select example">
                                <option selected>-------</option>
                            </select>
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