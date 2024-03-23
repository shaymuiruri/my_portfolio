import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>AirBnB</h3>
            <small className='text-light'>JavaScript | Django (Python) | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shaymuiruri/AirBnB_clone" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Shopokoa</h3>
            <small className='text-light'>HTML | CSS | ReactJS | Django | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shaymuiruri/shop-okoa" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://www.shopokoa.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {<img src={IMG4} alt="" /> }
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              { <a href="https://github.com/shaymuiruri/my_portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a> }
              { <a href="https://mitchellemuiruri.netlify.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a> }
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                { <img src={IMG3} alt=""/> } 
            </div>
            <h3>Soko Beauty Mobile App</h3>
            <small className='text-light'>M-Pesa Integration|Django | Postman API </small>
            <div className="portfolio__item-cta">
              {/* <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a> */}
              {/* <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects
