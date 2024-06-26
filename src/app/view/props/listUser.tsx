import $ from 'jquery';
import user from '../../api/user';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function ListUser(props: any) {

    const [res, setRes] = useState<Array<any>>();

    const listar = async (value: any) => {
        if (value) {
            $('#tabelaListar').removeClass('d-none');
            await listUser();
        } else {
            $('#tabelaListar').addClass('d-none');
            $('.columnData').remove()
        }
    }

    const editUser = async(id: any) => {
        alert("A FUNCÇÃO DE EDITAR USUÁRIO AINDA NÃO ESTÁ DISPONIVEL!!!");

    }
    const deleteUser = async(id:any) => {
        alert("A FUNCÇÃO DE DELETAR USUÁRIO AINDA NÃO ESTÁ DISPONIVEL!!!");
    }

    const listUser = async () => {

        try {
            const result = await user.listUser();
            if (result.status) {
                toast.success(`${result.message}`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
                await setRes(result.data as any);
                return result.data
            } else throw result.message;
        } catch (error: any) {
            toast.error(`${error.message}`, {
                className: 'toast-danger',
                theme: 'colored',
                position: 'top-center',
            });
        }
    }

    return (
        <>
            <div className="card" id="listar">
                <div className="card-body bg-dark">
                    <h5 className="card-title text-center">LISTA</h5><hr />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkCadastrar" onClick={(e: any) => { listar(e.target.checked) }} />
                        <label className="form-check-label">
                            Listar Usuários
                        </label>
                    </div>
                    <table className="table table-striped d-none" id="tabelaListar">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Celular</th>
                                <th scope="col"><i className="bi bi-gear-fill"></i></th>
                            </tr>
                        </thead>
                        <tbody id='addTbody'>
                            {
                                res?.map((e: any, id: number) => {
                                    return (
                                        <>
                                            <tr key={id}>
                                                <th scope="row">{e.id}</th>
                                                <td>{e.name}</td>
                                                <td>{e.celular}</td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="Basic example">
                                                        <button type="button" className="btn btn-primary" onClick={(a)=>editUser(e.id)}><i className="bi bi-pencil-fill"></i></button>
                                                        <button type="button" className="btn btn-danger" onClick={(a)=>deleteUser(e.id)}><i className="bi bi-trash3-fill"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}