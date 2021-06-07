import React from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Components/Pages/NavBar";
import ChatBox from "./Components/Pages/ChatBox";
import About from "./Components/Pages/About";
import Works from "./Components/Pages/Works";
import MainPage from "./Components/Pages/MainPage";

const Card = styled.div`
  background-color: #1c1a1a;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-center;
`;
const Item = styled.div`
  margin: auto;
`;
function App() {
  return (
    <Card className="App">
      <Switch>
        <Route exact path="/">
          <Item>
            <ChatBox />
          </Item>
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
