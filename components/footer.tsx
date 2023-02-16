

export default function Footer() {
    return <footer>
        <div className="container">
            <div className="footer-left">
                <div className='inner'>
                    <h2 className="subtitle">Let's talk</h2>
                    <p className="title">Connect with me to learn more about my experience and expertise</p>
                    <p>Whether you're looking to collaborate on a project, discuss potential job opportunities, or just want to say hello, I'd love to hear from you. Fill out the form or send me an email at <a href="mailto:ryan.m.coble@gmail.com">ryan.m.coble@gmail.com</a> and I'll get back to you as soon as I can.</p>
                </div>
            </div>
            <div className="footer-right">
                <form name="inquiry-contact" method="POST" className="inquiry-contact">
                    <input type="hidden" name="form-name" value="inquiry-contact" />

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send me a message</button>
                </form>
            </div>
        </div>
    </footer>;
  
}