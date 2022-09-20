import * as S from "./style"

export const Card = ({character}) =>{
    return(
        <S.Card>
            <S.Content>
                <h1>{character.name}</h1>
                <img src={character.imageUrl} alt="" />
            </S.Content>
            <span>{character.films[0]}</span>
        </S.Card>
    )
}