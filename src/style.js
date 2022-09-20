import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Mukta', sans-serif;
    }
` 

export const App = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1125%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M712.49-31.62C587.81 46.61 657.38 480 431.25 485.65 205.11 491.3 17.2 297.81-131.24 295.25' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M713.67-106.07C613.99-67.71 679.49 218.59 456.28 234.9 233.06 251.21 73.2 346.26-58.51 346.9' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M725.44-8.1C586.78 7.84 500.83 315.07 270.53 315.52 40.23 315.97-62.19 139.51-184.38 136.32' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1219.08-81.17C1054.83-80.12 911.97 68.08 580.05 71.49 248.13 74.9 108.95 276.12-58.98 278.69' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1104.64-41.68C900.82-17.15 777.33 439.88 440.11 440.73 102.9 441.58-46.78 192.91-224.41 188.73' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1125'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 0.5rem;

    @media (max-width: 490px) {
        &{
            display: flex;
            flex-direction: column;
        }   
    }
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 860px) {
    &{
        display: grid;
        grid-template-columns: 1fr;
    }
}
`
export const Loading = styled.div`
    img{
        width: 40vw;
        height: 80vh;
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: contain;
    }
`
