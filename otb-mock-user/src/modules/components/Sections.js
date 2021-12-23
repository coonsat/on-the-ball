import React from "react";
// import Headline from "../Headline";

import { menuData } from '../helper/menu';

// Generic import?? 
// [Home, About Us, Team, Schedule]
import Home from './Home';
import About from './About';
import Schedule from "./Schedule";
import Events from "./Events";
import Blog from "./Blog";

const Sections = () => {

  return (
    menuData.map((obj, index) => (
        <div key={index} id={`#${obj.path}`} className="styled-h1">
        { 
          obj.title === 'Home' ? <Home />
          :
          obj.title === 'About Us' ? <About />
          :
          obj.title === 'Our Team' ? <About />
          :
          obj.title === 'Schedule' ? <Schedule />
          :
          obj.title === 'Philosophy' ? <Schedule />
          :
          obj.title === 'Events' ? <Events />
          :
          <Blog />
        }
        </div>
      )
    )
  )
}


export default Sections;
