import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import constants from "../../constants";
import styled from 'styled-components';

const BottomNavBar = () => {
  const [value, setValue] = useState(0);
  const current = ["TODO", "PLAN"];

  return (
      <StyledBottomNavBar
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          style={{paddingTop: 0}}
          icon={
            <>
              <img
                src={
                  current[value] === "TODO"
                    ? constants.TODO_COLORED
                    : constants.TODO_UNCOLORED
                }
                height={25}
              />
              <NavText selected={current[value] === "TODO"}>To do</NavText>
            </>
          }
          component={Link}
          to="/todo"
        />

        <BottomNavigationAction
          style={{paddingTop: 0}}
          icon={
            <>
              <img
                src={
                  current[value] === "PLAN"
                    ? constants.PLAN_COLORED
                    : constants.PLAN_UNCOLORED
                }
                height={25}
              />
              <NavText selected={current[value] === "PLAN"}>Plan</NavText>
            </>
          }
          component={Link}
          to="/main/maintemplategrowth"
        />
      </StyledBottomNavBar>
  );
};

export default BottomNavBar;

const NavText = styled.span`
  font-family: "SFProDisplay";
  font-size: 12px;
  color: ${props => props.selected? "#8977f7": "#c4c4c4"};
  margin-top: 2px;
`

const StyledBottomNavBar = styled(BottomNavigation)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 85px !important;
  filter: drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.04));
`