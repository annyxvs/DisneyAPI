import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        height: 30vh;
        max-width: 16vw;
    }

    @media (max-width: 1100px) {
    &{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        }
    & img{
            min-width: 25vw;
        }
    }

    @media (max-width: 860px) {
        &{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        & img{
            min-width: 45vw;
        }
    }
    @media (max-width: 375px) {
        &{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        & img{
            min-width: 60vw;
        }
    }
`

export const Card = styled.div`
    overflow: hidden;
    margin: 1rem;
    padding: 0.5rem;
    max-width: 40vw;
    min-height: 31vh;


    background: rgba( 11, 84, 131, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media (max-width: 860px) {
        & {
            min-width: 80vw;
        }
    }

`