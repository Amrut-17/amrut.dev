import React, { useState } from "react";
import './navbar.scss'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {

    const[active, setActive] = useState("navBar")

    const showNavBar = () =>{
        setActive(
            "navBar activeNavBar"
        )
    }

    const removeNavBar = () =>{
        setActive(
            "navBar"
        )
    }

    const[activeHeader, setActiveHeader] = useState('header')
    const addBgNavbar = () =>{
        if(window.scrollY >= 10){
            setActiveHeader('header activeHeader')
        } else{
            setActiveHeader('header')
        }
    }

    window.addEventListener('scroll', addBgNavbar)

    return(
        <header className={activeHeader}>
            <div className="logoDiv">
                <h1 className="logo">
                    <a href="#home">Amrut.</a>
                </h1>
            </div>

            <div className={active}>
                <ul onClick={removeNavBar} className="navList">
                    <li className="navItem">
                        <a href="#about" className="navLink">
                            About
                        </a>
                    </li>
                    <li className="navItem" >
                        <a href="#skill" className="navLink">
                            Skills
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#project" className="navLink">
                            Projects
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#contact" className="navLink">
                        Contacts
                        </a>
                    </li>
                    <button className="btn">
                        <a href="Amrut Patil.pdf" download="Amrut Patil.pdf">
                            Download Resume 
                        </a>
                    </button>
                </ul>

                <div onClick={removeNavBar} className="closeNavBar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNavBar} className="toggleNavBar">
                <TbGridDots className='icon'/>
            </div>
        </header>
    )
}

export default Navbar;