import React from "react";
import ui from './images/Library ui.png'

import { Outlet, Link } from "react-router-dom";
import Ui from "./Ui";
const Home = () => {
  return (
    // <div className="bgImage">
    //   <img src={ui}  alt="No Image"/>
    //   {/* <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li><br/>
    //       <li>
    //         <Link to="/Form">Borrow a Book</Link>
    //       </li><br/>
    //       <li>
    //         <Link to="/MyBooks">Mybooks</Link>
    //       </li><br/>
    //     </ul>
    //   </nav> */}
    // </div>

    <Ui/>
  );
};

export default Home;