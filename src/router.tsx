import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "pages/chat";

export const Router: React.FC = () => (
  <Switch>
    <Route path="/chat" exact>
      <Chat />
    </Route>
  </Switch>
);
