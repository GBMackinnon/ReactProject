import './Styles/Message-Styles.css';
import React, { useState } from 'react';

function Message() {

    var initialMessage  = {
        name: "",
        email: "",
        message: ""
    }

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message , setMessage] = useState("");


    function handleNameChange(event){
        setName(n => event.target.value);
    }

    function handleEmailChange(event){
        setEmail(e => event.target.value);
    }

    function handleMessageChange(event){
        setMessage(m => event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        setName(n => "");
        setEmail(e => "");
        setMessage(m => "");

        initialMessage  = {
            name: name,
            email: email,
            message: message
        }
    }


    return (
        <div className="message-section">
            <div className="contact">
                <form>
                    <h3>Message Us</h3>
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} placeholder="Your Name" /><br />
                    <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} placeholder="Your Email" /><br />
                    <textarea id="message" name="message" value={message} onChange={handleMessageChange} placeholder="Write Message Here..."></textarea><br /><br />
                    <button className="submit-button" onClick={handleSubmit}> Submit </button>
                </form>
            </div>
        </div>
    );
}

export default Message;