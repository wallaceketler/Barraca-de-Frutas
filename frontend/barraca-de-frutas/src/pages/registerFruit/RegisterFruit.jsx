import { RedButton } from '../../components/RedButton/RedButton'
import './registerFruit.css'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

export function RegisterFruit(){

    const [redirect, setRedirect] = useState(false)
    const [nameFruit, setNameFruit] = useState() //usado para passar parâmetro

    const saveOnLocalStorage = (e) =>{
        e.preventDefault()
        var lastIndex = localStorage.getItem('lastIndex')   //grava valor de índice
        var index
        if(lastIndex == null){
            index = 1
        }else{
            index = parseInt(lastIndex) + 1
        }
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        var dataToSave = {
            "name": data.name,
            "price": data.price,
            "quantity": data.quantity
        }
        localStorage.setItem(index,JSON.stringify(dataToSave))
        localStorage.setItem("lastIndex", index)
        setNameFruit(data.name)
        setRedirect(true)
        
    }

    return(
        <>
            <div className='RegisterFruit-header'>
                <div className='RegisterFruit-headerText'>Cadastrar Fruta</div>
                <div className='RegisterFruit-headerX'><a href='/'><img src={require("../../assets/x.png")} alt="x"/></a></div>
            </div>
            <div className='RegisterFruit-form'>
                <form onSubmit={saveOnLocalStorage}>
                    <div className='RegisterFruit-inputName'>
                        <div className='RegisterFruit-inputNameImage'>
                            <img src={require("../../assets/name.png")} alt="x"/>
                        </div>
                        <input maxLength="10" required name = "name" placeholder='Nome da fruta'></input><br/>
                    </div>
                    <div className='RegisterFruit-inputPrice'>
                        <div className='RegisterFruit-inputPriceImage'>
                            <img src={require("../../assets/price.png")} alt="x"/>
                        </div>
                        <input required name = "price" placeholder='Preço do Kilo'></input><br/>
                    </div>
                    <div className='RegisterFruit-inputQuantity'>
                        <div className='RegisterFruit-inputQuantityImage'>
                            <img src={require("../../assets/quantity.png")} alt="x"/>
                        </div>
                        <input required name = "quantity" placeholder='Quantidade no estoque'></input><br/>
                    </div>
                    <RedButton type="submit">Cadastrar Fruta</RedButton>
                </form>
            </div>
            { redirect === true ? <Navigate to = {`/sucesso-cadastro/${nameFruit}`}/> : ""}

        </>
    )
}