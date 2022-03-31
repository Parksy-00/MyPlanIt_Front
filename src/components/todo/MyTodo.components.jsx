import axios from "axios";
import { Checkbox } from "antd";
import styled from "styled-components";

function MyTodo({
  todo,
  updateMy,
  setUpdateMy,
  edit,
  delay,
  setDelay,
}) {
  const accessToken = sessionStorage.getItem("access");
  const isChecked = todo["finish_flag"];
  const selected = delay.includes(todo["id"]);
  const checkMyTodo = async (todo) => {
    try {
      await axios
        .post(
          `https://myplanit.link/todos/my/${todo["id"]}/check`,
          {},
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
    <TodoCard onClick={() => edit && selectTodo(todo)} selected={selected}>
      <StyledCheckbox
        disabled={isChecked && edit}
        checked={isChecked}
        onChange={() => !edit && checkMyTodo(todo)}
      />
      <span
        style={{
          width: "255px",
          margin: "0px 8px",
          fontSize: "14px",
          opacity: isChecked && edit ? "0.4" : 1,
          fontFamily: "PretendardMedium",
        }}
        onClick={() => !edit && checkMyTodo(todo)}
      >
        {todo.todo_name}
      </span>
    </TodoCard>
  );
}

export default MyTodo;

const TodoCard = styled.div`
  box-sizing: border-box;
  border: 1.5px solid ${(props) => (props.selected ? "#8977f7" : "#f0f0f0")};
  padding: 10px 20px;
  border-radius: 4px;
  width: 327px;
  height: 52px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;
const StyledCheckbox = styled(Checkbox)`
  align-items: center;

  .ant-checkbox {
    top: 0;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${(props) => (props.checked ? "#8977f7" : "#FFFFFF")};
    border-color: #8977f7;
  }

  .ant-checkbox-checked::after {
    border-color: #8977f7;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #8977f7;
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #e1dcfe;
    border-color: #e1dcfe !important;
  }

  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: #ffffff;
  }
`;
