import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";

const BottomNavBarPlan = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      className="BottomNavBar"
      value={1}
      height="10px"
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        icon={
          <img
            src="https://firebasestorage.googleapis.com/v0/b/single-life-manager.appspot.com/o/ceos%20test%2Ftodoc.png?alt=media&token=3f20e0e8-1b61-4c72-a99b-a2d3fe24949e"
            width={36}
            height={36}
          />
        }
        component={Link}
        to="/main"
      />

      <BottomNavigationAction
        icon={
          <img
            src="https://firebasestorage.googleapis.com/v0/b/single-life-manager.appspot.com/o/ceos%20test%2Ftodod.png?alt=media&token=55c5a1c6-a771-4619-ae0e-fa6a674683e3"
            width={44}
            height={44}
          />
        }
        component={Link}
        to="/main/maintemplategrowth"
      />
    </BottomNavigation>
  );
};

export default BottomNavBarPlan;
