import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import constants from "../../constants";
import styled from 'styled-components';

const BottomNavBar = ({ current }) => {

  return (
      <StyledBottomNavBar
        showLabels
      >
        <BottomNavigationAction
          style={{paddingTop: 0}}
          icon={
            <>
              <img
                src={
                  current === "TODO"
                    ? constants.TODO_COLORED
                    : constants.TODO_UNCOLORED
                }
                height={25}
              />
              <NavText selected={current === "TODO"}>To do</NavText>
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
                  current === "PLAN"
                    ? constants.PLAN_COLORED
                    : constants.PLAN_UNCOLORED
                }
                height={25}
              />
              <NavText selected={current === "PLAN"}>Plan</NavText>
            </>
          }
          component={Link}
          to="/planmarket"
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