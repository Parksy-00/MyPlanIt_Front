import "./maintemplategrowth.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { useNavigate } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState, useEffect, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";
import { Switch } from "@mui/material";
import ViewTemplate from "../viewtemplate/viewtemplate.components";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function MainTemplateGrowth() {
  let navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get("https://myplanit.link/plans");
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
          <Toolbar style={{ justifyContent: "center" }}>
            {/*  <div style={{width: '40px'}}></div>*/}
            <Typography
              edge="end"
              variant="h6"
              style={{
                marginLeft: "0",
              }}
            >
              <div
                style={{
                  fontFamily: "PretendardMedium",
                  fontSize: "20px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                플랜
              </div>
            </Typography>
            {/*
          <Link
           to='../main/buytemplate'
          >
            <FavoriteBorderIcon style={{color:"grey"}}/>
          </Link>
          */}
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
          <Oval color="#7965f4" height="40px" width="40px" />
        </div>
        <BottomNavBarPlan />
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
    <div className="container" style={{ top: 0, position: "fixed" }}>
      <AppBar
        position="static"
        elevation={0}
        style={{ background: "white", width: "100vw" }}
      >
        <Toolbar style={{ justifyContent: "center" }}>
          {/*  <div style={{width: '40px'}}></div>*/}
          <Typography
            edge="end"
            variant="h6"
            style={{
              marginLeft: "0",
            }}
          >
            <div
              style={{
                fontFamily: "PretendardMedium",
                fontSize: "20px",
                textAlign: "center",
                color: "black",
              }}
            >
              플랜
            </div>
          </Typography>
          {/*
          <Link
           to='../main/buytemplate'
          >
            <FavoriteBorderIcon style={{color:"grey"}}/>
          </Link>
          */}
        </Toolbar>
      </AppBar>

      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight: "bold" }}
      >
        <Link
          to="../main/maintemplateroutine"
          className="routine-button"
          style={{
            width: "7.5vh",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "gray",
            fontFamily: "SFProDisplay",
            fontSize: "18px",
          }}
        >
          Routine
        </Link>
        <div style={{ width: "5vw" }}></div>
        <Link
          to="../main/maintemplategrowth"
          className="growth-button"
          style={{
            border: "1px solid #Dedede",
            width: "60px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "black",
            borderBottom: "solid #7965f4",
            fontFamily: "SFProDisplay",
            fontSize: "18px",
          }}
        >
          Growth
        </Link>
        <div style={{ width: "55vw" }}></div>
      </span>
      <div style={{ height: "10px" }}></div>
      <ul
        className="template-content"
        style={{
          overflowY: "scroll",
          width: "inherit",
          float: "left",
          height: "calc(100vh - 200px)",
          position: "relative",
        }}
      >
        <div className="textbox"></div>
        <div style={{ height: "2px" }}></div>
        {users.Growth.map((Growth) => (
          <li key={users.Growth.id}>
            <NavLink
              to={"../main/viewtemplate/" + Growth.id}
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
                      {Growth.name}
                    </div>
                  </div>

                  <div style={{ height: "8px" }}></div>
                  <img
                    className="template-photourl"
                    src={Growth.intro_img_url}
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
                          src={Growth.writer_img}
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
                            {Growth.writer_intro}
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontFamily: "PretendardMedium",
                            }}
                          >
                            {Growth.writer_name}
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
                        {/*{Growth.checkHeart ? 
     <FavoriteIcon />:
     <FavoriteBorderIcon />}*/}
                      </div>
                    </div>
                    <div
                      className="template-content"
                      style={{
                        fontSize: "12px",
                        marginLeft: "8px",
                        marginTop: "5px",
                      }}
                    >
                      {Growth.desc}
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
                      <div
                        className="template-tag"
                        style={{
                          fontFamily: "PretendardMedium",
                        }}
                      >
                        {Growth.tags[0]}
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
      </ul>
      <BottomNavBarPlan />
      <div
        style={{
          height: "33px",
          backgroundColor: "white",
          width: "100vw",
          position: "fixed",
          bottom: "0px",
        }}
      ></div>
      <div style={{ height: "20px" }}></div>
    </div>
  );
}

export default MainTemplateGrowth;
