import React from 'react'
import './MainContainer.css'
import { HeaderComponent } from './HeaderComponent';
import { ContentComponent } from './ContentComponent';
import { FooterComponent } from './FooterComponent';
export const MainContainer = () => {
    return (
        <div className='main-container'>
            <HeaderComponent />
            <ContentComponent />
            <FooterComponent />
        </div>
    )
}