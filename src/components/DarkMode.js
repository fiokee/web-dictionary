import React from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import "./DarkMode.css";

    const DarkMode = () => {
        //A function to set both dark and light mode
    const handleDarkMode = ()=>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const handleLightMode = ()=>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    //function to toggle between dark and light theme
    const toggleThemeMode = (e)=>{
    if(e.target.checked) handleDarkMode();
    else
        handleLightMode();
    
}
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleThemeMode}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
