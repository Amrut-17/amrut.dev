import React from "react";
import './home.scss'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs' 
import {BsTwitter} from 'react-icons/bs' 
import {BsInstagram} from 'react-icons/bs' 
import {MdDoubleArrow} from 'react-icons/md' 
import {HiOutlineChevronDoubleDown} from 'react-icons/hi' 

const Home = () => {
    return(
        <section id="home" className="home section">
            {/* LEFT SIDE FOR WIDE SCREEN ONLY */}
            <div className="leftIcons">
                <div className="socials grid">
                    <a href="https://github.com/Amrut-17" target='_blank'>
                        <BsGithub className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/amrut-patil12/" target='_blank'>
                        <BsLinkedin className="icon"/>
                    </a>
                    <a href="https://twitter.com/amrutpa01261418?t=ITAFSK91AkVH8rLQws2rmw&s=08" target='_blank'>
                        <BsTwitter className="icon"/>
                    </a>
                    <a href="https://www.instagram.com/_amrutm_/" target='_blank'>
                        <BsInstagram className="icon"/>
                    </a>
                    
                </div>
                <div className="line"></div>
            </div>

            <div className="container homeContainer">
                <span className="introText">
                    Hello, I am,
                </span>
                <h1 className="title">
                    Amrut Patil.
                </h1>
                <span className="subTitle">
                    Web Developer | Programmer 
                </span>
                <p className="homeParagraph">
                Creative | Tech-savvy | Problem-solver
                </p>

                <div className="lowerHomeSection">
                    <button className="contactBtn">
                        <a href="#contact" className="flex">
                            Contact Me <MdDoubleArrow className='icon'/> 
                        </a>
                    </button>
                </div>

                <div className="scrollDiv">
                    <a href="#about" className="flex">
                        <HiOutlineChevronDoubleDown className='icon'/>
                    </a>
                </div>
            </div>

            {/* RIGHT SIDE FOR WIDE SCREEN ONLY */}
            <div className="rightEmail">
                <div className="">
                    <div className="emailAddress">
                        <a href="https://mailto:amrutpatil9977@gmail.com" target='_blank'>
                            amrutpatil9977@gmail.com
                        </a>
                    </div>
                    <div className="line"></div>
                </div>
            </div>


        </section>
    )
}

export default Home;