import React from "react";

import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li><br/>
          <li>
            <Link to="/Form">Borrow a Book</Link>
          </li><br/>
          <li>
            <Link to="/MyBooks">Mybooks</Link>
          </li><br/>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
