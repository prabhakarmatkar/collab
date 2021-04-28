import React from 'react';
import './ChannelHeaderComponent.css'

export const ChannelHeaderComponent = ({channelDetails}) => {
    return (
        <div className='channel-header-container'>
            <p>
                {`# ${channelDetails.name}`}
            </p>
        </div>
    )
}