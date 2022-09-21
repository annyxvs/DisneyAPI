import { useEffect, useState } from 'react'
import { api } from './api/api'
import Loading from './assets/loading-light.gif'
import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

import * as S from './style'

function App() {

  const [characters,setCharacters] = useState([])
  const [loading,setLoading] = useState(false)
  const [count,setCount] = useState(1)
  
  const getCharacters = async (id) =>{
    setLoading(true)
    let char = await api.getAll(id);
    setTimeout(() =>{
      setLoading(false)
    },1200)
    setCharacters(char.data)
  }

  useEffect(() => {
    getCharacters(count);
  },[])

  if(count <= 0){
    setCount(1)
  }else if(count >= 149){
    setCount(149)
  }

  const pageN = () =>{
    setCount(count + 1)
    getCharacters(count);
  } 
  
  const pageA = async () =>{
    setCount(count - 1)
    await getCharacters(count);
  } 

  const back = () =>{
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
  }

  return (
    <S.App>
      <S.Header>
        <Button title='Mostrar anteriores' func={pageA}/>
        <Button title='Mostrar proximos' func={pageN}/>
      </S.Header>

      {loading && <S.Loading> <img src={Loading} alt="disney loading..." /> </S.Loading> }

      {!loading && <S.Main> {characters.map((e,i) => (<Card character={e} key={i}/> ))} </S.Main>}
    
    <Button title=' ↑' func={back} float='float'/>
    </S.App>
  )
}

export default App
