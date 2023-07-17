import { RedButton } from '../../components/RedButton/RedButton'
import './registerFruit.css'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

export function RegisterFruit(){

    const [redirect, setRedirect] = useState(false) //usado para redirecionar
    const [nameFruit, setNameFruit] = useState() //usado para passar parâmetro

    const saveOnLocalStorage = (e) =>{
        e.preventDefault()  //evita comportamento padrão de form
        var lastIndex = localStorage.getItem('lastIndex')   //grava valor de índice
        var index   //índice a ser salvo
        //verifico se já existe algum índice salvo
        if(lastIndex == null){
            index = 1
        }else{
            index = parseInt(lastIndex) + 1
        }
        //pega dados do form
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        var dataToSave = {
            "name": data.name,
            "price": data.price,
            "quantity": data.quantity
        }
        //salvo dados no localStorage e passo parâmetro pra nova rota
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
                        <input pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+" maxLength="26" required name = "name" placeholder='Nome da fruta'></input><br/>
                    </div>
                    <div className='RegisterFruit-inputPrice'>
                        <div className='RegisterFruit-inputPriceImage'>
                            <img src={require("../../assets/price.png")} alt="x"/>
                        </div>
                        <input pattern="[0-9]+(,[0-9]+)?" required name = "price" placeholder='Preço do Kilo'></input><br/>
                    </div>
                    <div className='RegisterFruit-inputQuantity'>
                        <div className='RegisterFruit-inputQuantityImage'>
                            <img src={require("../../assets/quantity.png")} alt="x"/>
                        </div>
                        <input pattern="[0-9]+" required name = "quantity" placeholder='Quantidade no estoque'></input><br/>
                    </div>
                    <RedButton type="submit">Cadastrar Fruta</RedButton>
                </form>
            </div>
            { redirect === true ? <Navigate to = {`/sucesso-cadastro/${nameFruit}`}/> : ""}

        </>
    )
}