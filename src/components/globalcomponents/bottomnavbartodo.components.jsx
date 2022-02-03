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
        icon={
          <img
            src="https://firebasestorage.googleapis.com/v0/b/single-life-manager.appspot.com/o/ceos%20test%2Ftodo3.png?alt=media&token=31e75be2-ab09-424c-9a43-745d4316beff"
            width={44}
            height={44}
          />
        }
        component={Link}
        to="/main"
      />

      <BottomNavigationAction
        icon={
          <img
            src="https://firebasestorage.googleapis.com/v0/b/single-life-manager.appspot.com/o/ceos%20test%2Ftodof.png?alt=media&token=52344e83-350a-490d-83dc-144dd547bb52"
            width={36}
            height={36}
          />
        }
        component={Link}
        to="/main/maintemplategrowth"
      />
    </BottomNavigation>
  );
};

export default BottomNavBarTodo;
