import React from 'react'
import './MainContainer.css'
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { ContentComponent } from '../ContentComponent/ContentComponent';
import { FooterComponent } from '../FooterComponent/FooterComponent';
export const MainContainer = () => {
    return (
        <div className='main-container'>
            <HeaderComponent />
            <ContentComponent />
            <FooterComponent />
        </div>
    )
}