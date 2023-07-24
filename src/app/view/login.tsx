import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/login.css';
import auth from "../api/auth";
import { toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submit = async (e: any) => {
        e.preventDefault();
        
        const result:any = await auth.login(email, password);
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
                            <button type="submit" className="btn btn-primary col-12">Acessar</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}