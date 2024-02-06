import React from 'react'
import './services.css'
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5> 
      <h2>Services</h2>
      <div className="container services-contianer">
<article className="service">
  <div className="service-head">
    <h3>UI/UX Design</h3>
    </div>
    {/* <div>Hello world of react master Aftab Hussain</div> */}
  <ul className='service-list'>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
  </ul>
</article>

{/* ed of ux/ui design */}
<article className="service">
  <div className="service-head">
    <h3>Web Development</h3>
  </div>
  <ul className='service-list'>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
  </ul>
</article>
{/* end of wed development */}
<article className="service">
  <div className="service-head">
    <h3>Content Creation</h3>
  </div>
  <ul className='service-list'>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
    <li>
<GiCheckMark className='service-list-icon'/>
<p>lorem, ipsum dolor sit amet constructor elit.</p>
    </li>
  </ul>
</article>
</div>
    </section>
  )
}

export default Services