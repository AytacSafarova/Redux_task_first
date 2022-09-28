import React from "react";
import { Routes, Link, Route } from "react-router-dom";
function HomePage() {
  const ul_style={
      display:"flex",
      justifyContent:"space-evenly",
  }
  return (
  
    <>
      <div>
        <ul style={ul_style}>
          <Link to="/customers">
            <li>Customers</li>
          </Link>
          <Link to="/favorites">
            <li>Favorites</li>
          </Link>
        </ul>
      </div>
   
    </>
  );
}

export default HomePage;
