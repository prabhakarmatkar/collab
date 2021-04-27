import React from 'react';
import './ChannelMessageInputComponent.css'
import {Input,Button} from 'antd'
import { useState } from 'react';

export const ChannelMessageInputComponent = ({handleSend}) => {
    const [messageText,setMessageText] = useState('');

    return (
        <div className='channel-message-input-container'>
            <Input value = {messageText} onChange = {(e) => {
                setMessageText(e.target.value)
            }} placeholder='Type a message here' className='message-input'/>
            <Button type='primary' onClick={() => {
                setMessageText('')
                handleSend(messageText)}}>
                Send
            </Button>
        </div>
    )
}