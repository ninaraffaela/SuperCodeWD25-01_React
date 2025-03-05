// ! define the type for the props
type TodoItemProps = {
  toDoName: string;
}

const TodoItem = (props: TodoItemProps) => {
  return (
    <div>
      <li>{props.toDoName}</li>
    </div>
  )
}

export default TodoItem
