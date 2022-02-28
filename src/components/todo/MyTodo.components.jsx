import axios from "axios";
import { Card, Checkbox } from "antd";
import styled from 'styled-components';

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
    <TodoCard>
      <StyledCheckbox
        disabled={isChecked && edit}
        checked={edit? selected || isChecked: isChecked}
        onChange={() => (edit? selectTodo(todo): checkMyTodo(todo))}
      >
        <span style={{ marginLeft: 5, fontFamily: "PretendardMedium" }}>
          {todo.todo_name}
        </span>
      </StyledCheckbox>
    </TodoCard>
  );
}

export default MyTodo;

const TodoCard = styled.div`
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  margin: 0;
  padding: 10px 20px;
  position: relative;
  border-radius: 5px;
  width: 327px;
  height: 52px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`

const StyledCheckbox = styled(Checkbox)`
  width: 300px;
  
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${props => props.checked? "#8977f7": "#FFFFFF"};
    border-color: #8977F7;
  }

  .ant-checkbox-checked::after {
    border-color: #8977F7;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #8977F7;
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #E1DCFE;
    border-color: #E1DCFE !important;
  }

  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: #FFFFFF;
  }
`