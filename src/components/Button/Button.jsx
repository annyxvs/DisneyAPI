import {Botao } from './style'

export const Button = ({func, title}) =>{
    return(
        <Botao onClick={func}>{title}</Botao>
    )
}