import React from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import ChatBox from "./Components/Pages/ChatBox";

import NavBar from "./Components/Pages/NavBar";

import About from "./Components/Pages/About";
import Works from "./Components/Pages/Works";
import MainPage from "./Components/Pages/MainPage";
//@ts-ignore

const Card = styled.div`
  background-color: #1c1a1a;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-center;
`;

function App() {
  return (
    <Card className="App">
      <Switch>
        <Route exact path="/">
          <ChatBox />
        </Route>
        <Route exact path="/home">
          <NavBar />
          <MainPage />
        </Route>
        <Route exact path="/works">
          <NavBar />
          <Works />
        </Route>
        <Route exact path="/about">
          <NavBar />
          <About />
        </Route>
      </Switch>
    </Card>
  );
}

export default App;
