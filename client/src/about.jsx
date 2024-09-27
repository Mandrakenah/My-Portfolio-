import React from 'react';
import '../src/about.css';
import BBG from '../src/assets/profile.png';

export default function About() {
    return (
        <section id="aboutMe">
            <h1>About Me</h1>
            <div className="aboutContent">
                <img src={BBG} alt="Profile of Arjun" className="profileImage" />
                <div className="aboutText">
                    <h2>Arjun Saji</h2>
                    <p>
                        I am a dedicated web designer and developer, passionate about creating efficient and user-friendly applications. I am experienced in web development technologies such as HTML, CSS, and JavaScript. Currently, I'm working on an application called 'Work Plug,' which connects employers and job seekers. Another project I'm proud of is an app that sends automatic messages to 911 and family in case of accidents.
                    </p>
                    <a href="..//src/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="resumeLink">
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
