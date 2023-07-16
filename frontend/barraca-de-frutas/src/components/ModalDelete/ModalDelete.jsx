import { RedButton } from '../RedButton/RedButton'
import { WhiteButton } from '../WhiteButton/WhiteButton'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import './modalDelete.css'

export function ModalDelete({isOpen, setOpen, idFruit}){

    const [redirect, setRedirect] = useState(false)

    const closeModal = () =>{
        setOpen(false)
    }

    const deleteFruit = () =>{
        localStorage.removeItem(idFruit)
        setOpen(false)
        setRedirect(true)
    }

    if(isOpen){
        return(
            <div className='ModalDelete-container'>
                <div className='ModalDelete-modal'>
                    <div className='ModalDelete-title'>Excluir Fruta</div>
                    <div className='ModalDelete-description'>
                        Tem certeza que quer exlcuir essa fruta?<br/>
                        Você perderá todas as informações cadastradas sobre ela.

                        
                    </div>
                    <div className='ModalDelete-buttons'>
                        <div className='ModalDelete-no'><WhiteButton onClick={closeModal}>Não</WhiteButton></div>
                        <div><RedButton onClick={deleteFruit} id="ModalDelete-delete">Sim, Excluir</RedButton></div>
                    </div>
                </div>
                { redirect === true ? <Navigate to = {`/`}/> : ""}
            </div>


        )
    }else{
        return(<></>)
    }
}