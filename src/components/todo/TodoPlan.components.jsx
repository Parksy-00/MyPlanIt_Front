import { useState } from "react";
import { useNavigate } from "react-router-dom";
import constants from "../../constants";
import Plan from "./Plan.components";

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
  const contentsStyle = {
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "110px",
    marginBottom: "90px",
    overflowY: "scroll",
    fontFamily: "Pretendard-SemiBold",
  };
  const planExist = planData?.length;
  const noPlanImg = (
    <img
      style={{ width: "80%", marginTop: "50px" }}
      src={constants.NO_PLAN_IMG}
      onClick={() => {
        navigate("/main/maintemplategrowth");
      }}
    />
  );

  return (
    <div style={contentsStyle}>
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
    </div>
  );
}

export default TodoPlan;
