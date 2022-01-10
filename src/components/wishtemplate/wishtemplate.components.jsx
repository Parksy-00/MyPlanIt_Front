import "./wishtemplate.components.css";
import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import dummydata from "../../dummydata/dummydata.json";
import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";

function WishTemplate() {
  return (
    <div className="container">
     <AppBar position="static" elevation={0} style={{background: 'white',width: "100vw"}}>
      <Toolbar style={{ justifyContent: "space-between" }}>
    
      <Link
           to='../main/maintemplateroutine'
          >
            <ArrowBackIosIcon style={{color:"black"}}/>
          </Link>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0'
            }}
            color="inherit"
          >
            <div style={{color: "black"}}>찜한 목록</div>
          </Typography>
          <div style={{width: '40px'}}></div>
        </Toolbar>
      </AppBar>
      <Link to="../main/viewtemplate" key={dummydata.contents_1.id} className="wish-template-overall" style={{color:'black',listStyleType:"none", width:"90vw",display:'flex',flexDirection:'row', flexWrap:"wrap",justifyContent:"start", alignItems:"flex-start"}}>
          {dummydata.contents_1.filter(contents_1=> contents_1.checkHeart===true).map(contents_1=>(
             <React.Fragment key={uuidv4()}>
            <li key={dummydata.contents_1.id} >
              <div style={{justifyContent: 
          "center", width: "45vw"}} className="wish-template-all">
             <div style={{height: "5px"}}></div>
             <div style={{width: '10px', marginRight:'auto',marginLeft:'auto',display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
             </div>
           <div style={{height: "4px"}}></div>
           <div style={{height: "180px", borderRadius:"8px"}}>
              <img className="wish-template-photourl" src= {contents_1.photourl} style={{width: '350px', height: '130px'}}></img>
              <div style={{fontSize:'10px'}}>{contents_1.writer}</div>
              <div className="wish-template-title">{contents_1.title}</div>
              </div>
              </div>
            </li>
            </React.Fragment>
          ))}
      
      </Link>
      <BottomNavBarPlan/>
    </div>
   
  );
}

export default WishTemplate;
