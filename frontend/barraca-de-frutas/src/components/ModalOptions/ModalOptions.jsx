import { ModalDelete } from '../ModalDelete/ModalDelete'
import { useState } from 'react'
import './modalOptions.css'

export function ModalOptions({isOpen, setOpen, idFruit}){

    const [modalDelete, setModalDelete] = useState(false)

    const openModalDelete = () =>{
        setModalDelete(!modalDelete)
    }

    var clicks = 0

    var fora = false
    var dentro = false
    function add(){
        clicks ++
        if(clicks > 1){
            setOpen(false)
        }
    }



    function none(){
        clicks = 0
        setOpen(true)
    }
    

    if(isOpen){
        return(
            <div className='ModalOptions-container' onClick={add}>
                <div className='ModalOptions-modal' onClick={none}>
                    <div className='ModalOptions-text'>
                        <div className='ModalOptions-edit'>
                            <a href={`/editar-fruta/${idFruit}`}>
                                <img src={require("../../assets/edit.png")} alt="edit"/>
                                Editar Fruta
                            </a>
                        </div>
                        <div className='ModalOptions-delete'>
                            <button onClick={()=>openModalDelete()}>
                                <img src={require("../../assets/delete.png")} alt="edit"/>
                                Excluir Fruta
                            </button>
                        </div>
                    </div>
                </div>
                <ModalDelete isOpen={modalDelete} setOpen={setModalDelete} idFruit={idFruit}/>
            </div>
        )
    }else{
        return(<></>)
    }

}