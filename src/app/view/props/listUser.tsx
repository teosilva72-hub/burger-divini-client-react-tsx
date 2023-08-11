import $ from 'jquery';

export default function ListUser(props: any) {
    
    const listar = async(value:any)=>{
        if(value) $('#tabelaListar').removeClass('d-none');
        else $('#tabelaListar').addClass('d-none');
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
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}