import Button from "../Button";

export default ({todo, callbackBorrar, clickCheckbox}) => {

    // console.log('Aqui tengo el ID:', todo)
    return (
        <li className="todo-container">
            <input type="checkbox" checked={todo.checked} onChange={() => clickCheckbox(todo)} className="todo-checkbox" />
            <span className="todo-text">{todo.title}</span>
            {/* <button className="todo-delete"> X </button> */}
            <Button className={"todo-delete"} onClick={()=> callbackBorrar(todo) } title={' Eliminar '} />
        </li>
    )
}