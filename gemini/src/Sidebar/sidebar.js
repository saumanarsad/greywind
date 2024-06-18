import React, { useState } from 'react';
import './sidebar.css';
import { assets } from '../assets/assets'
const Sidebar = () => {

    const [extended, setextended] = useState(false);
    return (
        <div className='sidebar'>
            <div className='top'>
                <img className='menu' src={assets.menu_icon} ></img>
                <div className='new-chat'>
                    <img src={assets.plus_icon}></img>
                    <p>New chat</p>
                </div>
                <div className='recent'>
                    <p className='recent-title'>Recents</p>
                    <div className='recent-entry'>
                        <img src={assets.message_icon}></img>
                        <p>What is react</p>
                    </div>
                </div>
            </div>
            <div className='bottom' >
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon}></img>
                    <p>Help</p>
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon}></img>
                    <p>History</p>
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon}></img>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;