import { useState } from "react";

export const InputTodo = (props) => {
  //const [todoText, onChange, onClick] = props;
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力する"
          value={props.todoText}
          onChange={props.onChange}
        />
        <button onClick={props.onClick}>追加</button>
      </div>
    </>
  );
};
