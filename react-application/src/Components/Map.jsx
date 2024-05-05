import './Styles/Map-Styles.css';

function Map(){
    return(
        <div className="map-container">
            <div className="find-us">
                <div className="address">
                    <h3>Find Us</h3>
                    <p>Unit 1</p>
                    <p>Normandy Business Park</p>
                    <p>Cobbett Hill Road</p>
                    <p>Guildford, Surrey</p>
                    <p>GU3 2BY</p>
                </div>
                <div className="map">
                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4942.235688909923!2d-0.8256932507892982!3d51.73087988244095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f444c7a3e1cb%3A0xe0af3d032b225b12!2sMonks%20Risborough%2C%20Princes%20Risborough!5e0!3m2!1sen!2suk!4v1711229716537!5m2!1sen!2suk" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Map;
