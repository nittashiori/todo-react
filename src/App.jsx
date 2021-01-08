import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompletedTodos, setIncompletedTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completedTodos, setCompletedTodos] = useState(["ううううう"]);

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

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompletedTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completedTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
