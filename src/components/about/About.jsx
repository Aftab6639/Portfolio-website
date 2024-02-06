import React from 'react'
import './about.css'
import { BsAwardFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";

import Me from '../../assets/me-image-png.jpg'
const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about_container'>
      <div className='about-me'>
<div className="about-me-image">
  <img src={Me} alt="aboutme" />
</div>
      </div>
<div className="about__content">
  <div className="about-cards">
    <article className='about-card'>
      <BsAwardFill className='about-icon'/>
      <h5>Experience</h5>
      <small>1+ Years Working</small>
    </article>
    <article className='about-card'>
      <FaUsers className='about-icon'/>
      <h5>Clients</h5>
      <small>10+ Worldwide</small>
    </article>
    <article className='about-card'>
      <FaFolder className='about-icon'/>
      <h5>Projects</h5>
      <small>8 Completed</small>
    </article>
  </div>
  <p>
  I am a passionate full-stack JavaScript developer with over a year of hands-on experience. I specialize in creating robust and scalable web applications using modern frameworks like React and Node.js. With a keen eye for detail and a commitment to clean, efficient code, I strive to deliver exceptional user experiences and exceed client expectations
  </p>
  <a href='#contact' className='btn btn-primary'>Let's Talk</a>
</div>
    </div>
    </section>
  )
}

export default About