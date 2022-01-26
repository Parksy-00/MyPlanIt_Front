import "./wishtemplate.components.css";
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
import React, { useState, useEffect,Component } from "react";
import { NavLink, Route } from 'react-router-dom';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";
import { Switch } from "@mui/material";
import ViewTemplate from "../viewtemplate/viewtemplate.components";
import {
  useParams
} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Oval} from "react-loader-spinner";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
const accessToken =  localStorage.getItem("token");
console.log(accessToken);
console.log(localStorage.getItem("token"));
function BuyTemplate() {
    let navigate = useNavigate();
    let {plan_id} = useParams();
    const categories = [
      {title: '일주일을 알차게'},
      {title: '건강한 몸'}
    ];
    const renderCategories = categories.map(categories =>{
      return (
        
        <MoreTemplate categories={categories}/>
      );

    });
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          setError(null);
          setUsers(null);
          setLoading(true);
          console.log(accessToken);
          const response = await axios.get(
            'https://myplanit.link/myplans/buy',
            {
            
              withCredentials:true,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
                  },
          
            }
          );
          console.log(response.data);
          setUsers(response.data); 
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);
  
    if (loading) return <div>  
    <AppBar position="static"  elevation={0} style={{background: 'white',width: "100vw"}}>
   <Toolbar style={{ justifyContent: "center" }}>
  {/*  <div style={{width: '40px'}}></div>*/}
       <Typography
       edge = 'end'
         variant="h6"
         style={{
          marginLeft: '0',
   
         }}
        
       >
     <div style={{fontFamily: "PretendardMedium",fontSize: "20px", textAlign:"center", color: "black"}}>MY PLAN</div>
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
   <div style={{marginTop:"40vh", marginBottom:"auto", marginLeft:"40vw",marginRight:"auto"}}><Oval color="#7965f4" height="40px" width="40px" justifyContent="true"/></div><BottomNavBarTodo/>
 <div style={{height: "33px", backgroundColor:"white",width:"100vw",position:"fixed", bottom:"0px"}}></div>
</div>;  if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
  return (
    <div className="container">
         <AppBar position="static" elevation={0} style={{background: 'white',width: "100vw"}}>
      <Toolbar style={{ justifyContent: "space-between" }}>
    
      <Link
           to='../main'
          >
            <ArrowBackIosIcon style={{color:"black"}} />
          </Link>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0',
    
            }}
          >
            <div style={{color: "black"}}>MY PLAN</div>
          </Typography>
            <div style={{width: '40px'}}></div>
        </Toolbar>
      </AppBar>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight:"bold"}}
      >
    
     
      <Link
        style={{border: '1px solid #D3d3d3'}}
        to='../main/buytemplate'
        className="main-growth-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'transparent',
        borderRadius: '0',
        color: 'black',
        borderBottom:'solid #7965f4'}}
      >
        구매 플랜
      </Link>
      <div style={{width: "3vw"}}></div>
      <Link
        style={{border: '1px solid #D3d3d3'}}
        to='../main/usetemplate'
        className="main-growth-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'transparent',
        borderRadius: '0',
        color: 'gray'}}
      >
        이용 중
      </Link>
      <div style={{width: "50vw"}}></div>
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
   
      
   
      
     
      <div
        className="textbox"
      >
      </div>
      <div style={{height: '10px'}}></div>
      </ul>
      <BottomNavBarTodo/>
      <div style={{height: "33px", backgroundColor:"white",width:"100vw",position:"fixed", bottom:"0px"}}></div>
  
    </div>
   
  );
}

export default BuyTemplate;