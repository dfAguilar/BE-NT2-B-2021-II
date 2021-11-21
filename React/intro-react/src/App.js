import logo from './logo.svg';
import './App.css';

import Saludo from "./components/saludo";
import { useState } from 'react';

function App() {

  // Asi declaramos un estado dentro de mi componente
  const [text, setTexto] =  useState('Hello world!')

  // console.log("Este es el useState => ", useState('texto'))
  const [persona, setPersona] = useState({
    nombre: 'Daniel',
    edad: 30
  })

  const cambioNombre = () => {
    const nuevoNombre = prompt('Cual es tu nombre?')
    if (nuevoNombre){
      // const aux = {
      //   nombre: nuevoNombre,
      //   edad: persona.edad
      // }
      // setPersona(aux)


      setPersona({...persona, nombre: nuevoNombre})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo persona={persona} otro={'hola'} otro_elemento={false} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludo />

        <br />
        <button onClick={cambioNombre}>Cambiar nombre</button>
      </header>
    </div>
  );
}

export default App;
