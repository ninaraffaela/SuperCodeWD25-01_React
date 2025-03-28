import { useState } from "react";
import { ToDo } from "../App";

type AddTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

function AddTodo(props: AddTodoProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.MouseEventHandler = (e) => {
    e.preventDefault();
    const newTodo: ToDo = {
      id: crypto.randomUUID(),
      title: inputValue,
      completed: false,
    };
    console.log(newTodo);

    // props.setTodos((oldTodos) => oldTodos.concat(newTodo))
    props.setTodos((oldTodos) => [newTodo, ...oldTodos])
  
    };

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />

      <button disabled={inputValue.length === 0} onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default AddTodo;
