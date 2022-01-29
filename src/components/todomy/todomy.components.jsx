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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Sheet from 'react-modal-sheet';
import { Input, Switch } from "antd";
import "./todomy.components.css";

const accessToken = localStorage.getItem("token");
function TodoMy() {
  let navigate = useNavigate();
  const [todo, setTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setOpen] = React.useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  function addTodo() {
    axios
      .post(
        `https://myplanit.link/todos/my/${selectedDate.getFullYear()}-${(
            "0" +
            (selectedDate.getMonth() + 1)
          ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`,
        {
          todo_name: todo,
        },
        {
            headers: {
              "Content-Type": "application/json",
             Authorization: `Bearer ${accessToken}`,
            }
          }
      )
      .then((response) => {
         navigate("/main/todomy");
      })
  }
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
        <Link to="../main/buytemplate">
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
        </Link>
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
      <Fab 
      onClick={function(event){setOpen(true);}}
      size="large" color="secondary" aria-label="add" style={{position:"fixed",
  bottom: "100px",
  right: "20px",}}>
        <AddIcon />
      </Fab>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[250]}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
          <Input
        className="email-input"
        size="large"
        placeholder="오늘 할 일을 입력해주세요.."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        style={{ marginLeft:"39px", width: "350px", fontFamily: "PretendardRegular",fontSize: "16px", color:"black"}}
      /> 
       <button
        onClick={() => {
          axios
          .post(
            `https://myplanit.link/todos/my/${selectedDate.getFullYear()}-${(
                "0" +
                (selectedDate.getMonth() + 1)
              ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`,
            {
              todo_name: todo,
            },
            {
                headers: {
                  "Content-Type": "application/json",
                 Authorization: `Bearer ${accessToken}`,
                }
              }
          )
          .then((response) => {
            console.log(response);
            navigate("/main");
          })
        }}
        className="todo-add-button"
        style={{marginLeft:"64px"}}
      >
        추가하기
      </button>
            </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
      <BottomNavBarTodo style={{zIndex:"100"}}/>
    </div>
  );
}

export default TodoMy;
