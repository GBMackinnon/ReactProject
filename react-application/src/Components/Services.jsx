import './Styles/Services-Styles.css';

function Services(props){
    return(
    <div className="card">
        <div className="card-image">
            <img className="image" src={props.imagePath} alt={props.imageDescription}/>
        </div>
        <div className="card-content">
            <h3>{props.cardTitle}</h3>
            <p>{props.cardDescription}</p>
        </div>
    </div>          
    );
}

export default Services;
