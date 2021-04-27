import { React } from 'react';
import { Link } from 'react-router-dom';
import "./ChatListItemComponent.css";

export const ChatListItemComponent = ({id,name}) => {
    return <Link to={`/channel/${id}`} className='chat-list-item-container-link'><div className='chat-list-item-container'> # {name} </div></Link>
}