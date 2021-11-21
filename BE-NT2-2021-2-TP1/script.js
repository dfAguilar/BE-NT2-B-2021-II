const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  let totalTareas = 0
  let totalTareasPendientes = 0
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  function crearTarea(name){
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = classNames.TODO_CHECKBOX

    const span = document.createElement('span')
    span.className = classNames.TODO_TEXT
    span.innerHTML = name

    const eliminar = document.createElement('button')
    eliminar.className = classNames.TODO_DELETE
    eliminar.innerHTML = ' X '

    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(eliminar)


    console.log(li)

    return li
  }

  function renderizarContadores(){
    itemCountSpan.innerHTML = totalTareas
    uncheckedCountSpan.innerHTML = totalTareasPendientes
  }

  function addTodo() {
    let nombreTarea = prompt('Nombre Tarea')

    console.log(nombreTarea)
    if (nombreTarea){
      const todo = crearTarea(nombreTarea)

      if (todo){

        totalTareas++
        totalTareasPendientes++

        list.appendChild(todo)
        renderizarContadores()
        
      }


      
    }
  }