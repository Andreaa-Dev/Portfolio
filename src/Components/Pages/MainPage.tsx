import React from "react";
import styled from "styled-components";
import MainPageImg from "../Img&Video/MainPageImg.png";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8rem;
`;
const Img = styled.img`
  margin-left: 7rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: 0.5s;
`;
const Text = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 700;
  margin-top: 7rem;
`;
const P1 = styled.p`
  color: white;
  font-size: 3rem;
  margin: 0rem;
  animation-name: title;
  animation-duration: 4s;
}

@keyframes title {
  0%   { left:0px; top:0px;}
  25%  { left:200px; top:0px;}
  
}
`;
const P2 = styled.p`
  color: #c9c6c6;
  /* font-size: 3rem; */
  margin: 0rem;
`;
const SmallText = styled.span`
  color: #e12b49;
  font-size: 3rem;
`;

const Button = styled.button`
  background-color: #1c1a1a;
  border: solid #e12b49 0.1rem;
  border-radius: 1rem;
  height: 2rem;
  width: 7rem;
  color: #e12b49;
  margin-top: 1rem;
  box-shadow: 0 0.1rem #be12b49;
  :hover {
    border: solid #e12b49 0.1rem;
    background-color: white;
  }
`;

function MainPage() {
  return (
    <div>
      <Card>
        <Text>
          <P1>Hi,</P1>
          <P1>
            I'm <SmallText>ANDREA</SmallText>
          </P1>
          <P1>Web developer</P1>
          <P2>CSS/JavarScript/React</P2>
          <Button>Contact me</Button>
        </Text>
        <Img w3-center w3-animate-fading src={MainPageImg} alt="" />
      </Card>
    </div>
  );
}

export default MainPage;
