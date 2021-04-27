import React, { useEffect, useState } from "react";
import "./ChatsContainer.css";
import { ChatList } from "./ChatList";
import { firebaseDB } from "./utils/firebase.config";
export const ChatsContainer = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    firebaseDB.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  }, []);

  const addChannel = () => {
      const channelName = prompt('Please enter channel name');
      channelName && firebaseDB.collection("channels").add({
          name:channelName
      })
  }
  return (
    <div className="chats-container">
      <button onClick={addChannel}>+</button>
      <ChatList channels={channels} />
    </div>
  );
};
