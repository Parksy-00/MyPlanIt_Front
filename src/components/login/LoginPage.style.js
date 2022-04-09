import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
  position: relative;
  height: 100%;
`;

export const LogoImg = styled.img`
  margin: 200px 0 12px;
  width: 200px;
`

export const LogoText = styled.span`
  font-family: PretendardRegular;
  font-size: 16px;
  text-align: center;
  color: #929292;
  letter-spacing: -0.03em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100px;
`;

export const LoginButton = styled.img`
  width: 327px;
  margin-top: 12px;
`;