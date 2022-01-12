
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { useNavigate } from "react-router-dom";
import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ko } from "date-fns/locale";

function EricsTodo() {
    let navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
  return (
    <div className="container">
       <MuiPickersUtilsProvider locale={ko} utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="outline"
        format="MM월 dd일 eee요일"
        margin="normal"
        id="date-picker-outline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight:"bold"}}
      >
        <Link
       to='../main/maintemplateroutine'
        className="main-routine-button"
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
        PLAN
      </Link>
      <div style={{width: '5vw'}}></div>
      <Link
        style={{border: '1px solid #D3d3d3'}}
        to='../main/maintemplategrowth'
        className="main-growth-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'white',
        borderRadius: '0',
        color: 'gray'}}
      >
        MY
      </Link>
      <div style={{width: "55vw"}}></div>
      </span>
       <div style={{height: '10px'}}></div>
     
      <BottomNavBarTodo/>
    </div>
   
  );
}

export default EricsTodo;
