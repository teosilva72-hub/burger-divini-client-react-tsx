import axios from "axios";
import $ from 'jquery';
import { useState } from "react";
import { toast } from 'react-toastify';
import user from "../../api/user";

export default function CadastrarUser(props: any) {
    const [nome, setNome] = useState<any>("");
    const [sobrenome, setSobrenome] = useState<any>("");
    const [email, setEmail] = useState<any>("");
    const [senha, setSenha] = useState<any>("");
    const [perfil, setPerfil] = useState<any>("");
    const [cep, setCep] = useState<any>();
    const [numero, setNumero] = useState<any>("");
    const [logradouro, setLogradouro] = useState<any>("");
    const [cidade, setCidade] = useState<any>("");
    const [uf, setUf] = useState<any>();
    const [bairro, setBairro] = useState<any>("");
    const cadastrar = async (value: any) => {
        if (value) $('#rowCadastrar').removeClass('d-none');
        else $('#rowCadastrar').addClass('d-none');
    }

    const endereco = (value: any) => {
        if (value) $('#endereco').removeClass('d-none');
        else $('#endereco').addClass('d-none');
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

    const setForm = async () => {
        const checked: any = document.getElementById('checkEndereco')
        if (nome.trim() == '') {
            toast.error(`Nome não pode ser igual a vazio!`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        } else if (email.trim() == '') {
            toast.error(`Email não pode ser igual a vazio!`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        } else if (senha.trim() == '' || senha != $('#repeatPassword').val()) {
            toast.error(`Verifique se as senhas foram digitadas corretamente!`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        } else if (perfil == '') {
            toast.error(`Perfil não pode ser igual a vazio!`, {
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
            } else {
                try {
                    const cepApi: any = await viacep(cep);
                    if (cepApi.request.status == 200)
                    toast.success(`CEP válido!`, {
                        className: 'toast-danger',
                        theme: 'colored',
                        position: 'top-center',
                    });
                    else console.log('deu ruim')
                } catch (error: any) {
                    toast.error(`CEP inválido!`, {
                        className: 'toast-danger',
                        theme: 'colored',
                        position: 'top-center',
                    });
                }

            }
        } else {
            try {


                const data = {
                    name: nome,
                    last_name: sobrenome,
                    email: email,
                    password: senha,
                    endereco: {
                        cep: cep,
                        numero: `${$('').val()}`,

                    }
                }
                const result = user.registerUser({});
            } catch (error: any) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <div className="card-body">
                <h5 className="card-title text-center">CADASTRAR</h5><hr />
                <div className="form-check">
                    <input className="form-check-input"
                        type="checkbox" value="" id="checkCadastrar"
                        onClick={(e: any) => { cadastrar(e.target.checked) }}
                    />
                    <label className="form-check-label">
                        Cadastrar Usuário
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
                        <span>Sobrenome</span>
                        <input type="text"
                            onChange={(e: any) => setSobrenome(e.target.value)}
                            value={sobrenome}
                            className="form-control mb-2" />
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <span>Email</span>
                        <input type="email"
                            onChange={(e: any) => setEmail(e.target.value)}
                            value={email}
                            className="form-control mb-2" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <span>Senha</span>
                        <input type="password"
                            onChange={(e: any) => setSenha(e.target.value)}
                            value={senha}
                            className="form-control mb-2" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <span>Repetir senha</span>
                        <input type="password" id="repeatPassword"
                            className="form-control mb-3" />
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <span>Perfil</span>
                        <select className="form-select form-select-md mb-3"
                            onChange={(e: any) => setPerfil(e.target.value)}
                            value={perfil}
                            aria-label="Large select example">
                            <option selected>-------</option>
                            <option value="1">ADMIN</option>
                            <option value="2">USER</option>
                            <option value="3">PROPRIETARIO</option>
                        </select>

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
                                    onClick={()=>setCep(null)}
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
                                    className="form-control mb-3" required />
                            </div>
                            <div className="col-md-9">
                                <span>Ponto de Referência</span>
                                <input type="text" id="pontoReferencia"
                                    className="form-control mb-3" required />
                            </div>
                            <div className="col-md-6">
                                <span>Cidade</span>
                                <input type="text"
                                    className="form-control mb-3" disabled id="cidade" />
                            </div>
                            <div className="col-md-3">
                                <span>UF</span>
                                <input type="text"
                                    className="form-control mb-3" disabled id="uf" />
                            </div>
                            <div className="col-md-6">
                                <span>Bairro</span>
                                <input type="text"
                                    className="form-control mb-3" disabled id="bairro" />
                            </div>
                        </div>
                    </div>
                    <button type="button"
                        onClick={setForm}
                        className="btn btn-danger col-12">Cadastrar</button>
                </div>
            </div>
        </>
    );
}