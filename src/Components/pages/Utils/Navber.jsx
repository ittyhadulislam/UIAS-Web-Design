// import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navber = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-content">
                <h1 className="nav-title">UIAS</h1>
                <ul className="nav-manu">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"../About"}>About</Link></li>
                    <li><Link to={"../Participants"}>Participants</Link></li>
                    <li><Link to={"../Participate"}>Participate</Link></li>
                    <li><Link to={"../Contact"}>Contact</Link></li>

                </ul>
                <img className="head-image" src="head.jpg" alt="" />
            </div>
        </div>
    );
};

export default Navber;