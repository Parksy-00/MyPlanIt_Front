import { useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import axios from "axios";
import constants from "../../constants";
import styled from "styled-components";

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

  const selectTodo = (item) => {
    if (selected) {
      setDelay(delay.filter((i) => i !== item["id"]));
    } else {
      setDelay([...delay, item["id"]]);
    }
  };

  return (
    <Container selected={selected} onClick={() => edit && selectTodo(item)}>
      <StyledCheckbox
        disabled={isChecked && edit}
        checked={isChecked}
        onChange={() => (edit ? selectTodo(item) : checkTodo(item))}
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
        onClick={() => !edit && navigate(`/todo/detail/${item["todo_id"]}`)}
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
