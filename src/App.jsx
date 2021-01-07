import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <p>あああああ</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>いいいいい</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了したTODO</p>
        <ul>
          <li>
            <p>ううううう</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
