import React from "react";
import "./Navbar.css";
import { AppBar, Button, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <div className="main-container">
            <div className="logo">
              <a href="https://topmate.io">
                <img
                  src="https://topmate.io/images/common/topmate-light.svg"
                  alt="logo"
                />
              </a>
                <ul>
                  <li className="dropdown-list">
                    <select name="dropdown" id="dropdown">
                      <option value="volvo">For Creaters</option>
                      <option value="saab">Software Engineers</option>
                      <option value="mercedes">Designers</option>
                      <option value="audi">Mentors</option>
                    </select>
                  </li>
                  <li>Pricing</li>
                  <li>Podcast</li>
                </ul>
            </div>
            <div className="btn">
              <Button size="large" className="login-btn" >Login</Button>
              
              <Button size="large" className="signup-btn" >Sign Up</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
