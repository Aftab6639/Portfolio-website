import React from 'react'
import './NavBar.css'
import { TiHomeOutline } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { TbMessageHeart } from "react-icons/tb";
import { useState } from 'react';
const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
<nav>
  <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><TiHomeOutline/></a>
  <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUserTie/></a>
  <a href='#Experience' onClick={()=>setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active': ''}><GiTechnoHeart/></a>
  <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a>
  <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><TbMessageHeart/></a>

</nav>
    )
}

export default NavBar