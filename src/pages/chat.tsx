import React from "react";
import MainLayout from "layouts/MainLayout";
import ChatContainer from "containers/ChatContainer";

const Chat: React.FC = () => {
  return (
    <MainLayout>
      <ChatContainer />
    </MainLayout>
  );
};

export default Chat;
