import "./maintemplategrowth.components.css";
import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbar.components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from '@mui/icons-material/List';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SearchIcon from '@mui/icons-material/Search';
import { height } from "@mui/system";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function MainTemplateGrowth() {
    let navigate = useNavigate();
  return (
    <div className="container">
         <AppBar position="static" style={{background: 'white'}}>
         
      <Toolbar style={{ justifyContent: "space-between" }}>
      <div style={{width: '40px'}}></div>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0'
            }}
            color="black"
          >
            <div style={{color: "black"}}>플랜</div>
          </Typography>
          <Link
           to='../inapp/wishtemplate'
          >
            <MedicalServicesOutlinedIcon />
          </Link>
        </Toolbar>
      </AppBar>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "12px" }}
      >
        <Link
       to='../inapp/maintemplateroutine'
        className="routine-button"
        style={{border: '1px solid #D3d3d3'}}
      >
        <ListIcon /> &nbsp;Routine
      </Link>
      <div style={{width: '5vw'}}></div>
      <Link
         to='../inapp/maintemplategrowth'
        className="growth-button"
      >
        <ShowChartIcon /> &nbsp;Growth
      </Link>
      </span>
      <Link
        to='../inapp/searchtemplate'
        className="search-button"
        style={{border: '1px solid #D3d3d3'}}
      >
        <SearchIcon /> &nbsp;원하는 플랜을 검색해보세요
      </Link>
      <div style={{height: '25px'}}></div>
      <div  style={{height: '10px', background: '#dee2e6', width: '100vw'}}></div>
      <div style={{height: '20px'}}></div>

      <div
        className="textbox"
    
      >
      <div style={{width: '150px'}}>실무 노하우</div>
      <button
        onClick={() => {
       
        }}
        className="more-button" style={{width: '70px'}}
      >
        <ArrowForwardIosIcon style={{fontSize: "10px"}} /> &nbsp;더보기
      </button>
      </div>
      <BottomNavBar/>
    </div>
   
  );
}

export default MainTemplateGrowth;
