import React from "react";
import "./ContentComponent.css";
import { MessageContainer } from "../MessageContainer/MessageContainer";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ChatsContainer } from '../ChatsContainer/ChatsContainer';
export const ContentComponent = () => {
  return (
    <div className="content-container">
      <BrowserRouter>
        <ChatsContainer
        />
        <Switch>
          <Route path="/channel/:channelId">
            <MessageContainer />
          </Route>
          <Route exact path="/">
            <div>test</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
