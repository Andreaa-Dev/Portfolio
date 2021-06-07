import React from "react";
import { useHistory } from "react-router-dom";
//@ts-ignore
import CustomChatbot from "react-simple-chatbot";

function ChatBox() {
  const config = {
    hideBotAvatar: false,
    hideHeader: false,
    bubbleStyle: {
      background: "#6707a2",
      color: "black",
    },
  };
  const history = useHistory();
  const navigation = () => {
    history.push("/home");
  };
  const steps = [
    {
      id: "greet",
      message: "Hello, My name is Ngoc Anh and you can call me Andrea.",
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
        "You must be here to check out my portfolio, is that correct ? 😉 ",
      trigger: "ask me",
    },

    {
      id: "ask me",
      options: [{ value: "ok", label: "Yes", trigger: "transition" }],
      trigger: "transition",
    },
    {
      id: "transition",
      message:
        "I am a Font-End Developer based in Helsinki, Finland. I have passion for creating beautiful website with  UI effects and animation",
      trigger: "introduction",
    },

    {
      id: "introduction",
      message: "Let me show you more about what I have done",
      trigger: "next",
    },

    {
      id: "next",
      options: [
        { value: "ok", label: "Let's go !!! 😊", trigger: "portfolio" },
      ],
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
