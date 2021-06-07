import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../Img&Video/logo.png";

const NavBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #222222;
  height: 4rem;
`;

const Card = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 3rem;
  color: white;
  margin: auto;
  margin-left: 1rem;
  /* margin: 1rem auto 1rem auto; */
`;
const Text = styled.p`
  font-size: 1rem;
  padding: 0;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
function NavBar() {
  return (
    <NavBarStyle>
      <Title>Andrea</Title>
      <Card>
        <Text>
          <CustomLink to="/home">HOME</CustomLink>
        </Text>
        <Text>
          <CustomLink to="/works">WORKS</CustomLink>
        </Text>
        <Text>
          <CustomLink to="/about">CONTACT</CustomLink>
        </Text>
      </Card>
    </NavBarStyle>
  );
}

export default NavBar;
