import { useState } from "react";
import MyTodo from "./MyTodo.components";
import constants from "../../constants";
import NewMyTodo from "./NewMyTodo.components";

function TodoMy({
  myTodoData,
  accessToken,
  updateMy,
  setUpdateMy,
  selectedDate,
  edit,
  delay,
  setDelay
}) {
  const contentsStyle = {
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "110px",
    marginBottom: "90px",
    overflowY: "scroll",
    fontFamily: "Pretendard-SemiBold",
  };
  const todoExist = myTodoData?.length;
  const noTodoImg = (
    <img
      src={constants.NO_TODO_IMG}
      style={{ width: "80%", marginTop: "140px" }}
    />
  );

  return (
    <div style={contentsStyle}>
      {todoExist
        ? myTodoData.map((todo, i) => (
            <MyTodo
              accessToken={accessToken}
              updateMy={updateMy}
              setUpdateMy={setUpdateMy}
              key={i}
              todo={todo}
              edit={edit}
              delay={delay}
              setDelay={setDelay}
            />
          ))
        : noTodoImg}

      <NewMyTodo
        selectedDate={selectedDate}
        accessToken={accessToken}
        updateMy={updateMy}
        setUpdateMy={setUpdateMy}
      />
    </div>
  );
}

export default TodoMy;
