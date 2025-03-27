import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

export type ToDo = {
  title: string
  completed: boolean
}

const todos: ToDo[] = [
  {title: "Rasen maehen", completed: false},
  {title: "Pizza erwaehnen", completed: false},
  {title: "repeat destructuring", completed: true},
]

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  )
}

export default App

