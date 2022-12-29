import React from "react";
import './about.scss'
import {MdOutlineFileDownload} from 'react-icons/md'
import pic from '../../Assets/MyProPic02.png'

const About = () => {
    return(
        <section id="about" className="about section container">
            <div className="sectionTitle">
                <h5 className="titleText">
                    About Me
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="sectionContent grid">
                <div className="textSection">
                    <h4>
                    Hey, I am Amrut Patil, and I graduated in 2022 with a degree in <b>Computer Science and Engineering</b>. My interests are in <b>full stack development, android development, blockchain</b> and I love to create beautiful, performant products with delightful user experiences. During my engineering career, I worked on a variety of projects. One of the projects was a <b>college foreteller</b>, and I helped a 12th grade passout student with the fully <b>automated engineering college predictor software</b>.  <br/> Speaking about my personality, I am a <b>creative, smartworking, and innovative</b> person.<br/> I always see technology as a game changer, constantly shaping and reshaping the way we live, work, and interact with one another. <br/>That's why I am always looking for new opportunities to learn, grow, and develop as a professional, and I am eager to apply my knowledge and experience to create meaningful solutions and innovative products. 
                    </h4>

                    <div className="aboutBtn">
                        <a href="Amrut Patil.pdf" download="Amrut Patil.pdf" className="flex">
                            Download CV <MdOutlineFileDownload className='icon'/>
                        </a>
                    </div>
                </div>

                <div className="aboutImgDiv">
                    <img src={pic} alt="Amrut Patil" className="aboutImg"/>
                </div>
            </div>
        </section>
    )
}

export default About;