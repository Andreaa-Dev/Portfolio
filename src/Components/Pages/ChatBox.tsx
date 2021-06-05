import React from "react";
import { useHistory } from "react-router-dom";
//@ts-ignore
import CustomChatbot from "react-simple-chatbot";

function ChatBox() {
  const config = {
    hideBotAvatar: false,
    hideHeader: true,
    bubbleStyle: {
      background: "#ba17fa",
    },
  };
  const history = useHistory();
  const navigation = () => {
    history.push("/home");
  };
  const steps = [
    {
      id: "greet",
      message: "Hello, My name is Ngoc Anh and you can call me Andrea",
      trigger: "ask username",
    },
    {
      id: "ask username",
      message: "What is your name ?",
      trigger: "userName",
    },
    {
      id: "userName",
      user: true,
      trigger: "ask user",
    },
    {
      id: "ask user",
      message: "Hi, {previousValue}",
      trigger: "ask user purpose",
    },
    {
      id: "ask user purpose",
      message:
        "You must be here to check out my portfolio, is that correct ? 😀",
      trigger: "ask me",
    },
    {
      id: "ask me",
      message:
        "You must be here to check out my portfolio, is that correct ? 😀",
      trigger: "intro",
    },
    {
      id: "intro",
      message: "Let me show you more about what I have learned",
      trigger: "ok",
    },
    {
      id: "ok",
      options: [{ value: "ok", label: "Ok", trigger: "transition" }],
    },
    {
      id: "transition",
      message: "take a look on the right side",

      trigger: "portfolio",
    },
    {
      id: "portfolio",
      message: navigation,
      end: true,
    },
  ];

  return (
    <div>
      <CustomChatbot {...config} steps={steps} />
    </div>
  );
}

export default ChatBox;
