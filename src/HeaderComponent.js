import React from 'react';
import './HeaderComponent.css'
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Input} from 'antd'

export const HeaderComponent = () => {
    return (
        <div className='header-container'>
            <div className='header-menu-container'>
                <MenuIcon/>
            </div>
            <div className='header-navigation-container'>
                <ArrowBackIcon/>
                <ArrowForwardIcon/>
                <AccessTimeIcon/>
            </div>
            <div className='header-input-container'>
                <div className='input-wrapper'>
                    <Input className='search-input' placeholder='Search for channels'/>
                    <SearchIcon/>
                </div>
            </div>
            <div className='header-help-container'>
                <HelpOutlineIcon />
            </div>
        </div>
    )
}