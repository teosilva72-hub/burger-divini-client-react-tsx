import $ from 'jquery';
import user from '../../api/user';
import { useState } from "react";
import { toast } from 'react-toastify';

export default function ListUser(props: any) {
    
    const listar = async(value:any)=>{
        if(value){
            await listUser();
            $('#tabelaListar').removeClass('d-none');
        }else {
            $('#tabelaListar').addClass('d-none');
            $('.columnData').remove()
        }
    }
    
    const listUser = async()=>{
        
        try{
            const result = await user.listUser();
            if(result.status){
                for(let list of result.data){
                    $('#addTbody').append(`
                        <tr class='columnData'>
                            <th scope="row">${list.id}</th>
                            <td>${list.name}</td>
                            <td>${list.celular}</td>
                            <td>${list.perfil}</td>
                        </tr>
                    `);
                }
                toast.success(`${result.message}`, {
                    className: 'toast-danger',
                    theme: 'colored',
                    position: 'top-center',
                });
            }else  throw result.message;
        }catch(error:any){
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
                <div className="card-body">
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
                                <th scope="col">Perfil</th>
                            </tr>
                        </thead>
                        <tbody id='addTbody'>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}