import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";

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
        label="To do"
        icon={<PlaylistAddCheckIcon />}
        component={Link}
        to="/main/todoplan"
      />

      <BottomNavigationAction
        label="Plan"
        icon={<CalendarTodayIcon />}
        component={Link}
        to="/main/maintemplateroutine"
      />
    </BottomNavigation>
  );
};

export default BottomNavBarTodo;
