import React from "react";
import './project.scss'
import img6 from '../../Assets/img6.png'
import {BsGithub}  from 'react-icons/bs'




const Project = () => {

    const data = [
        {
            id: 1,
            image: img6,
            demo: '',
            liveLink: 'https://www.google.com',
            github: '',
            title: 'Hotel Incidents Docket',
            desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the',
            tech1: 'Html',
            tech2: 'CSS',
            tech3: 'JavaScript',
            tech3: 'PHP',
        },
        {
            id: 2,
            image: img6,
            demo: '',
            liveLink: '',
            github: '',
            title: 'Hotel Incidents Docket',
            desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the',
            tech1: 'Html',
            tech2: 'CSS',
            tech3: 'JavaScript',
            tech3: 'PHP',
        },
        {
            id: 3,
            image: img6,
            demo: '',
            liveLink: '',
            github: '',
            title: 'Hotel Incidents Docket',
            desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the',
            tech1: 'Html',
            tech2: 'CSS',
            tech3: 'JavaScript',
            tech3: 'PHP',
        },
        {
            id: 4,
            image: img6,
            demo: '',
            liveLink: '',
            github: '',
            title: 'Hotel Incidents Docket',
            desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the',
            tech1: 'Html',
            tech2: 'CSS',
            tech3: 'JavaScript',
            tech3: 'PHP',
        },
        {
            id: 5,
            image: img6,
            demo: '',
            liveLink: '',
            github: '',
            title: 'Hotel Incidents Docket',
            desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the',
            tech1: 'Html',
            tech2: 'CSS',
            tech3: 'JavaScript',
            tech3: 'PHP',
        },
    ]
    return(
        <section id="project" className="projects container section">
            <div className="sectionTitle">
                <h5 className="titleText">
                    Projects
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="projectContainer grid">
                {
                    data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4}) => {
                        return(
                            <div key={id} className="singleProject">
                                <div className="externalLinks flex">
                                    <div className="githubIcon">
                                        <a href="{github}" target="_blank">
                                            <BsGithub className='icon'/>
                                        </a>
                                    </div>
                                </div>

                                <div className="imgDiv">
                                    <a href={liveLink} target="_blank">
                                        <img src={image} alt={title} />
                                    </a>
                                </div>

                                <div className="projectTitle">
                                    <h3>{title}</h3>
                                </div>

                                <div className="desc">
                                    {desc}
                                </div>

                                <div className="technologies flex">
                                    <small>{tech1}</small>
                                    <small>{tech2}</small>
                                    <small>{tech3}</small>
                                    <small>{tech4}</small>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project;