import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

export type ToDo = {
  id: string;
  title: string
  completed: boolean
}

const initialTodos: ToDo[] = [
]

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]")
  const [todos, setTodos] = useState(storedTodos)

  console.log("rendering now");
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log("useEffect runs now");
    
  },[todos])
  // second argument for useEffect => dependency array

  return (
    <div>
      {/* <marquee direction="ltr">👾🍀</marquee> */}
      <AddTodo setTodos={setTodos}/>
      <TodoList todos={todos} />
    </div>
  )
}

export default App

