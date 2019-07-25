import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import "../App.css"
import headerStyles from "../styles/header.module.css"

const Header = (props) => {
    return (
        <div className={headerStyles.headerContainer} >
            <h2>{props.title || "header"}</h2>
            <ul>
                <li><NavLink exact activeClassName="am-active" to="/">Todo App</NavLink></li>
                <li><NavLink activeClassName="am-active" to="/likesApp">Likes App</NavLink></li>
                <li><NavLink activeClassName="am-active" to="/localStorage">Local Storage</NavLink></li>
            </ul>
        </div>

    )
}

export default Header;