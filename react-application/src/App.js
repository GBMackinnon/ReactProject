import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Highlight from "./Components/Highlights";
import ServiceCard from "./Components/Services-card";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

import Topiary from './assets/Gardening-Services/Topiary.jpg';

import Patio1 from './assets/Gardening-Services/Patios/Patio1.jpg';
import Patio2 from './assets/Gardening-Services/Patios/Patio2.jpg';
import Patio3 from './assets/Gardening-Services/Patios/Patio3.jpg';
import Patio4 from './assets/Gardening-Services/Patios/Patio4.jpg';
import Patio5 from './assets/Gardening-Services/Patios/Patio5.jpg';
import Patio6 from './assets/Gardening-Services/Patios/Patio6.jpg';


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
            }
          </Route>

          <Route path="/About">
            {

            }
          </Route>
          <Route path="/Services">
            <Service 
              title="Patios" 
              description={
                <>
                  We offer a wide range of patio renovation and installation options to cater for all types of budgets. <br/><br/>

                  Let us help you create an outstanding patio or garden at your home. Offering a wide range of choices in both colour, material and layout. We take huge pride in our patio and garden work ensuring a custom bespoke finish each and every time. <br/><br/>

                  We can provide you with multiple samples of various natural and manufactured stone products in order to help you choose the perfect finish for your patio. Add creative touches to your garden area by creating beautiful pathways, curved edges, decorative edging and more. We tailor each and every one of our patios to suit our customers. If you need steps, doorway ramps, non-slip patios or just easy maintenance, we can create them for you using the best materials. <br/><br/>

                  A patio can add value to your propriety by transforming your garden and be a great space for entertaining.
                </>
              }
              img1={Patio1} img1Desc="Patio1"
              img2={Patio2} img2Desc="Patio2"
              img3={Patio3} img3Desc="Patio3"
              img4={Patio4} img4Desc="Patio4"
              img5={Patio5} img5Desc="Patio5"
              img6={Patio6} img6Desc="Patio6"
            />
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