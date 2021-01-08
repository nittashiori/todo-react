import React from "react";

const incompleteArea = {
  background: "#2a2a2a",
  boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.3) inset",
  width: "400px",
  minHeight: "200px",
  padding: "16px",
  margin: "8px",
  borderRadius: "4px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div style={incompleteArea}>
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
