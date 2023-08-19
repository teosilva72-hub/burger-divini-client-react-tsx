import axios from "axios";
import $ from 'jquery';
import { useState } from "react";
import { toast } from 'react-toastify';
import product from "../../api/produto";

export default function CadastrarUser(props: any) {
    const [razaoSocial, setRazaoSocial] = useState<any>("");
    const [email, setEmail] = useState<any>("");
    const [nomeFantasia, setNomeFantasia] = useState<any>("");
    const [cnpj, setCnpj] = useState<any>("");
    const [nomeContato, setNomeContato] = useState<any>("");
    const [telefone, setTelefone] = useState<any>("");
    const [dataAbertura, setDataAbertura] = useState<any>("");
    const [inscricaoSocial, setInscricaoSocial] = useState<any>("");
    const [cep, setCep] = useState<any>("");
    const [numero, setNumero] = useState<any>(null);
    const [logradouro, setLogradouro] = useState<any>("");
    const [cidade, setCidade] = useState<any>("");
    const [uf, setUf] = useState<any>();
    const [bairro, setBairro] = useState<any>("");
    const [pontoReferencia, setPontoReferencia] = useState<any>("");
    const [complemento, setComplemento] = useState<any>("");

    const cadastrar = async (value: any) => {
        if (value) $('#rowCadastrarFornecedor').removeClass('d-none');
        else $('#rowCadastrarFornecedor').addClass('d-none');
    }

    const endereco = (value: any) => {
        if (value) $('#endereco').removeClass('d-none');
        else {
            $('#endereco').addClass('d-none');
            $('#logradouro').val("");
            setCep('');
            setNumero('');
            setComplemento('');
            $('#complemento').val("");
            $('#pontoReferencia').val("");
            $('#cidade').val("");
            $('#uf').val("");
            $('#bairro').val("");
        }
    }

    const viacep = async (value: any) => {
        try {
            const result = await axios.get(`https://viacep.com.br/ws/${String(value)}/json/`);
            $('#logradouro').val(result.data.logradouro);
            $('#bairro').val(result.data.bairro);
            $('#uf').val(result.data.uf);
            $('#cidade').val(result.data.localidade);
            setCep(value);
            return result;

        } catch (e) {
            $('#logradouro').val("");
            $('#bairro').val("");
            $('#uf').val();
            $('#cidade').val("");
            toast.error(`CEP inválido!`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
            return e;
        }
    }

    const saveFornecedor = async () => {
        try {
            const data = {
                razao_social: razaoSocial,
                nome_fantasia: nomeFantasia,
                email: email,
                telefone: telefone,
                cnpj: cnpj,
                nome_contato: nomeContato,
                data_abertura: dataAbertura,
                endereco: {
                    cep: cep,
                    numero: numero,
                    logradouro: `${$('#logradouro').val()}`,
                    ponto_referencia: `${$('#pontoReferencia').val()}`,
                    uf: `${$('#uf').val()}`,
                    complemento: complemento,
                    cidade: `${$('#cidade').val()}`
                }
            }
            const result: any = await product.saveFornecedor(data);
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

    const setForm = async () => {
        let checked: any = document.getElementById('checkEndereco');
        let checkedRegister: any = document.getElementById('checkCadastrar');
        if (razaoSocial.trim() == '') {
            toast.error(`Nome não pode ser igual a vazio!`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        } else if (cnpj.trim() == '') {
            toast.error(`Email não pode ser igual a vazio!`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        } else if (checked.checked) {
            if (cep == null || cep == undefined) {
                toast.error(`CEP não pode ser igual a vazio!`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
            } else if (numero == null || numero == undefined) {
                toast.error(`Número não pode ser igual a vazio!`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
            } else {
                try {
                    const cepApi: any = await viacep(cep);
                    if (cepApi.request.status == 200) {
                        await saveFornecedor();
                        checked.checked = false;
                        checkedRegister.checked = false;
                        await endereco(false);
                        await cadastrar(false);
                        $('#rowCadastrarFornecedor input select').val('');
                    }else throw 'CEP inválido!'
                } catch (error: any) {
                    toast.error(`${error}`, {
                        className: 'toast-danger',
                        theme: 'colored',
                        position: 'top-center',
                    });
                }

            }
        }else await saveFornecedor();


    }
    return (
        <>
            <form>
                <div className="card-body">
                    <h5 className="card-title text-center">FORNECEDOR</h5><hr />
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox" value="" id="checkCadastrar"
                            onClick={(e: any) => { cadastrar(e.target.checked) }}
                        />
                        <label className="form-check-label">
                            Cadastrar Fornecedor
                        </label>
                    </div>
                    <div className="row d-none" id="rowCadastrarFornecedor">
                        <div className="col-md-6 col-sm-12">
                            <span>Razao Social</span>
                            <input type="text"
                                onChange={(e: any) => setRazaoSocial(e.target.value)}
                                value={razaoSocial}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <span>Nome Fantasia</span>
                            <input type="text"
                                onChange={(e: any) => setNomeFantasia(e.target.value)}
                                value={nomeFantasia}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <span>CNPJ</span>
                            <input type="text"
                                onChange={(e: any) => setCnpj(e.target.value)}
                                value={cnpj}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <span>Telefone</span>
                            <input type="text"
                                onChange={(e: any) => setTelefone(e.target.value)}
                                value={telefone}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <span>Data Abertura</span>
                            <input type="date"
                                onChange={(e: any) => setDataAbertura(e.target.value)}
                                value={dataAbertura}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <span>Nome Contato</span>
                            <input type="text"
                                onChange={(e: any) => setNomeContato(e.target.value)}
                                value={nomeContato}
                                className="form-control mb-2" />
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <span>Email</span>
                            <input type="email"
                                onChange={(e: any) => setEmail(e.target.value)}
                                value={email}
                                className="form-control mb-3" />
                        </div>
                        <div className="col-6 mb-3">{/*CHECK BOX ENDERECO*/}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="checkEndereco" onClick={(e: any) => { endereco(e.target.checked) }} />
                                <label className="form-check-label">
                                    Endereço
                                </label>
                            </div>
                        </div>
                        <div className="col-6 mb-3">{/*CHECK BOX RESETAR CAMPOS*/}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label className="form-check-label">
                                    Resetar campos
                                </label>
                            </div>
                        </div>

                        {/**/}
                        <div className="col-md-12 col-sm-12 d-none" id="endereco">
                            <h5 className="text-center">Endereço</h5><hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <span>CEP</span>
                                    <input type="number"
                                        value={cep}
                                        className="form-control mb-3" id="cepInput"
                                        onClick={() => setCep(null)}
                                        onBlur={(e: any) => { viacep(e.target.value) }} required />
                                </div>
                                <div className="col-md-6">
                                    <span>Logradouro</span>
                                    <input type="text"
                                        className="form-control mb-3" disabled id="logradouro" />
                                </div>
                                <div className="col-md-3">
                                    <span>Número</span>
                                    <input type="number" id="numero"
                                        onBlur={(e: any) => setNumero(e.target.value)}
                                        className="form-control mb-3" required />
                                </div>
                                <div className="col-md-4">
                                    <span>Complemento</span>
                                    <input type="text" id="complemento"
                                        onBlur={(e: any) => setComplemento(e.target.value)}
                                        className="form-control mb-3" required />
                                </div>
                                <div className="col-md-5">
                                    <span>Ponto de Referência</span>
                                    <input type="text" id="pontoReferencia"
                                        onBlur={(e: any) => setPontoReferencia(e.target.value)}
                                        className="form-control mb-3" required />
                                </div>
                                <div className="col-md-6">
                                    <span>Cidade</span>
                                    <input type="text" onBlur={(e: any) => setCidade(e.target.value)}
                                        className="form-control mb-3" disabled id="cidade" />
                                </div>
                                <div className="col-md-2">
                                    <span>UF</span>
                                    <input type="text" onBlur={(e: any) => setUf(e.target.value)}
                                        className="form-control mb-3" disabled id="uf" />
                                </div>
                                <div className="col-md-4">
                                    <span>Bairro</span>
                                    <input type="text" onBlur={(e: any) => setBairro(e.target.value)}
                                        className="form-control mb-3" disabled id="bairro" />
                                </div>
                            </div>
                        </div>
                        <button type="button"
                            onClick={setForm}
                            className="btn btn-danger col-12">Cadastrar</button>
                    </div>
                </div>
            </form>
        </>
    );
}