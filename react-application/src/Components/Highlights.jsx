import './Styles/Highlight-Styles.css';
import Topiary from '../assets/Gardening-Services/Topiary.jpg';

function Highlights(){
    return(
        <div className="highlights-page">
            <div className="highlights-section">
                <div className="highlights-content">
                    <div className="highlights-image-wrapper">
                        <img className="highlights-image" src={Topiary} alt="Meaningful Text"/>
                    </div>
                    <div className="highlights-text">
                        <h3>Visit the world-famous Kew Gardens</h3>  
                        <p>Experience our beautiful botanic gardens and the most biodiverse place on Earth.</p>            
                    </div>
                </div>

                <div className="highlights-content">
                    <div className="highlights-image-wrapper">
                        <img className="highlights-image" src={Topiary} alt="Meaningful Text"/>
                    </div>
                    <div className="highlights-text">
                        <h3>Visit the world-famous Kew Gardens</h3>  
                        <p>Experience our beautiful botanic gardens and the most biodiverse place on Earth.</p>            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlights;
