import React from "react";
import styled from "styled-components";
import linkedin from "../Img&Video/linkedin.png";
import mail from "../Img&Video/email.png";
import github from "../Img&Video/github.png";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1a1a;
`;
const Title = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 3rem;
  color: white;
  margin-bottom: 0;
  /* @media (max-width: 15200px) {
    font-size: 7rem;
  } */
`;

const Text = styled.p`
  color: white;
  margin-top: 0;
  margin-bottom: 2rem;
  /* @media (max-width: 15200px) {
    font-size: 2rem;
  } */
`;
const Card = styled.div`
  background-color: white;
  width: 50%;
  border-radius: 7px;

  /* @media (max-width: 15200px) {
    height: 30rem;
  } */
`;
const Button = styled.button`
  height: 2rem;
  width: 7rem;
  color: white;
  background-color: #1c1a1a;
  border: solid white 0.1rem;
  border-radius: 0.5rem;
  float: right;
  cursor: pointer;
  display: block;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 0 1px white;

  :hover {
    box-shadow: 0 1px white;
    top: 2px;
  }
  :active {
    box-shadow: 0 0 white;
    top: 6px;
  }
  /* @media (max-width: 45200px) {
    font-size: 2rem;
    height: 3rem;
    width: 8rem;
  } */
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  align-items: center;
  margin-top: 2.5rem;
  /* @media (max-width: 15200px) {
    height: 5rem;
  } */
`;
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));
function About() {
  const classes = useStyles();
  return (
    <MainCard>
      <Title>Contact</Title>
      <Text>Want to work together?</Text>

      <Card>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField id="standard-basic" label="Name" />
          </div>
          <div>
            <TextField id="standard-basic" label="Email" />
          </div>
          <TextField
            id="standard-basic"
            label="Your message"
            multiline
            rows={6}
          />
        </form>
        <Button>Submit</Button>
      </Card>
      <IconCard>
        <a href="mailto:ngocanhhsgs@gmail.com">
          <img src={mail} alt="error" />
        </a>
        <a
          href="https://www.linkedin.com/in/anh-nguyen-17ba91115/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="error" />
        </a>
        <a
          href="https://github.com/Andreaa-Dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="error" />
        </a>
      </IconCard>
    </MainCard>
  );
}

export default About;
