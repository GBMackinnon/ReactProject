import React from "react";
import './Styles/Service-Styles.css';


function Service(props) {

  return (   
    <div className="container">
      <div className="service-container">
      <div>
        <h1>{props.title}</h1>       
        <p>{props.description}</p>
        </div>

        <div class="gallery">
          <div class="item">
            <img src={props.img1} alt={props.img1Desc} />
          </div>
          <div class="item">
            <img src={props.img2} alt={props.img2Desc} />
          </div>
          <div class="item">
            <img src={props.img3} alt={props.img3Desc} />
          </div>
          <div class="item">
            <img src={props.img4} alt={props.img4Desc} />
          </div>
          <div class="item">
            <img src={props.img5} alt={props.img5Desc} />
          </div>
          <div class="item">
            <img src={props.img6} alt={props.img6Desc} />
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Service;


