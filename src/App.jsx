import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import './App.css'
import Carrosel from 'react-elastic-carousel'


export default function App() {

    const [item, setItem] = useState([])

    const pegarDados = async () =>{
      const Dados = await axios.get("https://rickandmortyapi.com/api/character")
        
      setItem(Dados.data.results)
      
    }
    useEffect(()=>{
      pegarDados()
    },[])   

    const quantidade = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2},
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4},
        { width: 1450, itemsToShow: 2 },
        { width: 1750, itemsToShow: 6 },
      ]

  return (
    <>
    <div class="box">
      <Carrosel breakPoints={quantidade}>
      {item.map((item)=>(
          <div>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.species}</p>
          </div>
      ))}
      </Carrosel>
    </div>
    </>
  )
}
