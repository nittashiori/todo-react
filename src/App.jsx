import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompletedTodos, setIncompletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompletedTodos, todoText];
    // 関数を更新
    setIncompletedTodos(newTodos);
    // input内のテキストを初期化
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompletedTodos];
    newTodos.splice(index, 1);
    // 関数を更新
    setIncompletedTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompletedTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了TODOに追加
    const newCompleteTodos = [...completedTodos, incompletedTodos[index]];
    // 関数を更新
    setIncompletedTodos(newIncompleteTodos);
    setCompletedTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newComplateTodos = [...completedTodos];
    newComplateTodos.splice(index, 1);
    const newIncompleteTodos = [...incompletedTodos, completedTodos[index]];
    setCompletedTodos(newComplateTodos);
    setIncompletedTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompletedTodos.length >= 5}
      />
      {incompletedTodos.length >= 5 && (
        <p className="alert">登録できるtodoは5個までです。消化してください。</p>
      )}
      <IncompleteTodos
        todos={incompletedTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completedTodos} onClickBack={onClickBack} />
    </>
  );
};
