import './App.css'
import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
  })
  // // return (<h1>Hell</h1>)
  return (<div><CreateTodo />
    <Todos todos={todos}></Todos>
    </div>);
}

export default App
