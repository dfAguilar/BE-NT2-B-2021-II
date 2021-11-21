import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

import Counter from "./components/Contador";


function App() {

  const [nombre, setNombre] = useState('NT2 Belgrano')
  const [edad, setEdad] = useState(30)

  const [running, setRunning] = useState(true)

  useEffect(()=> {
    // Este es el equivalente al componentDidMount
    console.log('Hola mundo! Aqui me ejecuto la 1era vez que este componente esta visible')


    return () =>{
      // Este es el equivalente al componentWillDestroy
      console.log('Aqui Dejo de estar VISIBLE')
    }
  }, [])

  useEffect(()=>{
    console.log('Aqui detecto cuando cambia el estado `nombre`:', nombre)
  }, [nombre])

  useEffect(()=>{
    console.log('Aqui detecto cuando cambia el estado `edad`:', edad)
  }, [edad])

  useEffect(()=>{
    console.log('Aqui detecto cuando cambia el estado `edad` y/o `nombre`:', edad, nombre)
  }, [edad, nombre])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {nombre}, tengo {edad} años!!
        </p>

        <Counter running={running} />
        {/* <button type="button" onClick={()=> setNombre('NT2 Tigre')}> Cambiar nombre </button>
        <button type="button" onClick={()=> setEdad(20)}> Cambiar edad </button> */}

        <button type="button" onClick={() => setRunning(prev => !prev)}> {(running)? ' STOP ' : ' PLAY '} </button>

      </header>
    </div>
  );
}

export default App;
