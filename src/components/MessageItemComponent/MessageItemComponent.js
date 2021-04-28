import React from 'react';
import './MessageItemComponent.css'
import {Avatar} from 'antd';

export const MessageItemComponent = ({message}) => {
    return (
        <div className='message-item-container'>
            <div className='user-avatar'>
            <div>
                <Avatar shape={'circle'} size= {40} src={message.userAvatarUrl} />
            </div>
                
            </div>
            <div className='message-wrapper'>
                <div className='user-name'>
                    <h3>{message.user}</h3>
                    <p>{new Date(message.timestamp).toUTCString()}</p>
                </div>
                <div className='message-text'>
                    {message.message}
                </div>
            </div>
        </div>
    )
}