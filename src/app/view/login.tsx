import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/login.css';
import auth from "../api/auth";
import { toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';
import $ from 'jquery';
export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [token, setToken] = useState<number>(0);
    const inputToken = $('#inputToken');

    const submit = async (e: any) => {
        e.preventDefault();
        if (token == 0) {
            const result: any = await auth.login(email, password);
            if (result.status) {
                document.cookie = `Bearer ${result.token}`;
                localStorage.setItem('Bearer', `${result.token}`);
                toast.success(result.message, {
                    className: 'toast-success',
                    theme: 'colored',
                    position: 'top-center',
                });
                setTimeout(() => {
                    navigate('/index');
                }, 3000)
            } else {
                document.cookie = 'null';
                toast.error(`${result.message}`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
            }
        } else {
            const result: any = await auth.activeProfileUser(email, token);
            if (!result.status) {
                toast.error(`${result.message}`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
                $('.input-token').addClass('error');
                setToken(0);
            } else {
                toast.success(result.message, {
                    className: 'toast-success',
                    theme: 'colored',
                    position: 'top-center',
                });
                $('#inputToken').addClass('d-none');
                setToken(0);
            }
        }
    }

    const accessFirst = async (checked: boolean) => {
        if (checked) {
            $('#inputToken').removeClass('d-none');
            $('#recoveryPass').prop('checked', false);
            $('#inputsLogin').removeClass('d-none');
            $('.emailRecovery').remove();
        }
        else $('#inputToken').addClass('d-none');
    }

    const recoveryPass = async (check: boolean) => {
        if (check == true) {
            $('#inputToken').addClass('d-none');
            $('#firstAccess').prop('checked', false);
            $('#inputsLogin').addClass('d-none');
            $('#inputRecoveryPass').append(
                `<label >Recuperar conta:</label>
                <input type="email" class='form-control emailRecovery mb-4' value placeholder='seu_email@email.com'/>
                <button type="button" class="btn btn-primary emailRecovery col-12 mb-3" ${onclick=recovery}>Recuperar</button>
               `
            );
        } else {
            $('#inputsLogin').removeClass('d-none');
            $('.emailRecovery').remove();
            await recovery(false)
        }
    }

    async function recovery(e: any) {
        
        var mail: any = $('.emailRecovery').val();
        if(!e) return e
        if (mail != '') {
            const result = await auth.recoveryPass(mail);
            if(result == null) return false;
            if (result.status) {
                toast.success(result.message, {
                    className: 'toast-success',
                    theme: 'colored',
                    position: 'top-center',
                });
            } else {
                toast.error(`${result.message}`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
            }            
        }
    }

    return (
        <>
            <div className='background'></div>
            <div className="main">
                <form onSubmit={submit}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><i className="bi bi-eye-fill"></i> </h5><hr />
                            <h6 className="card-subtitle mb-4 text-muted">LOGIN</h6>
                            <div id='inputsLogin'>
                                <div className="form-group">
                                    <label >E-mail</label>
                                    <input type="email"
                                        className="form-control mb-3"
                                        id="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group passwordInput">
                                    <label>Senha</label>
                                    <input type="password"
                                        className="form-control mb-3"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group d-none" id='inputToken'>
                                    <label>Token</label>
                                    <input type="number"
                                        className="form-control mb-3 input-token"
                                        id="token"
                                        value={token}
                                        onChange={(e: any) => setToken(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary col-12 mb-3">Acessar</button>
                            </div>

                            <div id='inputRecoveryPass'></div>

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" name='firstAccess' id="firstAccess" onClick={(e: any) => accessFirst(e.target.checked)} />
                                <label className="form-check-label">Primeiro Acesso!</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" name='recoveryPass' id="recoveryPass" onClick={(e: any) => recoveryPass(e.target.checked)} />
                                <label className="form-check-label">Recuperar Senha!</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}