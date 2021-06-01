import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 3rem;
  color: white;
  margin: auto;
  margin-left: 1rem;
  /* margin: 1rem auto 1rem auto; */
`;
function About() {
  return (
    <div>
      <Title>Keep in touch</Title>
    </div>
  );
}

export default About;
