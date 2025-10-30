import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loading from './components/Loading'
import ListCharacters from './components/ListCharacters'

function App() {
  const [characters, setCharacters] = useState(null);
  
  const requestApi = async () => {
    const api= await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    console.log(characterApi);
    setCharacters(characterApi);
  }

  const requestApi2 = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(respuesta => {
        return respuesta.json();
      })
      .then(resultado => {
        setCharacters(resultado);
      })
      .catch(error => {
        console.log(error);
      })
  } 

  const requestApi3 = async ()=>{
        try{
            console.log('nueva llamada a la API')
            const res= await fetch("https://rickandmortyapi.com/api/character");
            if(!res.ok) throw Error('Error al consumir la api')
            const data = await res.json();
            setCharacters(data);
        }catch(error){
            console.log(error.message);
        }finally{
            console.log("Siempre se jecuta");
        }

    };



  return (
    <>
      <div className='App'>
        <header className="App-header">
          <h1 className='title'>Ricky & Morty</h1>
          {characters ? (
            //console.log("Pintamos los charactereres")
            <ListCharacters list={characters.results}/>
          ) : (
            <button onClick={requestApi3} className="btn-search">Buscar personajes en los multiversos</button>
            //<Loading/>
          )}
        </header>
      </div>
    </>
  )
}

export default App
