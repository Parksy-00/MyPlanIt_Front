import { useState } from "react";
import { useNavigate } from "react-router-dom";
import constants from "../../constants";
import Plan from "./Plan.components";
import styled from "styled-components";

function TodoPlan({
  planData,
  accessToken,
  edit,
  update,
  setUpdate,
  delay,
  setDelay,
}) {
  const navigate = useNavigate();
  const planExist = planData?.length;
  const noPlanImg = (
    <img
      style={{ width: "80%", marginTop: "50px" }}
      src={constants.NO_PLAN_IMG}
      onClick={() => {
        navigate("/planmarket");
      }}
    />
  );

  return (
    <Container>
      {planExist
        ? planData.map((plan, i) => (
            <Plan
              accessToken={accessToken}
              edit={edit}
              update={update}
              setUpdate={setUpdate}
              delay={delay}
              setDelay={setDelay}
              i={i}
              key={i}
              plan={plan}
            />
          ))
        : noPlanImg}
    </Container>
  );
}

export default TodoPlan;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  margin-bottom: 90px;
  width: 327px;
  overflow-Y: scroll;
  font-family: "PretendardSemiBold";
`