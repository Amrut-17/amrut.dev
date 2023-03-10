import React from "react";
import './project.scss'
import img6 from '../../Assets/img6.png'
import blog from '../../Assets/blog.png'
import college from '../../Assets/college.png'
import cab from '../../Assets/cab.png'
import socialD from '../../Assets/socialD.png'
import {BsGithub}  from 'react-icons/bs'




const Project = () => {

    const data = [
        {
            id: 1,
            image: blog,
            demo: '',
            liveLink: 'https://blog-amrut.herokuapp.com/',
            github: 'https://github.com/Amrut-17/BlogApp',
            title: 'Blog App',
            desc: 'Microblogging is very popular nowadays. BlogApp is a web-based application that lets you create new posts, edit existing ones, delete them, and update them. We also included a user authentication system in blogapp. The app is deployed on Heroku',
            tech1: 'Django',
            tech2: 'HTML',
            tech3: 'CSS',
            tech3: 'JavaScript',
            tech4:'Bootstrap',
        },
        {
            id: 2,
            image: college,
            demo: '',
            liveLink: 'https://collegeforetellers.herokuapp.com/',
            github: 'https://github.com/Amrut-17/CollegeForeteller',
            title: 'COLLEGE FORETELLER',
            desc: 'The College Foreteller System is a platform that predicts the list of engineering colleges in Maharashtra. The project uses machine learning’s logistic regression method to generate a list of engineering colleges by analysing previous years’ data.',
            tech1: 'Machine Learning',
            tech2: 'Django',
            tech3: 'SQLite',
            tech4: 'Html  CSS',
            // tech5: 'Bootstrap',
        },
        {
            id: 3,
            image: cab,
            demo: '',
            liveLink: 'https://github.com/Amrut-17/Find-My-CAB',
            github: 'https://github.com/Amrut-17/Find-My-CAB',
            title: 'Find My Cab',
            desc: 'This is a cab booking system built with socket programming and the great circle distance method. When the user enters his current location\'s latitude and longitude, the nearest cab driver in that area is activated.',
            tech1: 'Socket Programming',
            tech2: 'TCP Protocol',
            tech3: 'C ',
            // tech3: 'PHP',
        },
        {
            id: 4,
            image: socialD,
            demo: '',
            liveLink: '',
            github: '',
            title: 'Social Distancing Detector',
            desc: 'During the COVID outbreak, it was not possible to check social distancing with the naked eye. That’s why my software automatically highlights people who don’t follow social distancing rules.',
            tech1: 'Machine Learning',
            tech2: 'YOLO',
            tech3: 'Python',
            // tech3: 'PHP',
        },
        // {
        //     id: 5,
        //     image: img6,
        //     demo: '',
        //     liveLink: '',
        //     github: '',
        //     title: 'Hotel Incidents Docket',
        //     desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the',
        //     tech1: 'Html',
        //     tech2: 'CSS',
        //     tech3: 'JavaScript',
        //     tech3: 'PHP',
        // },
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
                                        <a href={github} target="_blank">
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
                                    <small>{tech1} |</small>
                                    <small>{tech2} |</small>
                                    <small>{tech3} |</small>
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