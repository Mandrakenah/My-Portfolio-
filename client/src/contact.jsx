import '../src/contact.css';

export default function Contact() {
    return (
        <>
            <section className="contact-section">
                <h2>Contact Me</h2>
                <form id="contactForm">
                    <div className="form-group">
                        <label htmlFor="myFName">First Name:</label>
                        <input type="text" id="myFName" name="myFName" required placeholder="Arjun" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="myLName">Last Name:</label>
                        <input type="text" id="myLName" name="myLName" required placeholder="Saji" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="myEmail">Email:</label>
                        <input type="email" id="myEmail" name="myEmail" required placeholder="arjun000saji@gmail.com" />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>

                <div className="contact-info">
                    <p>Call me at: <strong>(437) 662 1536 </strong></p>
                    <p>Instagram: <a href="https://www.instagram.com/__.mandrak.e__/">Instagram.com</a></p>
                    <p>Email: <a href="arjun000saji@gmail.com">@gmail.com</a></p>
                </div>
            </section>
        </>
    );
}
