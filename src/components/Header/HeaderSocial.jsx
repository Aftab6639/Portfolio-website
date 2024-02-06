import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className='header-socials'>
        <a href='https://Linkedin.com' target='__blank'><BsLinkedin/></a>
        <a href='https://|Github.com' target='__blank'><BsGithub/></a>
        <a href='https://Stackoverflow.com' target='__blank'><BsStackOverflow/></a>

    </div>
  )
}

export default HeaderSocial