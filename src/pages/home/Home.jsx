import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Home.css'


const Home = () => {
  return  (
    
    <section className='home section grid'>
      <img src='src\assets\SKR1997-_Photos(1)~3.jpg'alt='SKR' className='home__img'/>

<div className='home_content'>
  <div className='home_data'>
    <h1 className='home_title'><span>I'M SARATH KUMAR R.<br></br></span>WEB DESIGNER</h1>
    <p className='home_description'>I'm an Indian based web designer & full-stack developer focused on crafting clean & <br/>user‑friendly experiences,
         I am passionate about building excellent software <br/>that improves the lives of those around me.</p>
    <Link to='/about' className='button'>MORE ABOUT ME <span className='button_icon'><FaArrowRight/></span></Link>
  </div>
</div>

<div className='color_block'></div>
    </section>
  )
}


export default Home