import CTA from './CTA'
import me from '../../assets/me-new.png'
// import HeaderSocials from './HeaderSocials'
// import { HeaderSocials } from './HeaderSocials';
// Correct import for a default export
import HeaderSocials from './HeaderSocials';
// import React from 'react'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Mitchelle Muiruri</h1>
          <h5 className="text-light">Mathematics & ComputerScience Undergraduate</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>

            <img src={me} alt='me' style={{ width: '50vw', height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex', }}/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header
