import React from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { ko } from "date-fns/locale";
import DateFnsUtils from "@date-io/date-fns";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

function Calendar({ selectedDate, setSelectedDate }) {
  const handleDateChange = (date) => {
    sessionStorage.setItem("date", date);
    setSelectedDate(new Date(sessionStorage.getItem("date")));
  };

  return (
    <Container>
      <MuiPickersUtilsProvider
        locale={ko}
        utils={DateFnsUtils}
      >
        <StyledDatePicker
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <ExpandMoreIcon
                color="black"
                fontSize="large"
              />
            ),
          }}
          disableToolbar
          format="M월 d일 eee요일"
          margin="normal"
          value={selectedDate}
          className="date"
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </Container>
  );
}

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

const StyledDatePicker = styled(DatePicker)`
  width: auto;
  font-family: "PretendardSemiBold"

`
