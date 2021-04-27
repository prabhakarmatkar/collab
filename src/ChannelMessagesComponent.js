import React from 'react';
import './ChannelMessagesComponent.css'
import { MessageItemComponent } from './MessageItemComponent';

const message = {
    userName:'test user',
    timeStamp: Date.now().toLocaleString(),
    messageText:`fdgfdgg
    fdgfdgg
    gfdgdfg
    gfdgfdgdfgfdgdfgd gdfg fdsf fsdfdsfdsfds fsdfdsfds tyt juyk8k koko koko9 kok jujuy juyjuy 
    gdf hs bfhdgf bhdsg gd
    gfdgdfg
    gfdgfdgdfgfdgdfgd gdfg fdsf fsdfdsfdsfds fsdfdsfds tyt juyk8k koko koko9 kok jujuy juyjuy 
    gdf hs bfhdgf bhdsg gd`,
    userAvatarUrl:'https://source.unsplash.com/random/40x40'
}

const renderMessages = (messages) => {
    return messages.map(message => <MessageItemComponent key = {message.id} message={message}/>)
}

export const ChannelMessagesComponent = ({messages}) => {
    return (
        <div className='channel-messages-container'>
            <div className='message-list'>
                {renderMessages(messages)}
            </div>
        </div>
    )
}