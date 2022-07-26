import { useEffect, useState } from 'react';
import { VscAdd } from "react-icons/vsc"
import './App.css';
import Template from './component/Template';
import Insert from './component/Insert';
import List from './component/List'


function App() {
  const [todos, setTodos] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false)
  async function getData() {
    await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }
  
  useEffect(() => {
    getData()
  }, [])

  function deletedata(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
  }

  function createdata(title) {
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos`, {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        title,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos([...todos, json]))
  }

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const onRemove = id => {
    deletedata(id)
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  const onCreate = title => {
    if(title === ""){
      return alert("할 일을 입력해주세요")
    } else {
      createdata(title)
    }
  }

  return (
    <div className="App">
      <Template>
        <div className='add' onClick={onInsertToggle}>
          <VscAdd />
        </div>
        <List onRemove={onRemove} todos={todos} onCheckToggle={onCheckToggle}></List>
        {insertToggle && <Insert onCreate={onCreate} onInsertToggle={onInsertToggle}></Insert>}
      </Template>
    </div>
  );
}

export default App;
