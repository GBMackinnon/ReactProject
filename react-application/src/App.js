//import logo from './logo.svg';
import './App.css';
import Highlight from "./Components/Highlights";
import Footer from "./Components/Footer";

import Topiary from './assets/Gardening-Services/Topiary.jpg';

function App() {
  return (   
    <div>
      <Highlight title="First Highlight" description="Experience our beautiful botanic gardens and the most biodiverse place on Earth." imagePath={Topiary} imageDescription="Topiary"/>
      <Highlight title="Second Highlight" description="Experience our beautiful botanic gardens and the most biodiverse place on Earth." imagePath={Topiary} imageDescription="Topiary"/>
      <Footer />

    </div>
  );
}

export default App;







