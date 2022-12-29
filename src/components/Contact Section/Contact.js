import React from "react";
import './contact.scss'
import {BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {TbClick} from 'react-icons/tb'
import {SiGmail} from 'react-icons/si'

const Contact = () => {
    return(
        <section id="contact" className="contact section container">
            <div className="sectionTitle">
                <h5 className="titleText">
                    Contact.
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="contactContainer grid">
                <div className="socialContacts grid">
                    <h3>Talk To Me...</h3>

                    <div className="cards grid">
                        <div className="card">
                            <div>
                                <BsInstagram className='icon'/>
                            </div>
                            <h4>Instagram</h4>
                            <span className="userName">
                                @_amrutm_
                            </span>

                            <div>
                                <a href="https://www.instagram.com/_amrutm_" target="_blank" className="flex">
                                    Send Your Message <TbClick className='icon'/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <BsLinkedin className='icon'/>
                            </div>
                            <h4>LinkedIn</h4>
                            <span className="userName">
                                @amrut-patil12
                            </span>

                            <div>
                                <a href="https://www.linkedin.com/in/amrut-patil12" target="_blank" className="flex">
                                    Connect Me on LinkedIn <TbClick className='icon'/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <BsTwitter className='icon'/>
                            </div>
                            <h4>Twitter</h4>
                            <span className="userName">
                                @_amrutm_
                            </span>

                            <div>
                                <a href="https://twitter.com/amrutpa01261418?t=ITAFSK91AkVH8rLQws2rmw&s=08" className="flex">
                                    Follow Me on Twitter <TbClick className='icon'/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <SiGmail className='icon'/>
                            </div>
                            <h4>Gmail</h4>
                            <span className="userName">

                            </span>

                            <div>
                                <a href="https://mailto:amrutpatil9977@gmail.com" target="_blank" className="flex">
                                   Click here to send me an email <TbClick className='icon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Contact;