import React from "react";
import './footer-styles.css';
import facebookLogo from './assets/Logos/Social-Media/facebook.png';
import instagramLogo from './assets/Logos/Social-Media/instagram.png';
import twitterLogo from './assets/Logos/Social-Media/twitter.png';
import youtubeLogo from './assets/Logos/Social-Media/youtube.png';
import whatsappLogo from './assets/Logos/Social-Media/whatsapp.png';

function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <div className="address-footer">
                    <h4>Address</h4>
                    <p>Unit 1</p>
                    <p>Normandy Business Park</p>
                    <p>Cobbett Hill Road</p>
                    <p>Guildford, Surrey</p>
                    <p>GU3 2BY</p>
                </div>

                <div className="contact-footer">
                    <h4>Contact Details</h4>
                    <p>01483 389 454</p>
                    <p>info@thelandscapingconsultants.co.uk</p>
                    <img className="social-media-icon" src={instagramLogo} alt="Instagram" />
                    <img className="social-media-icon" src={facebookLogo} alt="Facebook" />
                    <img className="social-media-icon" src={twitterLogo} alt="Twitter" />
                    <img className="social-media-icon" src={youtubeLogo} alt="YouTube" />
                    <img className="social-media-icon" src={whatsappLogo} alt="WhatsApp" />
                </div>

                <div className="services-footer">
                    <h4>Services</h4>
                    <p>Water features & ponds</p>
                    <p>Patios</p>
                    <p>Driveways</p>
                    <p>Garden Lighting</p>
                    <p>Garden planters & raised beds </p>
                    <p>Garden maintenance </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;