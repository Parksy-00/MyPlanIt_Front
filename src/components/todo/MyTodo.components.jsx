import axios from "axios";
import { Card, Checkbox } from "antd";

function MyTodo({
  todo,
  accessToken,
  updateMy,
  setUpdateMy,
  edit,
  delay,
  setDelay,
}) {
  const isChecked = todo["finish_flag"];
  const selected = delay.includes(todo["id"]);
  const checkMyTodo = async (todo) => {
    try {
      await axios
        .post(
          `https://myplanit.link/todos/my/${todo["id"]}/check`,
          { token: `Bearer ${accessToken}` },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          setUpdateMy(!updateMy);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const selectTodo = (item) => {
    if (selected) {
      setDelay(delay.filter((i) => i !== item["id"]));
    } else {
      setDelay([...delay, item["id"]]);
    }
  };
  return (
    <Card
      style={{
        borderRadius: 5,
        width: 327,
        marginTop: 9,
        height: 52,
      }}
    >
      <Checkbox
        style={{
          marginLeft: 0,
          marginTop: 14,
        }}
        disabled={isChecked && edit}
        checked={edit? selected || isChecked: isChecked}
        onChange={() => (edit? selectTodo(todo): checkMyTodo(todo))}
      >
        <span style={{ marginLeft: 5, fontFamily: "Pretendard-Medium" }}>
          {todo.todo_name}
        </span>
      </Checkbox>
    </Card>
  );
}

export default MyTodo;
