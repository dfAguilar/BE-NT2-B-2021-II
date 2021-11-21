import './App.css';
import { useState } from 'react';

import Button from "./components/Button";
import Counters from "./components/Counters";
import Todo from "./components/Todo";

function App() {


  const [todos, updateTodos] = useState([])


  const addTodo = () => {
    let nombreTarea = prompt('Nombre Tarea')
   
    if (nombreTarea){

      const todo = {
        id : new Date().getTime(),
        title: nombreTarea,
        checked: false
      }

      console.log('nuevo TODO', todo)

      updateTodos([...todos, todo])
    }    
      
  }


  const clickCheckbox = (todo) => {

    console.log('Este es el objeto que voy a tratar', todo)
    todo = {...todo, checked: !todo.checked}
    console.log('todo cambiado: ', todo)
    const newArray = todos.map(item => (item.id === todo.id) ? todo: item)
    updateTodos(newArray)
  }

  const callbackBorrar = (todo) => {
    const newArray = todos.filter(item => item.id !== todo.id)
    updateTodos(newArray)
  }

  return (
    <div className="container center">
      <h1 className="center title">TODO App</h1>
      <Counters todos={todos} activo={true} />
      {/* <button className="button center" onClick={addTodo}>Agregar Tarea</button> */}
      <Button className={"button center"} onClick={addTodo} title={'Agregar Tarea'} hola={true} />
      <ul id="todo-list" className="todo-list">
        {
          todos.map(item => (<Todo key={item.id} todo={item} callbackBorrar={callbackBorrar} clickCheckbox={clickCheckbox} />))
        }
      </ul>
    </div>
  );
}

export default App;
