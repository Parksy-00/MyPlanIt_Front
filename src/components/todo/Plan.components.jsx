import React from "react";
import { Card } from "antd";
import PlanTodo from "./PlanTodo.components";

function Plan({
  accessToken,
  edit,
  update,
  setUpdate,
  delay,
  setDelay,
  i,
  plan,
}) {
  const title = plan[0].length > 15 ? plan[0].slice(0, 14) + "..." : plan[0];
  const percent = plan[1][0]["달성률"];
  const todos = plan[1].slice(1);

  const cardStyle = {
    borderRadius: 5,
    width: 327,
    marginTop: 9,
  };

  const achievement = (
    <>
      <span style={{ color: "#8977F7" }}>{percent}%</span>
      <span
        style={{
          fontFamily: "Pretendard-Medium",
          marginLeft: 5,
        }}
      >
        달성
      </span>
    </>
  );

  return (
    <Card
      key={i}
      style={cardStyle}
      title={title}
      extra={achievement}
      headStyle={{ border: "none", padding: "0 20px" }}
      bodyStyle={{paddingBottom: "20px"}}
    >
      <hr style={{ opacity: 0.2, margin: 0 }} />
      {todos.map((item, i) => {
        return (
          <PlanTodo
            key={i}
            item={item}
            accessToken={accessToken}
            update={update}
            setUpdate={setUpdate}
            edit={edit}
            delay={delay}
            setDelay={setDelay}
          />
        );
      })}
    </Card>
  );
}

export default Plan;
