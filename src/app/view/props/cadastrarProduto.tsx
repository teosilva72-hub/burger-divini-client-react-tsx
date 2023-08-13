import { toast } from "react-toastify";
import user from "../../api/user";
import axios from "axios";
import { useState } from "react";
import $ from 'jquery';

export default function Cadastrar(props: any) {

    const [nome, setNome] = useState<any>("");
    const [marca, setMarca] = useState<any>("");
    const [descricao, setDescricao] = useState<any>("");
    const [valor, setValor] = useState<any>("");
    const [valorVenda, setValorVenda] = useState<any>("");
    const [unidades, setUnidades] = useState<any>("");
    const [validade, setValidade] = useState<any>(null);
    const [fornecedor, setFornecedor] = useState<any>();
    const [categoria, setCategoria] = useState<any>();

    const cadastrar = async (value: any) => {
        if (value) $('#rowCadastrar').removeClass('d-none');
        else $('#rowCadastrar').addClass('d-none');
    }

    const SaveProduto = async () => {
        try {
            const data = {
                nome: nome,
                marca: marca,
                descricao: descricao,
                valor: Number(valor),
                valor_venda: Number(valorVenda),
                id_fornecedor: fornecedor,
                id_categoria: categoria,
                unidades: unidades,
                validade: validade
            };

            const result: any = await user.registerUser(data);

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
            <form>
                <div className="card-body">
                    <h5 className="card-title text-center">CADASTRAR</h5><hr />
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
                        <div className="col-md-6 col-sm-6">
                            <span>Descrição</span>
                            <input type="email"
                                onChange={(e: any) => setDescricao(e.target.value)}
                                value={descricao}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <span>valor</span>
                            <input type="number"
                                onChange={(e: any) => setValor(e.target.value)}
                                value={valor}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <span>Valor Venda</span>
                            <input type="number"
                                onChange={(e: any) => setValorVenda(e.target.value)}
                                value={valorVenda}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <span>Unidades</span>
                            <input type="password" id="repeatPassword"
                                className="form-control mb-3" />
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <span>Fornecedor</span>
                            <select className="form-select form-select-md mb-3"
                                onChange={(e: any) => setUnidades(e.target.value)}
                                value={fornecedor}
                                aria-label="Large select example">
                                <option selected>-------</option>
                                <option value={0}>ASSAI</option>
                                <option value={1}>ATACADÃO</option>
                            </select>

                        </div>
                        <div className="col-md-12 col-sm-12">
                            <span>Categoria</span>
                            <select className="form-select form-select-md mb-3"
                                onChange={(e: any) => setUnidades(e.target.value)}
                                value={fornecedor}
                                aria-label="Large select example">
                                <option selected>-------</option>
                                <option value={0}>LANCHE</option>
                                <option value={3}>BEBIDAS</option>
                            </select>
                        </div>

                        {/**/}
                        
                        <button type="button"
                            
                            className="btn btn-danger col-12">Cadastrar</button>
                    </div>
                </div>
            </form>
        </>
    );
}