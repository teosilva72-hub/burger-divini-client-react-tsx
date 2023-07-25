import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/login.css';
import auth from "../api/auth";
import { toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';
import ModalRegisterUser from './modal/registerUser';
import $ from 'jquery';

export default function Login() {
    $('.background').click(()=>{
        alert()
    })
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submit = async (e: any) => {
        e.preventDefault();

        const result: any = await auth.login(email, password);
        if (result.status) {
            document.cookie = `Bearer ${result.token}`;
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
    }

    return (
        <>
        <ModalRegisterUser
                title="Registrar-se!"
                closed="Cancelar"
                submit="Cadastrar"
            />
            <div className='background'></div>
            <div className="main">
                <form onSubmit={submit}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><i className="bi bi-eye-fill"></i> </h5><hr />
                            <h6 className="card-subtitle mb-4 text-muted">LOGIN</h6>
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
                            <div className="form-group">
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
                            <button type="submit" className="btn btn-primary col-12 mb-3">Acessar</button>
                            <div className="row">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalRegisterUser">
                                    Launch demo modal</button>
                                <div className="col-12">
                                    <a href="#" data-toggle="modal" data-target="#modalRegisterUser"
                                        className="list-group-item list-group-item-action text-center">Recuperar senha</a>
                                </div>
                                <div className="col-12">
                                    <a href="#" className="list-group-item list-group-item-action text-center">Primeiro Acesso</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            
        </>
    );
}