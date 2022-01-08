import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      showLabels
      className="BottomNavBar"
      value={value}
      height="100px"
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="To do"
        icon={<PlaylistAddCheckIcon />}
        component={Link}
        to="/main/ericstodo"
      />
      <div style={{ width: "20vw" }}></div>
      <BottomNavigationAction
        label="Plan"
        icon={<CalendarTodayIcon />}
        component={Link}
        to="/main/maintemplateroutine"
      />
    </BottomNavigation>
  );
};

export default BottomNavBar;
