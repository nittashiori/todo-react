import React from "react";

const style = {
  background: "#2a2a2a",
  boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.3) inset",
  width: "400px",
  height: "30px",
  padding: "16px",
  margin: "8px",
  borderRadius: "4px"
};
const buttonStyle = {
  margin: "0 4px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <>
      <div style={style}>
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button style={buttonStyle} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
