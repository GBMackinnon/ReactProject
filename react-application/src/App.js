import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Highlight from "./Components/Highlights";
import ServiceCard from "./Components/Services-card";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

import Topiary from './assets/Gardening-Services/Topiary.jpg';
import './Components/Styles/App-Styles.css';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact>
            {
              <>
              <Highlight title="First Highlight" description="Experience our beautiful botanic gardens and the most biodiverse place on Earth." imagePath={Topiary} imageDescription="Topiary"/>
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
            }
          </Route>

          <Route path="/About">
            {

            }
          </Route>
          <Route path="/Services">
            {
              <Service />
            }
          </Route>
          <Route path="/Contact">
             {
              <Contact />
             }
          </Route>
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;