import React from "react";
import styled from "styled-components";
import project1 from "../Img&Video/project1.png";
import project2 from "../Img&Video/project2.png";
import project3 from "../Img&Video/project3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const MainCard = styled.div`
  background-color: #1c1a1a;
  background-size: cover;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Card = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
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
  @media (max-width: 1200px) {
    :hover {
      transform: scale(1.2) translateY(10%);
    }
  }
`;
const Box = styled.div`
  background-color: #1c1a1a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin: 4rem auto 4rem auto;
  height: 13rem;
  width: 60vw;
`;

const Img = styled.img`
  height: 15rem;
  width: 17rem;
  :hover {
    opacity: 0.3;
    filter: grayscale(100%);
  }
`;

const Box1 = styled.div`
  margin-top: 2rem;
  position: relative;
  margin: 10px 1%;
  background-color: #555050;
  box-sizing: border-box;
  float: left;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  @media (max-width: 1200px) {
    width: 30%;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 1rem;
  border-radius: 50%;
  background: #ffffff;
  transform: scale(0) translate(-50%, -50%);
  transition: transform 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  ${Box1}:hover & {
    transform: scale(1) translate(-50%, -50%);
    transition: transform 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
const Text = styled.p`
  text-align: center;
  color: white;
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
      </Card>
      <Text>
        Others: Class components, Libraries:Material UI, Styled-Component,
        Responsive website, GSAP and Figma.
      </Text>

      <div>
        <Box>
          <Box1>
            <Img src={project1} alt="error" />
            <Icon icon={faHamburger} color="#f9d508" size="2x" />
          </Box1>

          <div>
            <h1>Burger Heaven</h1>
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
            <p>
              Description: TypeScript, CSS, React, Styled-components, Animation
            </p>
            <a
              href="https://github.com/Andreaa-Dev/Web-design-project"
              target="_blank"
              rel="noreferrer"
            >
              <Button>GitHub Link</Button>
            </a>
          </div>
          <Box1>
            <Img src={project2} alt="error" />

            <Icon icon={faCoffee} color="#32bd71" size="2x" />
          </Box1>
        </Box>
        <Box>
          <Box1>
            <Img src={project3} alt="error" />

            <Icon icon={faCamera} color="#d33d0f" size="2x" />
          </Box1>

          <div>
            <h1>Leica</h1>
            <p>Description: TypeScript React, Styled-components, Animation.</p>
            <a
              href="https://github.com/Andreaa-Dev/Web-design-project"
              target="_blank"
              rel="noreferrer"
            >
              <Button>GitHub Link</Button>
            </a>
          </div>
        </Box>
      </div>
    </MainCard>
  );
}

export default Works;
