import "./maintemplateroutine.components.css";
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
import dummydata from "../../dummydata/dummydata.json";
import MoreTemplate from "../moretemplate/moretemplate.components";
function MainTemplateRoutine() {
    let navigate = useNavigate();
    const categories = [
      {title: '일주일을 알차게'},
      {title: '건강한 몸'}
    ];
    const renderCategories = categories.map(categories =>{
      return (
        
        <MoreTemplate categories={categories}/>
      );

    });
    
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
            <MedicalServicesOutlinedIcon style={{color:"grey"}}/>
          </Link>
        </Toolbar>
      </AppBar>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "12px" }}
      >
        <Link
       to='../maintemplateroutine'
        className="main-routine-button"
      >
        <ListIcon /> &nbsp;Routine
      </Link>
      <div style={{width: '5vw'}}></div>
      <Link
        style={{border: '1px solid #D3d3d3'}}
        to='../inapp/maintemplategrowth'
        className="main-growth-button"
      >
        <ShowChartIcon /> &nbsp;Growth
      </Link>
      </span>
      <Link
        to='./maintemplateroutine'
        className="search-button"
        style={{border: '1px solid #D3d3d3'}}
      >
        <SearchIcon /> &nbsp;원하는 플랜을 검색해보세요
      </Link>
      <div style={{height: '25px'}}></div>
      <div  style={{height: '10px', background: '#dee2e6', width: '100vw'}}></div>
      <div style={{height: '20px'}}></div>
      <ul className="template-content"style={{overflowY: 'scroll',
  width:'inherit',
  float: 'left',
  height:'480px',
  position:'relative'}}>
      <div
        className="textbox"
      >
      <div style={{width: '150px'}}>일주일을 알차게</div>
      
      <Link
        to={{pathname: './moretemplate', state:{mytype: "abcd"}}}
        style={{fontSize:"12px", color:"grey"}}

      >
        <ArrowForwardIosIcon style={{fontSize: "10px"}} /> &nbsp;더보기
      </Link>
      </div>
      <div style={{height: '10px'}}></div>
      <div className="template-overall">
          {dummydata.contents_1.slice(0,2).map(contents_1=>(
            <li key={dummydata.contents_1.id}>
              <div style={{display:'flex',flexDirection:'row'}}>
              <img className="template-photourl" src= {contents_1.photourl}></img>
              <div style={{display:'flex',flexDirection:'column', width:'120px', paddingLeft:'5px'}}>
              <div className="template-title">{contents_1.title}</div>
              <div className="template-content">{contents_1.content}</div>
              </div>
              </div>
            </li>
          ))}
      
      </div>
      <div
        className="textbox"
      >
      <div style={{width: '150px'}}>건강한 몸</div>
      <button
        onClick={() => {
       
        }}
        className="more-button" style={{width: '70px'}}
      >
        <ArrowForwardIosIcon style={{fontSize: "10px"}} /> &nbsp;더보기
      </button>
      </div>
      <div style={{height: '10px'}}></div>
      <div className="template-overall">
          {dummydata.contents_2.slice(0,2).map(contents_2=>(
            <li key={contents_2.id}>
              <div style={{display:'flex',flexDirection:'row'}}>
              <img className="template-photourl" src= {contents_2.photourl}></img>
              <div style={{display:'flex',flexDirection:'column', width:'120px', paddingLeft:'5px'}}>
              <div className="template-title">{contents_2.title}</div>
              <div className="template-content">{contents_2.content}</div>
              </div>
              </div>
            </li>
          ))}
      
      </div>
      </ul>
      <BottomNavBar/>
    </div>
   
  );
}

export default MainTemplateRoutine;
