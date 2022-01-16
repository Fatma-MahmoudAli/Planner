import React , {useState , useEffect} from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Toheader from './Toheader';
const Todo = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState(initialState);
  const [editTodo , setEditTodo] = useState(null);

  useEffect ( () => {
    localStorage.setItem ("todos" , JSON.stringify(todos))
  } , [todos])

  const removeAll = () => {
    document.querySelector (".LIST").innerHTML="";
  }
  return (
    <div className="contaainer">
      <div className="app-wrapper">
        <div>
          <Toheader/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          
          />
        </div>
        <div className="LIST">
          <TodoList
           todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo} />
        </div>
        <div className="button-cont" align="center" >
          <a className="remove-btn" onClick={()=> removeAll()}> Remove All</a>
        </div>
      </div>
    </div>
  );
}

export default Todo;