import React from "react";
import { ChannelHeaderComponent } from "./ChannelHeaderComponent";
import { ChannelMessageInputComponent } from "./ChannelMessageInputComponent";
import { ChannelMessagesComponent } from "./ChannelMessagesComponent";
import "./MessageContainer.css";
import { useState } from "react";
import { useEffect } from "react";
import { firebaseDB } from "./utils/firebase.config";
import { useParams } from "react-router";
export const MessageContainer = () => {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);
  useEffect(() => {
    channelId &&
      firebaseDB
        .collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => {
          setChannelDetails(snapshot.data());
        });

    channelId &&
      firebaseDB
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        });
  }, [channelId]);

  const handleSend = (message) => {
    message &&
      channelId &&
      firebaseDB
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
          message,
          user: "test user",
          userAvatarUrl: "https://source.unsplash.com/random/40x40",
          timestamp: Date.now(),
        });
  };

  return (
    <div className="message-container">
      <ChannelHeaderComponent channelDetails={channelDetails} />
      <ChannelMessagesComponent messages={messages} />
      <ChannelMessageInputComponent
        channelDetails={channelDetails}
        handleSend={handleSend}
      />
    </div>
  );
};
