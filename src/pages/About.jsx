import React from "react";
import { Link, NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      {/* <a href="/">Home</a> */}
      {/* <Link to="/">Home Page</Link> */}
      <NavLink to="/">Home Page</NavLink>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
