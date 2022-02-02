import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Appbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            style={{
              marginRight: "0",
            }}
            color="black"
            aria-label="menu"
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography
            edge="end"
            variant="h6"
            style={{
              marginLeft: "0",
            }}
            color="black"
          >
            <div style={{ color: "black" }}>찜한 목록</div>
          </Typography>
          <div style={{ width: "40px" }}></div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
