import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

import Patio1 from './assets/Gardening-Services/Patios/Patio1.jpg';
import Patio2 from './assets/Gardening-Services/Patios/Patio2.jpg';
import Patio3 from './assets/Gardening-Services/Patios/Patio3.jpg';
import Patio4 from './assets/Gardening-Services/Patios/Patio4.jpg';
import Patio5 from './assets/Gardening-Services/Patios/Patio5.jpg';
import Patio6 from './assets/Gardening-Services/Patios/Patio6.jpg';




function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact>
             {
              <Home />
             }
          </Route>

          <Route path="/About">
            {
              <About 
              title="About" 
              description={
                <>
                  We are a small family-owned company that operates in Luton and surrounding areas. We have over 15 years of experience in landscaping construction and renovation with a vast knowledge of the engineering construction sector. <br/><br/>

                  Through the years we have built many gardens from top-end designs to simple garden makeovers, and refurbishments all to the highest standards of quality of workmanship. <br/><br/>

                  We have been trading as a limited company since 2019 and we continue to deliver top-quality landscaping services. We started this journey to deliver trust and value to our customers. <br/><br/>

                  Our mission is to provide you, our customers, with the best experience in planning and building your outdoor space, using the top materials in a enviromental friendly way at the highest quality standards. <br/><br/>
                </>
              }
              img1={Patio1} img1Desc="Patio1"
              img2={Patio2} img2Desc="Patio2"
              img3={Patio3} img3Desc="Patio3"
              img4={Patio4} img4Desc="Patio4"
              img5={Patio5} img5Desc="Patio5"
              img6={Patio6} img6Desc="Patio6"
            />
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