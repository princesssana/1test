import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function List(props) {
  return <div className="component-style">{props.list.todo}</div>;
}

function App() {
  const [todo, setTodo] = useState("");

  const [list, setList] = useState([
    { id: 1, todo: "잠자기" },
    { id: 2, todo: "밥먹기" },
  ]);

  const addTodoHandler = () => {
    const newList = {
      id: list.length + 1,
      todo: todo,
    };
    setList([...list, newList]);
  };

  return (
    // <div className="App">
    <div className="TextBox">
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button onClick={addTodoHandler}>추가하기</button>
      <h2>Todo List</h2>
      <div className="app-style">
        {list.map((list) => {
          return <List list={list} key={list.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
