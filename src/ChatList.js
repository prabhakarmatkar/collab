import React from 'react'
import './ChatList.css'
import { ChatListItemComponent } from './ChatListItemComponent'

export const ChatList = ({channels}) => {
    return channels.map(channel => <ChatListItemComponent key={channel.id} {...channel} />)
}