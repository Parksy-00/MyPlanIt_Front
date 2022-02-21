import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function MyPlanHeader() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        style={{ background: "white", width: "100vw" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Link to="../todo">
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
    </>
  );
}

export default MyPlanHeader;
