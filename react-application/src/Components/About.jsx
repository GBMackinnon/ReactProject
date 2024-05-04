import React from "react";
import './Styles/About-Styles.css';
import aboutImg from '../assets/Gardening-Services/Patios/Patio1.jpg';

function About(props) {

  return (   
    <div className="container">
      <div className="about-container">
      <div>
        <h1>{props.title}</h1> 
        <div className="about-contents">     
          <p>{props.description}</p>
          <div className="image">
            <img src={aboutImg} alt="gardening" />
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
}

export default About;


