import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/About.css";

const About = () => {
  return (
    <Layout>
       <section className="section-biodata section">
  <div className="container grid grid-two-col">
    <div className="bio-image">
      <img src="images/Sumitimg.jpg" alt="bio data image" />
    </div>
    <div className="bio-data">
      <h2 className="common-heading">About Us</h2>
      <p>
        Car Khojo is an online car booking platform.Here you easily book travelling veichele
        for travel nearby area.<br />All Type of veicheleare avilable here
        (Bolero,Ertiga,Scorpio,Swift,Auto,Pick-up,etc)<br />
        Founded in 2022 and our office in Nagar UntariGarhwa,Jharkhand.Car Khojo is 100% founder-owned
        and highly useful
      </p>
      <br />
      <p>
      Hi I am Sumit Kumar. I am Btech(Computer Science) Student of Sarala Birla University.
      </p>
     
    </div>
  </div>
</section>


    </Layout>
  )
}

export default About;