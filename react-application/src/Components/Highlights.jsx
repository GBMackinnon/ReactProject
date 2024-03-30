import './Styles/Highlight-Styles.css';

function Highlights(props){
    return(
        <div className="highlights-page">
            <div className="highlights-section">
                <div className="highlights-content">
                    <div className="highlights-image-wrapper">
                        <img className="highlights-image" src={props.imagePath} alt={props.imageDescription}/>
                    </div>
                    <div className="highlights-text">
                        <h3>{props.title}</h3>  
                        <p>{props.description}</p>            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlights;
