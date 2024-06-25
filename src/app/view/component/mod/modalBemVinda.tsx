import logo from '../../../assets/img/logotipo.jpg'
import wpp from '../../../assets/img/whatsapp.png'
import locale from '../../../assets/locale/Pt_BR.json'

export default function ModalBemVinda(props: any) {

    const linkWpp = () => {
        document.getElementById("linkWpp")?.addEventListener('click', e=>{
            window.open(locale.contato.whatsapp, '_blank');
        })
    }

    return (
        <>
            <div className="modal fade" id="staticBackdrop" 
                data-bs-backdrop="static" data-bs-keyboard="false" 
                tabIndex={-1} aria-labelledby="staticBackdropLabel" 
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" 
                                id="staticBackdropLabel">{props.title}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <props.component logoTipo={logo}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{props.close}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}