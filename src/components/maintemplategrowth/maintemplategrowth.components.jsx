import "./maintemplategrowth.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { useNavigate } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from '@mui/icons-material/Search';
import dummydata from "../../dummydata/dummydata.json";
import MoreTemplate from "../moretemplate/moretemplate.components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React,{Component,Fragment} from 'react';
import { v4 as uuidv4 } from 'uuid';
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";

function MainTemplateGrowth() {
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
         <AppBar position="static"  elevation={0} style={{background: 'white',width: "100vw"}}>
      <Toolbar style={{ justifyContent: "space-between" }}>
      <div style={{width: '40px'}}></div>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0',
      
            }}
           
          >
            <div style={{color: "black"}}>플랜</div>
          </Typography>
          <Link
           to='../main/wishtemplate'
          >
            <FavoriteBorderIcon style={{color:"grey"}}/>
          </Link>
        </Toolbar>
      </AppBar>
      <Link
        to='../main/searchtemplate'
        className="search-button"
        style={{border: '1px solid #Dedede'}}
      >
        <SearchIcon /> &nbsp;원하는 플랜을 검색해보세요
      </Link>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight:"bold"}}
      >
        <Link
       to='../main/maintemplateroutine'
        className="routine-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'white',
        borderRadius: '0',
        color: 'gray'}}
      >
        Routine
      </Link>
      <div style={{width: '5vw'}}></div>
      <Link
        style={{border: '1px solid #Dedede'}}
        to='../main/maintemplategrowth'
        className="growth-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'white',
        borderRadius: '0',
        color: 'black',
        borderBottom:'solid #7965f4'}}
      >
        Growth
      </Link>
      <div style={{width: "55vw"}}></div>
      </span>
       <div style={{height: '10px'}}></div>
      <ul className="template-content"style={{overflowY: 'scroll',
  width:'inherit',
  float: 'left',
  height:'680px',
  position:'relative'}}>
      <div
        className="textbox"
      >
      </div>
      <div style={{height: '10px'}}></div>
      <Link to="../main/viewtemplate" className="template-overall"key={dummydata.contents_2.id} style={{justifyContent:'center',color:'black'}}>
          {dummydata.contents_2.map(contents_2=>(
                 <React.Fragment key={uuidv4()}>
            <li key={dummydata.contents_2.id}>
              <div style={{display:'flex',flexDirection:'column',boxShadow: '0px 0px 2px 0.5px #D3d3d3', justifyContent: 
          "center"}} className="template-all"key={dummydata.contents_2.id}>
             <div style={{height: "5px"}}></div>
             <div style={{width: '350px', marginRight:'auto',marginLeft:'auto',display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
             <div style={{marginLeft:'0'}} className="template-title">{contents_2.title}</div>
  
             </div>

             <div style={{height: "8px"}}></div>
              <img className="template-photourl" src= {contents_2.photourl} style={{width: '350px', height: '130px'}}></img>
              <div style={{display:'flex',flexDirection:'column', width:'350px', paddingLeft:'5px'}}>
                
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px', width: '280px'}}>
              <img className="template-writerphoto" src= {contents_2.writerphoto} style={{width: '40px', height: '40px',borderRadius:'20px'}}></img>
              <div style={{display: 'flex', flexDirection: 'column',marginLeft: '10px'}}>
              <div className="template-writerintro" style={{fontSize: '10px',color:'gray', height: '15px'}}>{contents_2.writerintro}</div>
              <div style={{fontSize:'10px'}}>{contents_2.writer}</div>
              </div>
              </div>
              <div style={{marginTop:'auto',marginBottom:'auto', color: '#7965f4'}}>
             {contents_2.checkHeart ? 
             <FavoriteIcon />:
             <FavoriteBorderIcon />}
             </div>
              </div>
              <div className="template-content" style={{fontSize:'12px'}}>{contents_2.content}</div>
              <div style={{height: '5px'}}></div>
              <div style={{display:'flex', flexDirection:'row',justifyContent:'left'}}>
                <div className="template-tag">
                {contents_2.tag1}
                </div>
                <div style={{width: '10px'}}>
                </div>
                <div className="template-tag">
                {contents_2.tag2}
                </div>
              </div>
              <div style={{height: '5px'}}></div>
              </div>
              </div>
              <div style={{height: "15px"}}></div>
            </li>
            </React.Fragment>
          ))}
      
      </Link>
      <div
        className="textbox"
      >
      </div>
      <div style={{height: '10px'}}></div>
      </ul>
      <BottomNavBarPlan/>
    </div>
   
  );
}

export default MainTemplateGrowth;
