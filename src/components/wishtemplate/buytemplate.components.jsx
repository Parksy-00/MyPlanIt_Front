import "./wishtemplate.components.css";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState, useEffect, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Loading } from "@nextui-org/react";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";

function BuyTemplate() {
  let accessToken = sessionStorage.getItem("token");

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    accessToken = sessionStorage.getItem("token");
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);

        const response = await axios.get("https://myplanit.link/myplans/buy", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div>
        <AppBar
          position="static"
          elevation={0}
          style={{ background: "white", width: "100vw" }}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Link to="../main/todoplan">
              <ArrowBackIosIcon style={{ color: "black" }} />
            </Link>
            <Typography
              edge="end"
              variant="h6"
              style={{
                marginLeft: "0",
              }}
            >
              <div style={{ color: "black" }}>MY PLAN</div>
            </Typography>
            <div style={{ width: "40px" }}></div>
          </Toolbar>
        </AppBar>
        <div
          style={{
            marginTop: "40vh",
            marginBottom: "auto",
            marginLeft: "40vw",
            marginRight: "auto",
          }}
        >
          <Loading />
        </div>
        <BottomNavBarTodo />
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
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <div className="container">
      <AppBar
        position="static"
        elevation={0}
        style={{ background: "white", width: "100vw" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Link to="../main/todoplan">
            <ArrowBackIosIcon style={{ color: "black" }} />
          </Link>
          <Typography
            edge="end"
            variant="h6"
            style={{
              marginLeft: "0",
            }}
          >
            <div style={{ color: "black" }}>MY PLAN</div>
          </Typography>
          <div style={{ width: "40px" }}></div>
        </Toolbar>
      </AppBar>
      <span
        className="button-group"
        style={{
          marginTop: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          marginLeft: 10,
        }}
      >
        <Link
          to="../main/buytemplate"
          className="main-growth"
          style={{
            width: "70px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2px",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "black",
            borderBottom: "solid #7965f4",
            fontFamily: "Pretendard-SemiBold",
          }}
        >
          구매 플랜
        </Link>
        <div style={{ width: "3vw" }}></div>
        <Link
          to="../main/usetemplate"
          className="main-growth"
          style={{
            border: "1px solid #D3d3d3",
            width: "70px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0px",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "gray",
            fontFamily: "Pretendard-SemiBold",
          }}
        >
          이용 중
        </Link>
        <div style={{ width: "50vw" }}></div>
      </span>
      <div style={{ height: "10px" }}></div>
      <ul
        className="template-content"
        style={{
          overflowY: "scroll",
          // width: "inherit",
          // float: "left",
          height: "680px",
          position: "relative",
        }}
      >
        <div className="textbox"></div>
        <div style={{ height: "10px" }}></div>

        {users.buy_plans?.map((buy_plans) => (
          <li key={users.buy_plans.id}>
            <NavLink
              to={"../main/buytemplate/"}
              className="template-overall"
              style={{ justifyContent: "center", color: "black" }}
            >
              <React.Fragment key={uuidv4()}>
                <div
                  style={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px 0px 1.5px 0.5px #Dedede",
                    justifyContent: "center",
                    marginLeft: 1,
                    marginRight: 1,
                  }}
                  className="template-all"
                >
                  <div style={{ height: "5px" }}></div>
                  <div
                    style={{
                      width: "350px",
                      marginRight: "auto",
                      marginLeft: "auto",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "3%",
                        marginTop: 7,
                        marginBottom: 7,
                        fontFamily: "PretendardMedium",
                      }}
                      className="template-title"
                    >
                      {buy_plans.plan.name}
                    </div>
                  </div>

                  <div style={{ height: "8px" }}></div>
                  <img
                    className="template-photourl"
                    src={buy_plans.plan.intro_img_url}
                    style={{
                      width: "80vw",
                      height: "130px",
                      objectFit: "cover",
                    }}
                  ></img>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "350px",
                      paddingLeft: "5px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "10px",
                          width: "280px",
                        }}
                      >
                        <img
                          className="template-writerphoto"
                          src={buy_plans.plan.writer_img}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "20px",
                            marginBottom: "5px",
                            marginLeft: "6px",
                            marginRight: "3px",
                          }}
                        ></img>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "10px",
                          }}
                        >
                          <div
                            className="template-writerintro"
                            style={{
                              fontSize: "13px",

                              height: "14px",
                              marginBottom: "4px",
                              fontFamily: "PretendardMedium",
                            }}
                          >
                            {buy_plans.plan.writer_intro}
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontFamily: "PretendardMedium",
                            }}
                          >
                            {buy_plans.plan.writer_name}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          marginBottom: "auto",
                          color: "#7965f4",
                        }}
                      >
                        {/* {Routine.checkHeart ? 
     <FavoriteIcon />:
     <FavoriteBorderIcon />} */}
                      </div>
                    </div>
                    <div
                      className="template-content"
                      style={{
                        fontSize: "12px",
                        marginLeft: "8px",
                        marginTop: "5px",
                        fontFamily: "PretendardMedium",
                      }}
                    >
                      {buy_plans.plan.desc}
                    </div>
                    <div style={{ height: "5px" }}></div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        marginLeft: 7,
                      }}
                    >
                      <div className="template-tag">
                        {buy_plans.plan.tags[0]}
                      </div>
                      <div style={{ width: "10px" }}></div>
                    </div>
                    <div style={{ height: "5px" }}></div>
                  </div>
                </div>
                <div style={{ height: "15px" }}></div>
              </React.Fragment>
            </NavLink>
          </li>
        ))}

        <div className="textbox"></div>
        <div style={{ height: "200px" }}></div>
      </ul>
      <BottomNavBarTodo />
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

export default BuyTemplate;
