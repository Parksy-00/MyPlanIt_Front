import { useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import axios from "axios";
import constants from "../../constants";
import styled from "styled-components";

function PlanTodo({
  todo,
  update,
  setUpdate,
  edit,
  delay,
  setDelay,
}) {
  const navigate = useNavigate();
  const todoName = todo["plan_todo"];
  const isChecked = todo["finish_flag"];
  const selected = delay.includes(todo["id"]);
  const accessToken = sessionStorage.getItem("access")
  const checkTodo = async (todo) => {
    axios
      .post(
        `https://myplanit.link/todos/plan/${todo["plan_id"]}/${todo["id"]}/check`,
        {},
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

  const selectTodo = (todo) => {
    if (selected) {
      setDelay(delay.filter((i) => i !== todo["id"]));
    } else {
      setDelay([...delay, todo["id"]]);
    }
  };

  return (
    <Container selected={selected} onClick={() => edit && selectTodo(todo)}>
      <StyledCheckbox
        disabled={isChecked && edit}
        checked={isChecked}
        onChange={() => (edit ? selectTodo(todo) : checkTodo(todo))}
      />
      <span
        style={{
          display: "flex",
          width: "255px",
          margin: "0px 8px",
          fontSize: 14,
          alignItems: "center",
          opacity: isChecked && edit ? "0.4" : 1,
        }}
        onClick={() => !edit && navigate(`/todo/detail/${todo["plan_todo_id"]}`)}
      >
        <span style={{ fontFamily: "PretendardMedium" }}>{todoName}</span>
        <DetailIcon src={constants.DETAIL_ICON} />
      </span>
    </Container>
  );
}

export default PlanTodo;

const Container = styled.div`
  padding: 5px 12px;
  height: 36px;
  margin-top: 5px;
  margin-left: 0 !important;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;

  border: 1.5px solid ${(props) => (props.selected ? "#8977f7" : "transparent")};
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

const DetailIcon = styled.img`
  height: 12px;
  margin-left: auto;
`;
