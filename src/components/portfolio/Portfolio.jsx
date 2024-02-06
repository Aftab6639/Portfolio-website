import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container port-container">
        <article className='port-items'>
          <div className="port-item-image"></div>
          <h3>This is port items </h3>
          
          <a href="https://github.com/aftab6639" className='btn'>Github</a>
          <a href="https://dribble.com" className='btn btn-primary'>Live Demo</a>

        </article>
      </div>

    </section>
  )
}

export default Portfolio