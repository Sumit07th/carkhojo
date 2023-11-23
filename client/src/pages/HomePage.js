import React from 'react'
import Layout from '../components/Layout/Layout';
import { useAuth } from "../context/auth";
import { NavLink } from "react-router-dom";
import "../styles/Homepage.css";

const HomePage = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout>
       <section className="section-hero section">
  <div className="container grid grid-two-col">
    <div className="section-hero-data">
      <p className="hero-top-data">this is us</p>
      <h1 className="hero-heading">CAR KHOJO</h1>
      <p className="hero-para">
        Car Khojo is platfrom where you easily find and book car for weeding , tour or traveling.
      </p>
      <div>
      <NavLink to="/booking" className="btn" >Book Now</NavLink>
      </div>
    </div>
    <div className="section-hero-image">
      <img src="images/ck2.jpg" alt="hero image" className="hero-img" />
    </div>
  </div>
</section>

  
        
        <li className="nav-item">
       
      </li>
    </Layout>
  )
}

export default HomePage;