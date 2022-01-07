import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbar.components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

function EricsTodo() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ width: "40px" }}></div>
          <Typography
            edge="end"
            variant="h6"
            style={{
              marginLeft: "0",
            }}
            color="black"
          >
            <div style={{ color: "black" }}>투두 페이지</div>
          </Typography>
          <IconButton
            edge="start"
            style={{
              marginRight: "0",
            }}
            color="black"
            aria-label="menu"
          >
            <MedicalServicesOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div
        className="wish-content"
        style={{ color: "#808080", fontSize: "14px" }}
      >
        erics todo
      </div>
      <BottomNavBar />
    </div>
  );
}

export default EricsTodo;
