import React from "react";
import "./App.css";
import { Parent, Child } from "./context/todoContext";
import { ITodo } from "./interfaces/interface";
import { useNavigate } from "react-router-dom";
import { FormElem } from "./types/types";

const EpisodeList = React.lazy(() => import("./components/TodoList"));

function App() {
  const [value, setValue] = React.useState<string>("");
  const [todo, setTodo] = React.useState<ITodo[]>([]);
  const navigation = useNavigate();
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todo, { text, complete: false }];
    setTodo(newTodo);
  };

  return (
    <>
      <Parent>
        <button onClick={() => navigation("/rick")}>Rick Page</button>
        <Child />
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setTodo([])}>Delete Todo</button>
        <React.Suspense fallback={<div>...loading</div>}>
          <section>
            <EpisodeList todo={todo} setTodo={setTodo} />
          </section>
        </React.Suspense>
      </Parent>
    </>
  );
}

export default App;
