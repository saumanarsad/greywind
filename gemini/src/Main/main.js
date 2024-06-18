import React from "react";
import './main.css';
import { assets } from "../assets/assets";
const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p className="gemini"></p>
                <img src={assets.user_icon}></img>
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Sauman</span></p>
                    <p>How Can I help You Today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest Best Coding Practices For 2023</p>
                        <img src={assets.compass_icon}></img>
                    </div>
                    <div className="card">
                        <p>Job Market for Software Engineers</p>
                        <img src={assets.bulb_icon}></img>
                    </div>  <div className="card">
                        <p>Will AI replace coders</p>
                        <img src={assets.code_icon}></img>
                    </div>
                    <div className="card">
                        <p>Best Honeymoon spots</p>
                        <img src={assets.message_icon}></img>
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt here"></input>
                        <div>
                            <img src={assets.gallery_icon}></img>
                            <img src={assets.mic_icon}></img>
                            <img src={assets.send_icon}></img>
                        </div>
                    </div>
                    <p className="bottom-info">
                        Some Data Maybe inaccurate.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;