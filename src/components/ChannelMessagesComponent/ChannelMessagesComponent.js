import React from 'react';
import './ChannelMessagesComponent.css'
import { MessageItemComponent } from '../MessageItemComponent/MessageItemComponent';

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