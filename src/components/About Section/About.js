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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi a repellendus voluptate blanditiis quidem ullam, accusamus aut cupiditate? Necessitatibus mollitia qui quidem <br/>repudiandae iure voluptatibus, earum facilis maiores ipsam incidunt culpa inventore aliquid harum molestias expedita soluta doloremque dignissimos nostrum fugiat. Consectetur maxime ut eligendi amet vero repellendus in laboriosam dolorem sed magnam enim distinctio harum, blanditiis, deserunt dignissimos accusantium, beatae quam illum corrupti recusandae porro architecto! <br/> Accusamus quod dolore aliquid voluptatem ipsa quis iusto? Beatae, error assumenda reprehenderit suscipit sunt rerum nesciunt atque tempora mollitia, veniam quia a illo adipisci porro totam cupiditate. Voluptatem alias hic non molestiae.
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