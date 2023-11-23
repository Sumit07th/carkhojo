import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
   <div className="footer">
    
  <p className="text-center mt-3">Car Khojo is an online car booking platform.Here you easily book travelling veichele
    for travel nearby area.<br />All Type of veicheleare avilable here
    (Bolero,Ertiga,Scorpio,Swift,Auto,Pick-up,etc)<br />
    Founded in 2022 and our office in Nagar Untari Garhwa,Jharkhand.Car Khojo is 100% founder-owned
    and highly useful</p>
    
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
      <h1 className="text-center">All Right Reserved &copy; Car Khojo</h1>
    </div>
    </>
  );
};

export default Footer;