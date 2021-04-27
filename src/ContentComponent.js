import React from "react";
import "./ContentComponent.css";
import { ChatsContainer } from "./ChatsContainer";
import { MessageContainer } from "./MessageContainer";
import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
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
