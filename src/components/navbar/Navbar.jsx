import React from 'react';

import "./Navbar.css"
import CalendarSVG from "../../svg/Calendar.svg";
import MessagesSVG from "../../svg/Messages.svg";
import MenuSVG from "../../svg/Menu.svg";

const Navbar = () => (
    <nav id="video-call-navbar">
        <header>
            <h1>Samtrygg</h1>
        </header>

        <div className="header-icons">
            <img src={CalendarSVG} alt="calendar" />
            <img src={MessagesSVG} alt="messages" />
            <img src={MenuSVG} alt="menu" />
        </div>
    </nav>
);

export default Navbar;