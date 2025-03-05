import TodoItem from "../TodoItem/TodoItem";
import "./ToDoList.css";

// !Define the type "ToDoListItem" for the array "todoItemArr"
type ToDoListItem = {
    todoName: string;
};

// ! Write an array "todoItemArr" of the type "ToDoListItem"
const todoItemArr: ToDoListItem[] = [
    {
        todoName: "Buy Groceries"
    },
    {
        todoName: "Send Email"
    },
    {
        todoName: "Finish Assignment"
    },
    {
        todoName: "Write Blog"
    },
    {
        todoName: "Bake Cake"
    },
]


const ToDoList = () => {
  return (
    <div>
        <h1>ToDos</h1>
        <main>
            {todoItemArr.map((singleToDo) => (
            <TodoItem toDoName = {singleToDo.todoName}/>
        ))}
        </main>

        
    
    </div>
  )
}

export default ToDoList
