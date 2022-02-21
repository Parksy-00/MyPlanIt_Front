import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";
import constants from "../../constants";

const BottomNavBarTodo = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      className="BottomNavBar"
      value={0}
      height="140px"
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        icon={
          <>
            <img src={constants.TODO_COLORED} height={25} />
            <span
              style={{
                fontFamily: "PretendardRegular",
                fontSize: "12px",
                color: "#8977f7",
                marginTop: "2px",
              }}
            >
              To do
            </span>
          </>
        }
        component={Link}
        to="todo"
      />

      <BottomNavigationAction
        icon={
          <>
            <img src={constants.PLAN_UNCOLORED} height={25} />
            <span
              style={{
                fontFamily: "PretendardRegular",
                fontSize: "12px",
                color: "#c4c4c4",
                marginTop: "2px",
              }}
            >
              Plan
            </span>
          </>
        }
        component={Link}
        to="/main/maintemplategrowth"
      />
    </BottomNavigation>
  );
};

export default BottomNavBarTodo;
