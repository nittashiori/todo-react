import React from "react";

const completeArea = {
  background: "#2a2a2a",
  boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.3) inset",
  width: "400px",
  minHeight: "200px",
  padding: "16px",
  margin: "8px",
  borderRadius: "4px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <>
      <div style={completeArea}>
        <p className="title">完了したTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
