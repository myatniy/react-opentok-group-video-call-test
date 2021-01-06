import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css"

const Navbar = () => (
    <nav id="video-call-navbar">
        <header>
            <h1>Samtrygg</h1>
        </header>

        <div className="header-icons">
            <FontAwesomeIcon icon={faCalendar}/>
            <FontAwesomeIcon icon={faEnvelope}/>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    </nav>
);

export default Navbar;