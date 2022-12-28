import React from "react";
import './skill.scss'
import {FaJava} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiPython} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {SiDjango} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {DiBootstrap} from 'react-icons/di'
import {DiGitBranch} from 'react-icons/di'
import {FaDocker} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {GrHeroku} from 'react-icons/gr'

const Skill = () => {
    return(
        <section id="skill" className="skills section container">
            <div className="sectionTitle">
                <h5 className="titleText">
                    Skills
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="skillsContainer grid">

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Programming Languages </h2>
                    </div>
                    <div className="skillsBtns">
                        <button className="java sbtn ">
                            Java <FaJava className="icon"/>
                        </button>
                        <button className="javaScript sbtn ">
                            JavaScript <DiJavascript1 className="icon"/>
                        </button>
                        <button className="python sbtn">
                            Python <SiPython className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Web Development</h2>
                    </div>
                    <div className="skillsBtns">
                        <button className="java sbtn">
                            ReactJS <GrReactjs className="icon"/>
                        </button>
                        <button className="django sbtn">
                            Django <SiDjango className="icon"/>
                        </button>
                        <button className="html sbtn">
                            HTML5 <FaHtml5 className="icon"/>
                        </button>
                        <button className="css sbtn">
                            CSS <FaCss3Alt className="icon"/>
                        </button>
                        <button className="bootstrap sbtn">
                            BootStrap <DiBootstrap className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Developer Tools</h2>
                    </div>
                    <div className="skillsBtns">
                        <button className="git sbtn">
                            Git <DiGitBranch className="icon"/>
                        </button>
                        <button className="docker sbtn">
                            Docker <FaDocker className="icon"/>
                        </button>
                        <button className="heroku sbtn"
                        >Heroku <GrHeroku className="icon"/>
                    </button>
                        <button className="mysql sbtn">
                            MySQL <SiMysql className="icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;