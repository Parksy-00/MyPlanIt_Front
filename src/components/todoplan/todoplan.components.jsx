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
import "./todoplan.components.css";
import axios from "axios";

function TodoPlan() {
  useEffect(() => {
    axios.get("https://myplanit.link/todos/plan/2022-01-21", {
      headers: {
        access_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNjk3MzkwLCJpYXQiOjE2NDI2MTA5OTAsImp0aSI6IjA3Njk1NzhjMTc5YzQzZGJhMWE5MWU0ZGY3NWY4MTkzIiwidXNlcl9pZCI6NDB9.tJPSFHBoA7ibIJAobwN7h8-W1B7Yqh85KnsD_zFEPEY",
        refresh_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY0NTIwMjk5MCwiaWF0IjoxNjQyNjEwOTkwLCJqdGkiOiI0OTUwM2MzNTQ3YmU0NzIwYTRjNTI2YzQ5OGU2ZDQ1OSIsInVzZXJfaWQiOjQwfQ.VLshLAoIcdg9zQYEmOnKP_SjCahth4lKppiyT9Una2k",
      },
      withCredentials: true
    });
  }, []);
  let navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());

  function onChange(e) {}

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
            disableToolbar
            format="MM월 dd일 eee요일"
            margin="normal"
            id="date-picker-outline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <Button style={{ marginLeft: 30 }}>MY PLAN</Button>
      </div>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight: "bold" }}
      >
        <Link
          to="../main/todoplan"
          className="main-routine-button"
          style={{
            width: "7.5vh",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            border: "5px",
            background: "#fbfbfb",
            borderRadius: "0",
            color: "black",
            borderBottom: "solid #7965f4",
          }}
        >
          PLAN
        </Link>
        <div style={{ width: "5vw" }}></div>
        <Link
          style={{ border: "1px solid #D3d3d3" }}
          to="../main/todomy"
          className="main-growth-button"
          style={{
            width: "7.5vh",
            height: "35px",
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
          MY
        </Link>
        <div style={{ width: "55vw" }}></div>
      </span>
      <div style={{ height: "10px" }}></div>
      <Card style={{ width: 327, height: 190, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <span
            style={{
              display: "flex",
              marginTop: "2px",
              // fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <span>1000만원 모으기</span>
            <span style={{ marginLeft: 100 }}>
              <span style={{ color: "#8977F7" }}>25%</span> 달성
            </span>
          </span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 12 }}
            onChange={onChange}
          >
            소비패턴 분석하기
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={onChange}
          >
            저금계좌 설립하기
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={onChange}
          >
            자동이체 걸어놓기
          </Checkbox>
        </div>
      </Card>
      <Card style={{ width: 327, height: 190, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <span style={{ marginTop: "2px", fontSize: "16px" }}>
            <span>데이트 요리 10가지 배우기</span>
            <span
              style={{
                marginLeft: 40,
              }}
            >
              <span style={{ color: "#8977F7" }}>50%</span> 달성
            </span>
          </span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 12 }}
            onChange={onChange}
          >
            차돌박이 파스타 재료 사기
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={onChange}
          >
            차돌박이 파스타 재료 손질하기
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={onChange}
          >
            차돌박이 파스타 요리하기
          </Checkbox>
        </div>
      </Card>
      <Card style={{ width: 327, height: 150, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <span style={{ marginTop: "2px", fontSize: "16px" }}>
            <span>엑셀 함수 10개 배우기</span>
            <span style={{ marginLeft: 70 }}>
              <span style={{ color: "#8977F7" }}>33%</span> 달성
            </span>
          </span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 12 }}
            onChange={onChange}
          >
            SUMIF 함수
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={onChange}
          >
            VLookUp 함수
          </Checkbox>
        </div>
      </Card>
      <BottomNavBarTodo style={{height: '200px'}}/>
    </div>
  );
}

export default TodoPlan;
