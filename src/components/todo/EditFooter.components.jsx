import axios from "axios";
import constants from "../../constants";
import styled from "styled-components";

function EditFooter({
  current,
  delay,
  update,
  setUpdate,
  updateMy,
  setUpdateMy,
}) {
  const accessToken = sessionStorage.getItem("access");
  const delayTodo = () => {
    const requestUrl = (id) =>
      current === "MY"
        ? `https://myplanit.link/todos/my/${id}/delay`
        : `https://myplanit.link/todos/plan/delay/${id}`;
    for (let i = 0; i < delay.length; i++) {
      axios
        .post(
          requestUrl(delay[i]),
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          current === "PLAN" ? setUpdate(!update) : setUpdateMy(!updateMy);
        });
    }
  };

  const advanceTodo = () => {
    for (let i = 0; i < delay.length; i++) {
      axios
        .post(
          `https://myplanit.link/todos/plan/advance/${delay[i]}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          current === "PLAN" ? setUpdate(!update) : setUpdateMy(!updateMy);
        });
    }
  };

  const deleteTodo = () => {
    for (let i = 0; i < delay.length; i++) {
      axios
        .delete(`https://myplanit.link/todos/my/${delay[i]}/delete`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          setUpdateMy(!updateMy);
        });
    }
  };
  return (
    <Footer>
      {current == "PLANDETAIL" && (
        <Button onClick={advanceTodo}>
          <img src={constants.DO_TOMORROW} height="19" />
          <NavText>하루 앞당기기</NavText>
        </Button>
      )}
      <Button onClick={delayTodo}>
        <img src={constants.DO_TOMORROW} height="19" />
        <NavText>
          {current == "PLANDETAIL" ? "하루 미루기" : "내일하기"}
        </NavText>
      </Button>
      {current === "MY" && (
        <Button onClick={deleteTodo}>
          <img src={constants.DELETE} height="19" />
          <NavText>삭제하기</NavText>
        </Button>
      )}
    </Footer>
  );
}

export default EditFooter;

const Footer = styled.div`
  right: 0;
  left: 0;
  height: 90px;
  background-color: #8977f7;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 30px 30px;
  flex: 1;
`;

const NavText = styled.span`
  font-family: "PretendardMedium";
  font-size: 10px;
  font-style: normal;
  color: #ffffff;
  margin-top: 8px;
`;
