import { useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import axios from "axios";
import constants from "../../constants";

function PlanTodo({
  item,
  accessToken,
  update,
  setUpdate,
  edit,
  delay,
  setDelay,
}) {
  const navigate = useNavigate();
  const todoName = item["plan_todo"];
  const isChecked = item["finish_flag"];
  const selected = delay.includes(item["id"]);
  const checkTodo = async (item) => {
    axios
      .post(
        `https://myplanit.link/todos/plan/${item["plan_id"]}/${item["id"]}/check`,
        { token: `Bearer ${accessToken}` },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        setUpdate(!update);
      });
  };
  
  const selectTodo = (item) => {
    if (selected) {
      setDelay(delay.filter((i) => i !== item["id"]));
    } else {
      setDelay([...delay, item["id"]]);
    }
  };

  const detailIcon = (
    <img
      src={constants.DETAIL_ICON}
      style={{
        width: 6,
        marginLeft: "auto",
      }}
    />
  );

  return (
    <Checkbox
      disabled={isChecked && edit}
      checked={edit? selected || isChecked: isChecked}
      onChange={() => (edit ? selectTodo(item) : checkTodo(item))}
      style={{
        marginLeft: 0,
        marginTop: 14,
      }}
    >
      <span
        style={{
          display: "flex",
          width: "255px",
        }}
      >
        <span style={{ fontFamily: "Pretendard-Medium" }}>{todoName}</span>
        <span
          onClick={() => navigate(`/todo/detail/${item["todo_id"]}`)}
          style={{ marginLeft: "auto" }}
        >
          {detailIcon}
        </span>
      </span>
    </Checkbox>
  );
}

export default PlanTodo;
