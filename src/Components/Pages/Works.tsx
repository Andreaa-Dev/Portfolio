import React from "react";
import styled from "styled-components";
import project1 from "../Img&Video/project1.png";
import project2 from "../Img&Video/project2.png";
import project3 from "../Img&Video/project3.png";

const MainCard = styled.div`
  background-color: #1c1a1a;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const Card = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5rem;
`;
const Title = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 3rem;
  color: white;
  margin: 2rem auto 2rem auto;
  text-align: center;
`;
const Items = styled.div`
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.2) translate(-10%, -10%);
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin: 4rem auto 4rem auto;
  height: 10rem;
  width: 60vw;
`;
const Img = styled.img`
  height: 10rem;
  width: 17rem;
`;
const Text = styled.h1`
  margin-top: 0;
`;

const Button = styled.button`
  background-color: #1c1a1a;
  border: solid white 0.1rem;
  border-radius: 1rem;
  height: 2rem;
  width: 7rem;
  color: white;
  margin-top: 1rem;
`;

function Works() {
  return (
    <MainCard>
      <Title>I'm familiar with</Title>
      <Card>
        <Items>HTML</Items>
        <Items>CSS</Items>
        <Items>JavaScript</Items>
        <Items>TypeScript</Items>
        <Items>React</Items>
        <Items>Libraries and Figma </Items>
      </Card>
      <div>
        <Box>
          <Img src={project1} alt="error" />
          <div>
            <Text>Burger Heaven</Text>
            <p>Description: JavaScript, CSS, React, Redux, Styled-components</p>
            <a
              href="https://github.com/Andreaa-Dev/Burger-restaurant"
              target="_blank"
              rel="noreferrer"
            >
              <Button>GitHub Link</Button>
            </a>
          </div>
        </Box>
        <Box>
          <div>
            <h1>StarBuck</h1>
            <p>Description: JavaScript, CSS, React, Redux, Styled-components</p>
            <Button>GitHub Link</Button>
          </div>
          <Img src={project2} alt="error" />
        </Box>
        <Box>
          <Img src={project3} alt="error" />
          <div>
            <h1>Leica</h1>
            <p>Description: JavaScript, CSS, React, Redux, Styled-components</p>
            <Button>GitHub Link</Button>
          </div>
        </Box>
      </div>
    </MainCard>
  );
}

export default Works;
