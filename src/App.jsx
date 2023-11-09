import './App.css'
import {servicioCancionesAxios} from '../services/token'

import { useState,useEffect } from 'react'

function App() {

  const[estaCargando,setEstaCargando]=useState(true)
  const[datos,setDatos]=useState(null)

  useEffect(function(){
    servicioCancionesAxios()
    .then(function(respuesta){
        
    })
    .catch(function(respuestaError){
        console.log(respuestaError)
    })
},[])

  

  return (
    
    <>
    
      <h1>hola</h1>
    
    </>
  )
}

export default App
