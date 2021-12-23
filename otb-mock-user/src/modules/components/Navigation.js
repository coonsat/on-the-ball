import React from "react";
import { Link } from "react-router-dom";
// import List from "../List";

// Internal import
import { menuData } from '../helper/menu';

const Navigation = () => (
  // <div className="styled-ul">
  //   {[1, 2, 3, 4, 5].map(num => (
  //     <li key={num}>
  //       <Link to={`/#section${num}`}>Section {num}</Link>
  //     </li>
  //   ))}
  // </div>

  <div className="styled-ul">
  {menuData.map((obj, index) => (
    <li key={index}>
      <Link to={`/#${obj.path}`}>{obj.title}</Link>
    </li>
  ))}
</div>
);

export default Navigation;