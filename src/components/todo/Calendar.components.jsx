import React from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { ko } from "date-fns/locale";
import DateFnsUtils from "@date-io/date-fns";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Calendar({selectedDate, setSelectedDate}) {
  const dateStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  };

  const handleDateChange = (date) => {
    sessionStorage.setItem("date", date);
    setSelectedDate(new Date(sessionStorage.getItem("date")));
  };

  return (
    <MuiPickersUtilsProvider
      locale={ko}
      utils={DateFnsUtils}
      style={{ fontFamily: "Pretendard-SemiBold" }}
    >
      <div style={dateStyle}>
        <DatePicker
          style={{
            width: "auto",
            fontFamily: "Pretendard-SemiBold",
          }}
          InputProps={{
            disableUnderline: true,
          }}
          disableToolbar
          format="M월 d일 eee요일"
          margin="normal"
          value={selectedDate}
          className="date"
          onChange={handleDateChange}
        />
        <ExpandMoreIcon
          color="black"
          fontSize="large"
          style={{
            padding: 0,
            marginTop: 5,
            marginRight: 10,
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default Calendar;
