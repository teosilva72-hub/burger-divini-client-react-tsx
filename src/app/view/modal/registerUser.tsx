import React from "react";

export default function ModalRegisterUser(props: any) {

    return (
        <>
            <div className="modal fade" id="modalRegisterUser" tabIndex={-1} role="dialog" aria-labelledby="modalRegisterUser" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">{props.closed}</button>
                            <button type="button" className="btn btn-primary">{props.submit}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}