import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";

function PlanCard({
  title,
  profile_img,
  plan_img,
  writer_name,
  writer_intro,
  desc,
  tags,
  onClick,
}) {
  return (
    <Container onClick={onClick}>
      <PlanTitle>{title}</PlanTitle>

      <PlanImg src={plan_img} />

      <PlanContent>
        <ProfileContainer>
          <ProfileImg src={profile_img} alt="profile_img" />
          <Profile>
            <ProfileText>{writer_intro}</ProfileText>
            <ProfileText isName>{writer_name}</ProfileText>
          </Profile>
          {/* <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <FavoriteIcon
              style={{
                color: "#8977f7",
                filter: " drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))",
              }}
            />
          </div> */}
        </ProfileContainer>
        <PlanDesc>{desc}</PlanDesc>

        <PlanFooter>
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </PlanFooter>
      </PlanContent>
    </Container>
  );
}

export default PlanCard;

const Container = styled.div`
  box-sizing: border-box;
  padding: 5px 5px 5px 5px;
  border-radius: 4px;
  margin: 10px;
  width: 327px;
  background-color: "white";
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlanTitle = styled.div`
  width: 299px;
  margin: 7px 14px;
  color: black;
  font-family: "PretendardMedium";
`;

const PlanImg = styled.img`
  width: 299px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
`;

const PlanContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 299px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 299px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 2px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: black;
  justify-content: center;
`;

const ProfileText = styled.div`
  font-size: 13px;
  font-family: ${(props) =>
    props.isName ? "PretendardMedium" : "PretendardRegular"};
  font-weight: 400;
`;

const PlanDesc = styled.div`
  font-size: 12px;
  margin: 4px;
  font-family: "PretendardRegular";
  color: #929292;
`;

const PlanFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 4px;
  margin-bottom: 10px;
`;

const Tag = styled.div`
  width: 45px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-size: 10px;
  color: #7965f4;
  border-radius: 4px;
  margin-right: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  font-family: "PretendardRegular";
`;
