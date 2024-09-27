import project1 from './assets/project1.jpg'; 
import project2 from './assets/project2.png';  
import project3 from './assets/project3.png';  
import { Link } from 'react-router-dom';
import './index.css';  
import './project.css'; 

export default function Project() {
    return (
        <>
            <section id="works">
                <h2 className="worksTitle">My Projects</h2>
                <span className="worksDesc">
                    I take pride in paying attention to the smallest details and making sure my work is pixel perfect. 
                    I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
                </span> 
                <div className="worksImgs">
                    <div className="project">
                        <Link to="/work-plug"><img src={project1} alt="Work Plug" className="worksImg" /></Link>
                        <h3>Work Plug</h3>
                        <p><strong>Role:</strong> Developer</p>
                        <p><strong>Description:</strong> A platform for service providers to find jobs and clients to hire people, encompassing all kinds of jobs from plumbers to software engineers.</p>
                    </div>
                    <div className="project">
                        <Link to="/rars"><img src={project2} alt="RARS" className="worksImg" /></Link>
                        <h3>RARS (Rapid Action Response System)</h3>
                        <p><strong>Role:</strong> Developer</p>
                        <p><strong>Description:</strong> An application that detects accidents and sends messages to 911 and family members. It can be connected to car sensors to identify accidents and will send a message once the airbags are deployed.</p>
                    </div>
                    <div className="project">
                        <Link to="/navig"><img src={project3} alt="NAVIG" className="worksImg" /></Link>
                        <h3>NAVIG</h3>
                        <p><strong>Role:</strong> Developer</p>
                        <p><strong>Description:</strong> A navigation system inside buildings that shows the easiest way to reach rooms or places, useful for large and complex buildings like hospitals, schools, and colleges.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
