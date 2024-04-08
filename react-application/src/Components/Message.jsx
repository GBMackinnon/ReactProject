import './Styles/Message-Styles.css';
import emailjs from '@emailjs/browser'

function Message() {

    const sendEmail = (e) => {
        e.preventDefault(); // stop page from refreshing
        emailjs.sendForm('service_id', 'template_id', e.target, 'public_key');
    }

    return (
        <div className="message-section">
            <div className="contact">
                <form onSubmit={sendEmail}>
                    <h3>Message Us</h3>
                    <input type="text" id="name" name="name" placeholder="Your Name" /><br />
                    <input type="text" id="email" name="email" placeholder="Your Email" /><br />
                    <textarea id="message" name="message" placeholder="Write Message Here..."></textarea><br /><br />
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Message;