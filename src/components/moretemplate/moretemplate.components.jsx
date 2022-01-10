import "./moretemplate.components.css";
import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
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
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";

function MoreTemplate(props) {
    let navigate = useNavigate();
  return (
    <div className="container">
         <AppBar position="static" style={{background: 'white'}}>
      <Toolbar style={{ justifyContent: "space-between" }}>
    
      <Link
           to='../main/maintemplateroutine'
          >
            <ArrowBackIosIcon />
          </Link>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0'
            }}
            color="black"
          >
            <div style={{color: "black"}}>상세 페이지</div>
          </Typography>
          <div style={{width: '40px'}}></div>
        </Toolbar>
    
      
      </AppBar>
      <div style={{height: '5px'}}></div>
      <ul className="template-content"style={{overflowY: 'scroll',
  width:'inherit',
  float: 'left',
  height:'82vh',
  position:'relative'}}>

      <div style={{height: '10px'}}></div>
      <div className="template-overall">
          {dummydata.contents_1.map(contents_1=>(
            <li key={contents_1.id}>
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
      </ul>
      <BottomNavBarPlan/>
    </div>
   
  );
}

export default MoreTemplate;
