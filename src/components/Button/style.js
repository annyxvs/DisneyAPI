import styled from 'styled-components'

export const Botao = styled.button`
    border: none;

    text-transform: uppercase;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;

    height: 4.5vh;

    background-color: #27547F;
    padding: 1rem;
    border-radius: 0.5rem;

    margin: 0.9rem;

    transition: 1s;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        border: 2px #27547F solid;

        color: #27547F;
        transform: scale(1.15);

    }

    display: flex;
    align-items: center;
    justify-content: center;
`