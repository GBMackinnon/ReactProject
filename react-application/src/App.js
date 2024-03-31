//import logo from './logo.svg';
import './App.css';
import Highlight from "./Components/Highlights";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

import Topiary from './assets/Gardening-Services/Topiary.jpg';
import './Components/Styles/App-Styles.css';

function App() {
  return (   
    <div>
      <Highlight title="First Highlight" description="Experience our beautiful botanic gardens and the most biodiverse place on Earth." imagePath={Topiary} imageDescription="Topiary"/>
      <Highlight title="Second Highlight" description="Experience our beautiful botanic gardens and the most biodiverse place on Earth." imagePath={Topiary} imageDescription="Topiary"/>

      <div className="services-page">
        <div className="services"> 
          <div className="cards">
            <Services cardTitle="Card1" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
            <Services cardTitle="Card2" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
            <Services cardTitle="Card3" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
            <Services cardTitle="Card4" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
            <Services cardTitle="Card5" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
            <Services cardTitle="Card6" cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est mollitia sunt natus! Delectus ducimus, deleniti dolorum perferendis placeat dolore maxime provident eaque officia voluptatem natus rem iste. Aperiam, quis." imagePath={Topiary} imageDescription="Topiary"/>
          </div>
        </div>
      </div>
      
      <Footer />

    </div>
  );
}

export default App;







