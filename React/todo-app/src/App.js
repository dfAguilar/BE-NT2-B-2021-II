import './App.css';
import { useState } from 'react';

function App() {


  const [todos, updateTodos] = useState([
    {
      id: 1,
      title: 'tarea 3',
      checked: false
    },
    {
      id: 2,
      title: 'tarea 2',
      checked: false
    }
  ])


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

  return (
    <div className="container center">
      <h1 className="center title">TODO App</h1>
      <div className="flow-right controls">
        <span>Item count: <span id="item-count">0</span></span>
        <span>Unchecked count: <span id="unchecked-count">0</span></span>
      </div>
      <button className="button center" onClick={addTodo}>Agregar Tarea</button>
      <ul id="todo-list" className="todo-list">

        {
          todos.map(item => {
            return (
              <li key={item.id} className="todo-container">
                <input type="checkbox" checked={item.checked} className="todo-checkbox" />
                <span className="todo-text">{item.title}</span>
                {/* <button className="todo-delete"> X </button> */}
              </li>
            )
          })
        }


      </ul>
    </div>
  );
}

export default App;
