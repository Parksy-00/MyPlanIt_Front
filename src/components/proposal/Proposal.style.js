import styled from "styled-components";

export const Header = styled.div`
  background: #fbfbfb;
  width: 327px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px;
`;

export const Title = styled.div`
  font-family: "PretendardMedium";
  font-size: 18px;
  height: 30px;
  line-height: 30px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0 28px;
`;

export const InputField = styled.textarea`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.warning? "#F87676": "#CECECE"};
    font-family: "PretendardRegular";
    font-size: 13px;
  }
  width: 330px;
  height: 136px;
  border: 1px ${props => props.warning? "#F87676": "#EDEDED"} solid;
  border-radius: 6px;
  vertical-align: top;
  resize: none;
  outline: none;
  padding: 14px;
  font-family: "PretendardRegular";
  font-size: 12px;
`;

export const Button = styled.button`
  width: 327px;
  height: 48px;
  background-color: #7965f4;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 12px;
  font-family: "PretendardMedium";
`;

export const Hr = styled.div`
  display: flex;
  width: 100%;
  background-color: #f1f3f5;
  padding: 5px 0;
`;

export const Content = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const CardContainer = styled.div`
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;

`;

export const ContentTitle = styled.p`
  margin-bottom: 16px;
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.3px;
  width: 100%;
`;