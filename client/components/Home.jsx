import { useEffect } from 'react';
import BBG from '../src/assets/profile.png';
import '../src/index.css';

export default function Home() {
    useEffect(() => {
        const welcomeMessage = document.querySelector('.hello');
        let index = 0;
        const message = "Hello, I'm Arjun Saji!";
        
        const typingEffect = setInterval(() => {
            if (index < message.length) {
                welcomeMessage.textContent += message.charAt(index);
                index++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100); 

        return () => clearInterval(typingEffect);
    }, []);

    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <span className="hello"></span><br />
                    <span className="introText">
                        I am <span className="introName">Arjun Saji</span>
                        <img src={BBG} alt="profile" className="bbg" />
                        <br />Website Designer
                    </span>
                    <p className="introPara">
                        I am a skilled web designer with experience in creating visually appealing user-friendly websites.
                    </p>
                    <p className="missionStatement">
                        My mission is to deliver exceptional web solutions that enhance user experience and engagement.
                    </p>
                    <a href="/assets/resume.pdf" download className="btn">Download My Resume</a>
                    <a href="/about" className="btn">About Me</a>
                </div>
            </section>
        </>
    );
}
