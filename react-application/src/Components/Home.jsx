import './Styles/App-Styles.css';
import Highlight from "./Highlights";
import ServiceCard from "./Services-card";

import Topiary from '../assets/Gardening-Services/Topiary.jpg';
import Patio1 from '../assets/Gardening-Services/Patios/Patio1.jpg';

function Home() {

    return (
        <>
        <Highlight title="First Highlight" description="Experience our beautiful botanic gardens and the most biodiverse place on Earth." imagePath={Patio1} imageDescription="Topiary"/>
        <Highlight title="Second Highlight" description="Experience our beautiful botanic gardens and the most biodiverse place on Earth." imagePath={Topiary} imageDescription="Topiary"/>
        <div className="services-page">
          <div className="services"> 
            <div className="cards">
              <ServiceCard cardTitle="Card1" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
              <ServiceCard cardTitle="Card2" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
              <ServiceCard cardTitle="Card3" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
              <ServiceCard cardTitle="Card4" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
              <ServiceCard cardTitle="Card5" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
              <ServiceCard cardTitle="Card6" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
            </div>
          </div>
        </div>
        </>
    );
}

export default Home;