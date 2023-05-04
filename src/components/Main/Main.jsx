import { useState } from "react";

function Main() {
  const todoList = ["სამსახური", "სკოლა", "ვარჯიში", "ლექცია"];

  return (
    <div>
      <ul>
        {todoList.map(function (todo) {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Main;
