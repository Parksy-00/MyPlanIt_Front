import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import { Checkbox, Card, Button } from "antd";
import axios from "axios";
import { Cookies } from "react-cookies";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const accessToken =  localStorage.getItem("token");
console.log(accessToken);
function TodoMy() {
  let navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MuiPickersUtilsProvider locale={ko} utils={DateFnsUtils}>
          <KeyboardDatePicker
            style={{ width: 210 }}
            disableToolbar
            format="M월 dd일 eee요일"
            margin="normal"
            id="date-picker-outline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            keyboardIcon={
              <ExpandMoreIcon
                color="black"
                fontSize="large"
                style={{ padding: 0 }}
              />
            }
          />
        </MuiPickersUtilsProvider>
        <Button
          style={{
            marginLeft: 50,
            height: 25,
            width: 73,
            fontSize: 9,
            marginTop: 10,
          }}
        >
          MY PLAN
        </Button>
      </div>
      <span
        className="button-group"
        style={{ fontSize: "16px", fontWeight: "bold" }}
      >
        <Link
          to="../main"
          className="main-routine-button"
          style={{
            width: 42,
            height: "17px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            border: "5px",
            background: "#fbfbfb",
            borderRadius: "0",
            color: "gray",
          }}
        >
          PLAN
        </Link>
        <div style={{ width: 15 }}></div>
        <Link
          style={{ border: "1px solid #D3d3d3" }}
          to="../main/todomy"
          className="main-growth-button"
          style={{
            width: 42,
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            border: "5px",
            background: "#fbfbfb",
            borderRadius: "0",
            color: "black",
            borderBottom: "2px solid #7965f4",
            marginRight: 30,
            paddingBottom: 2,
          }}
        >
          MY
        </Link>
        <div style={{ width: 190 }}></div>
      </span>
      <BottomNavBarTodo />
    </div>
  );
}

export default TodoMy;
