import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import constants from "../../constants";

const BottomNavBar = () => {
  const [value, setValue] = useState(0);
  const current = ["TODO", "PLAN"];

  return (
    <>
      <BottomNavigation
        className="BottomNavBar"
        height="140px"
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          icon={
            <>
              <img
                src={
                  current[value] === "TODO"
                    ? constants.TODO_COLORED
                    : constants.TODO_UNCOLORED
                }
                height={25}
              />
              <span style={{fontFamily: "PretendardRegular", fontSize: "12px", color: current[value] === "TODO"? "#8977f7": "#c4c4c4", marginTop: "2px"}}>To do</span>
            </>
          }
          component={Link}
          to="/main/todo"
        />

        <BottomNavigationAction
          icon={
            <>
              <img
                src={
                  current[value] === "PLAN"
                    ? constants.PLAN_COLORED
                    : constants.PLAN_UNCOLORED
                }
                height={25}
              />
              <span style={{ fontFamily: "PretendardRegular", fontSize: "12px", color: current[value] === "PLAN"? "#8977f7": "#c4c4c4", marginTop: "2px"}}>Plan</span>
            </>
          }
          component={Link}
          to="/main/maintemplategrowth"
        />
      </BottomNavigation>
      <div
      // 추후 삭제: <></>를 div로 바꿀 예정
        style={{
          height: "33px",
          backgroundColor: "white",
          right: 0,
          left: 0,
          position: "fixed",
          bottom: 0,
          textAlign: "center",
        }}
      />
    </>
  );
};

export default BottomNavBar;
