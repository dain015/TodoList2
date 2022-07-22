import './App.css'
import  { useEffect, useState } from 'react'
import { VscAdd } from "react-icons/vsc"
import axios from 'axios'
import Template from './components/Template'
import PrintInsert from './components/PrintInsert'
import PrintList from './components/PrintList'
//  VscEdit, VscTrash

const todoService = {
  getTodoList: async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return result
  }
}
let nextId = 3;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [inputToggle, setInputToggle] = useState(false)
  const [todos, setTodos] = useState([]);
  
  const fetchTodos = async () => {
    const result = await todoService.getTodoList()
    setTodos(result.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const oninputToggle = () => {
    setInputToggle(prev => !prev)
  }
  const onInsertTodo = title => {
    if(title === "") {
      return alert("할 일을 입력해주세요.")
    } else {
      const todo = {
        id: nextId,
        title,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  }


  return (
    <Template>
      <PrintList todos={ todos } onCheckToggle={onCheckToggle} oninputToggle={oninputToggle} onChangeSelectedTodo={onChangeSelectedTodo}/>
      <div className='add' onClick={oninputToggle}>
        <VscAdd />
      </div>
      {inputToggle && <PrintInsert oninputToggle={oninputToggle} selectedTodo={selectedTodo} onInsertTodo={onInsertTodo} />}
    </Template>
  );
}

export default App;
