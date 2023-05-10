import React from "react";
import { IPropsTodo, ITodo } from "../interfaces/interface";

export default function EpisodeList({ todo, setTodo }: IPropsTodo) {
  const completeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todo];
    newTodo[index].complete = !newTodo[index].complete;
    setTodo(newTodo);
  };

  const removeTodo = (index: number) => {
    const newTodo: ITodo[] = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <>
      {todo.map((item: ITodo, index: number) => {
        return (
          <React.Fragment key={index}>
            <div
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
            >
              {item.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {item.complete ? "inComplete" : "complete"}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              X
            </button>
          </React.Fragment>
        );
      })}
    </>
  );
}
