import React from "react";
import ui from './images/Library ui.png'

import { Outlet, Link } from "react-router-dom";
import Ui from "./Ui";
import Figma from "./Figma";
import FigmaForm from "./FigmaForm";
import FigmaBooks from "./FigmaBooks";
import FigmaTransactions from "./FigmaTransactions";
import { FigmaBook } from "./FigmaBook";
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
<>
    <Ui/>
    {/* <FigmaForm/>
    <FigmaBooks/>
    <FigmaTransactions/>
    <FigmaBook/> */}
    </>
  );
};

export default Home;
