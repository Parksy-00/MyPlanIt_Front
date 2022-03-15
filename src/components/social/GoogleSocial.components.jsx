import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import styled from "styled-components";

function GoogleSocial() {
  useEffect(() => {
    const code = window.location.href.split("=")[1].slice(0, -6);
    console.log(code);
    axios
      .post(
        `https://oauth2.googleapis.com/token?code=${code}&clientid=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&clientsecret=${process.env.REACT_APP_GOOGLE_SECRET_KEY}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&grant_type=authorization_code`,
        {
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          client_secret: process.env.REACT_APP_GOOGLE_SECRET_KEY,
          code: code,
          grant_type: "authorization_code",
        }
      )
      .then((response) => {
        console.log(response);
        axios
          .get(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.data.access_token}`
          )
          .then((response) => {
            console.log(response);
            // const data = response.data;
            // sessionStorage.setItem("access", data.django_token.access);
            // sessionStorage.setItem("refresh", data.django_token.refresh);
          });
      });
  });

  return (
    <LoadingIcon>
      <Loading color="secondary" />
    </LoadingIcon>
  );
}

const LoadingIcon = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GoogleSocial;
