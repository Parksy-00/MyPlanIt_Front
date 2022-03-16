import Calendar from "./Calendar.components";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";

function TodoHeader({
  selectedDate,
  setSelectedDate,
  edit,
  setEdit,
  current,
  setCurrent,
  setDelay,
}) {
  const linkText = ["PLAN", "MY"];

  return (
    <HeaderContainer>
      <UpperHeader>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Link to="../myplan">
          <StyledButton>MY PLAN</StyledButton>
        </Link>
      </UpperHeader>

      <LowerHeader>
        {linkText.map((item, i) => (
          <LinkButton
            key={i}
            selected={current === item}
            onClick={() => setCurrent(item)}
          >
            {item}
          </LinkButton>
        ))}
        <EditButton
          editing={edit}
          onClick={() => {
            setEdit(!edit);
            setDelay([]);
          }}
        >
          {edit && (
            <img
              src="/images/purpletick.png"
              style={{ width: "12px", marginRight: 4 }}
            />
          )}
          {edit ? "편집완료" : "편집하기"}
        </EditButton>
      </LowerHeader>
    </HeaderContainer>
  );
}

export default TodoHeader;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 327px;
  background-color: #fbfbfb;
  height: 110px;
`;

const UpperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LowerHeader = styled.div`
  display: flex;
  position: relative;
`;

const LinkButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 0px;
  background-color: #fbfbfb;
  border-radius: 0;
  border-width: 0px 0px 0px;
  font-family: "SFProDisplay";
  font-size: 16px;
  margin-right: 15px;
  padding: 0 0 1px;

  color: ${(props) => (props.selected ? "black" : "#C4C4C4")};
  border-bottom: ${(props) => (props.selected ? "2px solid #8977f7" : "none")};
  padding-bottom: ${(props) => (props.selected ? "4px" : "6px")};
`;

const EditButton = styled.p`
  position: absolute;
  right: 0;
  margin-top: 0;
  font-family: "PretendardMedium";
  font-size: 12px;
  color: ${(props) => (props.editing ? "#8977F7" : "#929292")};
`;

const StyledButton = styled(Button)`
  margin-left: 20px;
  height: 25px;
  width: 73px;
  font-size: 9px;
  margin-top: 10px;
  font-family: "SFProDisplay";
`;
