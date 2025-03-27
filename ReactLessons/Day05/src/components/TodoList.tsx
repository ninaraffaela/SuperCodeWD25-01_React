import { ToDo } from "../App";

//  here we define the attributes of the component
type TodoListProps = {
  todos: ToDo[];
};

function TodoList(props: TodoListProps) {
  const {todos} = props;


  return (
    <ul>
      {props.todos.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
