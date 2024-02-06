import React from 'react';
import './experience.css';
import { BsDatabaseCheck } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='Experience'>
<h5>What Skilss I Have</h5>
<h2>My Experience</h2>
    <div className="container experience-container">
      <div className='experience-frontend'>
        <h3>Frontend Development</h3>
        <div className="experience-content">
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>HTML</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>CSS</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>

          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>JavaScript</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>React</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>Bootstrap</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>TailWind</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
        </div>
      </div>
      {/* end of frontend */}
      <div className="experience-backend">
      <h3>Backend Development</h3>
        <div className="experience-content">
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>Node js</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>MoongoDB</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>MySql</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>Express JS</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>Bootstrap</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
          <article className='experience-details'>
<BsDatabaseCheck className='experience-details-icon'/>
<div>
<h4>TailWind</h4>
<small className='text-light'>Experienced</small>
</div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience