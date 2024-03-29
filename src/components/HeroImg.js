import './HeroImgStyle.css';
import '../index.css';
import React from 'react';
import intro from '../assets/Swapnil Backgrounnd.jpeg';
import { Link } from 'react-router-dom';


const HeroImg = () => {
  return (
    <div className='hero'>

    <div className='mask'>
        <img className='into-img' src={intro} alt='intro img' />
    </div>

    <div className='content'>
    <p>Hey 👋 Welcome! I'm Swapnil.</p>
        <h1> Java Developer</h1>

    <Link to='/swapniltake/project' className='btn'>My Projects </Link>
    <Link to='/swapniltake/contact' className='btn btn-light'> Contact Me </Link>

    </div>

    </div>
  )
}

export default HeroImg