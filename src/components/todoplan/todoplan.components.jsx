import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { ko } from "date-fns/locale";
import { Checkbox, Card, Button } from "antd";
import "./todoplan.components.css";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Oval } from "react-loader-spinner";

function TodoPlan() {
  const accessToken = localStorage.getItem("token");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rerender, setRerender] = useState(false);
  const [edit, setEdit] = useState(false);
  const [delay, setDelay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setData(null);
        const response = await axios.get(
          `https://myplanit.link/todos/plan/${selectedDate.getFullYear()}-${(
            "0" +
            (selectedDate.getMonth() + 1)
          ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`,
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
    };
    fetchData();
    setEdit(false);
    setDelay([]);
  }, [selectedDate, rerender]);
  let navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  if (loading)
    return (
      <div style={{ marginTop: "50vh", marginBottom: "auto" }}>
        <Oval color="#7965f4" height="40px" width="40px" />
        <BottomNavBarTodo />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return (
    <div className="container">
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 2,
          backgroundColor: "#fbfbfb",
          width: "100vw",
          height: "110px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MuiPickersUtilsProvider
            locale={ko}
            utils={DateFnsUtils}
            style={{ fontFamily: "Pretendard-SemiBold" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 30,
              }}
            >
              <DatePicker
                style={{
                  width: "auto",
                  fontFamily: "Pretendard-SemiBold",
                }}
                InputProps={{
                  disableUnderline: true,
                }}
                disableToolbar
                format="M월 d일 eee요일"
                margin="normal"
                value={selectedDate}
                className="date"
                onChange={handleDateChange}
              />
              <ExpandMoreIcon
                color="black"
                fontSize="large"
                style={{
                  padding: 0,
                  marginTop: 5,
                  marginRight: 10,
                }}
              />
            </div>
          </MuiPickersUtilsProvider>
          <Link to="../main/buytemplate">
            <Button
              style={{
                marginLeft: 20,
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
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            justifyContent: "center",
          }}
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
              marginRight: 27,
            }}
          >
            MY
          </Link>
          <div style={{ width: 190 }}>
            {!edit ? (
              <p
                style={{
                  justifyContent: "center",
                  alignItem: "center",
                  textAlign: "right",
                  marginTop: 9,
                  marginBottom: 0,
                  fontSize: "12px",
                  color: "#929292",
                  fontFamily: "Pretendard-Medium",
                }}
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                편집하기
              </p>
            ) : (
              <p
                style={{
                  justifyContent: "center",
                  alignItem: "center",
                  textAlign: "right",
                  marginTop: 9,
                  marginBottom: 0,
                  fontSize: "12px",
                  color: "#8977F7",
                  fontFamily: "Pretendard-Medium",
                }}
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                <img
                  src="/images/purpletick.png"
                  style={{ width: "12px", marginRight: 4 }}
                />
                편집완료
              </p>
            )}
          </div>
        </span>
      </div>
      <div style={{ height: "110px" }}></div>
      <div
        style={{
          top: "110px",
          bottom: "50px",
          fontFamily: "Pretendard-SemiBold",
        }}
      >
        {data.length > 0 ? (
          data.map((plan, i) => {
            let title = plan[0];
            if (title.length > 15) {
              title = plan[0].slice(0, 14) + "...";
            }
            let percent = plan[1][0]["달성률"];
            let todos = plan[1].slice(1);
            let count = 65 + parseInt(todos.length) * 38;
            return (
              <Card
                key={i}
                style={{
                  borderRadius: 5,
                  width: 327,
                  height: `${count}px`,
                  marginTop: 9,
                }}
              >
                <span style={{ display: "flex" }}>
                  <span
                    style={{
                      display: "flex",
                      marginTop: "12px",
                      fontSize: "16px",
                      marginBottom: "12px",
                      width: "300px",
                    }}
                  >
                    <span style={{ font: "p", marginRight: "auto" }}>
                      {title}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        color: "#8977F7",
                      }}
                    >
                      {percent}%
                    </span>{" "}
                    <span
                      style={{
                        fontFamily: "Pretendard-Medium",
                        marginLeft: 5,
                      }}
                    >
                      달성
                    </span>
                  </span>
                </span>
                <hr style={{ opacity: 0.2, margin: 0 }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {!edit
                    ? todos.map((item, i) => {
                        return (
                          <Checkbox
                            key={i}
                            style={{
                              marginLeft: 0,
                              marginTop: 14,
                            }}
                            checked={item["finish_flag"]}
                            onChange={async (e) => {
                              if (e.target.checked) {
                                axios
                                  .post(
                                    `https://myplanit.link/todos/plan/${item["plan_id"]}/${item["id"]}/check`,
                                    { token: `Bearer ${accessToken}` },
                                    {
                                      headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${accessToken}`,
                                      },
                                    }
                                  )
                                  .then((response) => {
                                    if (response.data.message == "success") {
                                      setRerender(!rerender);
                                    }
                                  });
                              } else {
                                axios
                                  .post(
                                    `https://myplanit.link/todos/plan/${item["plan_id"]}/${item["id"]}/check`,
                                    { token: `Bearer ${accessToken}` },
                                    {
                                      headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${accessToken}`,
                                      },
                                    }
                                  )
                                  .then((response) => {
                                    if (response.data.message == "success") {
                                      setRerender(!rerender);
                                    }
                                  });
                              }
                            }}
                          >
                            <span
                              style={{
                                display: "flex",
                                width: "255px",
                              }}
                            >
                              <span style={{ fontFamily: "Pretendard-Medium" }}>
                                {item["plan_todo"]}
                              </span>
                              <span
                                onClick={() => {
                                  navigate(`/todo/detail/${item["todo_id"]}`);
                                }}
                                style={{
                                  flexDirection: "row",
                                  marginLeft: "auto",
                                }}
                              >
                                <img
                                  src="images/detail.png"
                                  style={{
                                    width: 6,
                                    marginLeft: "auto",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                />
                              </span>
                            </span>
                          </Checkbox>
                        );
                      })
                    : todos.map((item, i) => {
                        return !item["finish_flag"] ? (
                          <Checkbox
                            key={i}
                            style={{ marginLeft: 0, marginTop: 14 }}
                            onChange={() => {
                              if (delay.includes(item["id"])) {
                                let temp = [...delay];
                                temp = temp.filter((i) => i !== item["id"]);
                                setDelay(temp);
                              } else {
                                let temp = [...delay, item["id"]];
                                setDelay(temp);
                              }
                            }}
                          >
                            <span style={{ display: "flex", width: "255px" }}>
                              <span style={{ fontFamily: "Pretendard-Medium" }}>
                                {item["plan_todo"]}
                              </span>
                              <span
                                onClick={() => {
                                  navigate(`/todo/detail/${item["todo_id"]}`);
                                }}
                                style={{
                                  flexDirection: "row",
                                  marginLeft: "auto",
                                }}
                              >
                                <img
                                  src="images/detail.png"
                                  style={{
                                    width: 6,
                                  }}
                                />
                              </span>
                            </span>
                          </Checkbox>
                        ) : (
                          <Checkbox
                            key={i}
                            style={{ marginLeft: 0, marginTop: 14 }}
                            checked={false}
                            disabled
                            onChange={() => {
                              if (delay.includes(item["id"])) {
                                let temp = [...delay];
                                temp = temp.filter((i) => i !== item["id"]);
                                setDelay(temp);
                              } else {
                                let temp = [...delay, item["id"]];
                                setDelay(temp);
                              }
                            }}
                          >
                            <span style={{ display: "flex", width: "255px" }}>
                              <span style={{ fontFamily: "Pretendard-Medium" }}>
                                {item["plan_todo"]}
                              </span>
                              <span
                                onClick={() => {
                                  navigate(`/todo/detail/${item["todo_id"]}`);
                                }}
                                style={{
                                  flexDirection: "row",
                                  marginLeft: "auto",
                                }}
                              >
                                <img
                                  src="images/detail.png"
                                  style={{
                                    width: 6,
                                  }}
                                />
                              </span>
                            </span>
                          </Checkbox>
                        );
                      })}
                </div>
              </Card>
            );
          })
        ) : (
          <img
            style={{ width: "60vw", marginTop: "50px" }}
            src="/images/plan.png"
            onClick={() => {
              navigate("/main/maintemplategrowth");
            }}
          />
        )}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      {!edit ? (
        <span>
          <BottomNavBarTodo />
          <div
            style={{
              height: "33px",
              backgroundColor: "white",
              right: 0,
              left: 0,
              position: "fixed",
              bottom: 0,
              textAlign: "center",
            }}
          />
        </span>
      ) : (
        <div
          style={{
            right: 0,
            left: 0,
            height: "90px",
            backgroundColor: "#7965f4",
            position: "fixed",
            bottom: 0,
            textAlign: "center",
          }}
          onClick={() => {
            let response = "";
            for (let i = 0; i < delay.length; i++) {
              axios
                .post(
                  `https://myplanit.link/todos/plan/${delay[i]}/delay`,
                  { token: `Bearer ${accessToken}` },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }
                )
                .then((res) => {
                  response = res.data.message;
                  if (response == "success") {
                    setRerender(!rerender);
                  }
                });
            }
          }}
        >
          <img src="/images/next.png" style={{ width: 35, marginTop: 15 }} />
        </div>
      )}
    </div>
  );
}

export default TodoPlan;
