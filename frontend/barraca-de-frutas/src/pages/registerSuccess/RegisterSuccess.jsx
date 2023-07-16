import { RedButton } from '../../components/RedButton/RedButton'
import './registerSuccess.css'
import { useParams } from 'react-router-dom'

export function RegisterSuccess(){

    //pega nome da fruta
    const {fruit} = useParams()
    return(
        <>
            <div className='registerSuccess-container'>
                <div className='registerSuccess-header'>
                    <a href="/"><img src={require("../../assets/x.png")} alt="x"/></a>
                </div>
                <div className='registerSuccess-image'>
                    <img src={require("../../assets/registersuccess.png")} alt="sucesso"/>
                </div>
                <div className='registerSuccess-text'>
                    <h3>Fruta cadastrada</h3>
                    <div className='registerSuccess-subtext'>Você cadastrou a fruta {fruit} com sucesso!</div>
                </div>
                <div className='registerSuccess-button'>
                    <RedButton href='/'>Voltar ao início</RedButton>
                </div>
            </div>
        </>
    )
}