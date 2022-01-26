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
import { Oval } from "react-loader-spinner";

function TodoPlan() {
  const accessToken = localStorage.getItem("token");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notionNum, setNotionNum] = useState(0);
  const [growthNum, setGrowthNum] = useState(0);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);
        const response = await axios.get(
          `https://myplanit.link/todos/plan/${selectedDate.getFullYear()}-${(
            "0" +
            selectedDate.getMonth() +
            1
          ).slice(-2)}-${("0" + (selectedDate.getDate() + 1)).slice(-2)}`,
          {
            Authorization: `Bearer ${accessToken}`,
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setData(Object.entries(response.data));
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [selectedDate]);
  let navigate = useNavigate();

  function onChange(e) {}

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  if (loading)
    return (
      <div style={{ marginTop: "50vh", marginBottom: "auto" }}>
        <Oval color="#7965f4" height="40px" width="40px" />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
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
      {data.map((plan, i) => {
        console.log(plan);
        return (
          <Card
            key={i}
            style={{ borderRadius: 5, width: 327, height: 260, marginTop: 9 }}
          >
            <span style={{ display: "flex" }}>
              <span
                style={{
                  display: "flex",
                  marginTop: "2px",
                  // fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                <span>{plan[0]}</span>
                <span style={{ marginLeft: 20 }}>
                  <span style={{ color: "#8977F7" }}>
                    {plan[1][0]["달성률"]}%
                  </span>{" "}
                  달성
                </span>
              </span>
            </span>
            <hr style={{ opacity: 0.2 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              {plan[1].slice(1).map((item, i) => {
                return (
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
                    {item["plan_todo"]}
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
                );
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default TodoPlan;
