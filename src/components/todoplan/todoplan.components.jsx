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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TodoPlan() {
  useEffect(() => {
    axios.get("https://myplanit.link/todos/plan/2022-01-21", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ1MzQxNzk1LCJpYXQiOjE2NDI3NDk3OTUsImp0aSI6ImM0NWEyNDI0ZGZmNDQ2MzlhMzYwY2ExMDNmYzZjOWYxIiwidXNlcl9pZCI6NDB9.mi67W4Yk6vM47qPtlwLXWVJeQUEfVJV8jqQRj8zhi5M`,
      },
      withCredentials: true,
    });
  }, []);
  let navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [notionNum, setNotionNum] = useState(0);
  const [growthNum, setGrowthNum] = useState(0);

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
            style={{ width: 210 }}
            disableToolbar
            format="M월 d일 eee요일"
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
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            border: "1px",
            background: "#fbfbfb",
            borderRadius: "0",
            color: "black",
            borderBottom: " 2px solid #7965f4",
            paddingBottom: 2,
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
            height: "17px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            border: "5px",
            background: "#fbfbfb",
            borderRadius: "0",
            color: "gray",
            marginRight: 30,
          }}
        >
          MY
        </Link>
        <div style={{ width: 190 }}></div>
      </span>
      <div style={{ height: "10px" }}></div>
      <Card style={{ borderRadius: 5, width: 327, height: 260, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <span
            style={{
              display: "flex",
              marginTop: "2px",
              // fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <span>노션 포트폴리오와 퍼스널 브랜딩</span>
            <span style={{ marginLeft: 20 }}>
              <span style={{ color: "#8977F7" }}>{notionNum}%</span> 달성
            </span>
          </span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 12 }}
            onChange={(e) => {
              if (e.target.checked) {
                setNotionNum(notionNum + 1);
              } else {
                setNotionNum(notionNum - 1);
              }
            }}
          >
            노션 회원가입
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/notion/1");
                }}
                style={{
                  marginLeft: 160,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={(e) => {
              if (e.target.checked) {
                setNotionNum(notionNum + 1);
              } else {
                setNotionNum(notionNum - 1);
              }
            }}
          >
            노션 다운로드
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/notion/2");
                }}
                style={{
                  marginLeft: 160,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={(e) => {
              if (e.target.checked) {
                setNotionNum(notionNum + 1);
              } else {
                setNotionNum(notionNum - 1);
              }
            }}
          >
            포트폴리오 레퍼런스 보기
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/notion/3");
                }}
                style={{
                  marginLeft: 95,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={(e) => {
              if (e.target.checked) {
                setNotionNum(notionNum + 2);
              } else {
                setNotionNum(notionNum - 2);
              }
            }}
          >
            기초 개념 다루기 - 화면 구성
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/notion/4");
                }}
                style={{
                  marginLeft: 78,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={(e) => {
              if (e.target.checked) {
                setNotionNum(notionNum + 2);
              } else {
                setNotionNum(notionNum - 2);
              }
            }}
          >
            기초 개념 다루기 - 블록
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/notion/5");
                }}
                style={{
                  marginLeft: 105,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
        </div>
      </Card>
      <Card style={{ borderRadius: 5, width: 327, height: 150, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <span style={{ marginTop: "2px", fontSize: "16px" }}>
            <span>한 달 동안 200% 성장하기</span>
            <span
              style={{
                marginLeft: 55,
              }}
            >
              <span style={{ color: "#8977F7" }}>{growthNum}%</span> 달성
            </span>
          </span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 12 }}
            onChange={(e) => {
              if (e.target.checked) {
                setGrowthNum(growthNum + 4);
              } else {
                setGrowthNum(growthNum - 4);
              }
            }}
          >
            한 달 목표 세우기
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/growth/1");
                }}
                style={{
                  marginLeft: 137,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            onChange={(e) => {
              if (e.target.checked) {
                setGrowthNum(growthNum + 4);
              } else {
                setGrowthNum(growthNum - 4);
              }
            }}
          >
            회고 질문 3개 만들기
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/growth/2");
                }}
                style={{
                  marginLeft: 117,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
        </div>
      </Card>
      <Card style={{ borderRadius: 5, width: 327, height: 150, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <span style={{ marginTop: "2px", fontSize: "16px" }}>
            <span>자피어로 자동화 시스템 만들기</span>
            <span style={{ marginLeft: 15 }}>
              <span style={{ color: "#8977F7" }}>100%</span> 달성
            </span>
          </span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 12 }}
            checked={true}
            onChange={onChange}
          >
            메일 자동 회신 시스템 만들기 (1)
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/zapier/1");
                }}
                style={{
                  marginLeft: 52,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 0, marginTop: 16 }}
            checked={true}
            onChange={onChange}
          >
            메일 자동 회신 시스템 만들기 (2)
            <span>
              <img
                src="images/detail.png"
                onClick={() => {
                  navigate("/todo/zapier/2");
                }}
                style={{
                  marginLeft: 52,
                  width: 8,
                }}
              />
            </span>
          </Checkbox>
        </div>
      </Card>

      <br />
      <br />
      <br />
      <BottomNavBarTodo style={{ height: "200px" }} />
      <div
        style={{
          height: "33px",
          backgroundColor: "white",
          width: "100vw",
          position: "fixed",
          bottom: "0px",
        }}
      ></div>
    </div>
  );
}

export default TodoPlan;
