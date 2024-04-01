import './Styles/Message-Styles.css';

function Message() {
    return (
        <div className="message-section">
            <div className="contact">
                <form action="/action_page.php">
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