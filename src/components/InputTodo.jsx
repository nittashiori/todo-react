import React from "react";

const inputArea = {
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
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div style={inputArea}>
        <input
          disabled={disabled}
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} style={buttonStyle} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
