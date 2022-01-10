import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";

function EricsTodo() {
  let navigate = useNavigate();
  return (
    <div className="container">

      <div
        className="wish-content"
        style={{ color: "#808080", fontSize: "14px" }}
      >
        erics todo
      </div>
      <BottomNavBarTodo />
    </div>
  );
}

export default EricsTodo;
