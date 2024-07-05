import React from 'react'
import { Link } from 'react-router-dom'

const Works = () => {
  return (
    <>
    <section className='sec-portfolio'>
      <div className="container">
        <div className="portfolio">

          {/* title */}
          <div className="portfolio-title"><h4>Portfolio</h4><div className="line"></div></div>


          {/* mockup */}
          <div className="mockup">
            <ul>
              <li>All</li>
              <li>Mockup</li>
              <li>Graphic Design</li>
              <li>logo</li>
            </ul>
          </div>

          {/* cart */}
          <div className="cart">
            <div className="cart-box--one">
              <Link  to='#'><img src="src\assets\images\work-img-1.png" alt="cart" /></Link>
              <span>Travel Landing , UX/UI </span>
              <h6><Link to='#'>Chulurina</Link></h6>
            </div>

            <div className="cart-box--two">
              <Link  to='#'><img src="src\assets\images\work-img-2.png" alt="cart" /></Link>
              <span>Travel Landing , UX/UI </span>
              <h6><Link to='#'>Aura Dione</Link></h6>
            </div>

            <div className="cart-box--three">
              <Link  to='#'><img src="src\assets\images\work-img-3.png" alt="cart" /></Link>
              <span>Travel Landing , UX/UI </span>
              <h6><Link to='#'>T-Shirt Design</Link></h6>
            </div>

            <div className="cart-box--four">
              <Link  to='#'><img src="src\assets\images\work-img-4.png" alt="cart" /></Link>
              <span>Travel Landing , UX/UI </span>
              <h6><Link to='#'>Packaging Box</Link></h6>
            </div>

            <div className="cart-box--five">
              <Link  to='#'><img src="src\assets\images\work-img-5.png" alt="cart" /></Link>
              <span>Travel Landing , UX/UI </span>
              <h6><Link to='#'>Modern Bag Design</Link></h6>
            </div>

            <div className="cart-box--six">
              <Link  to='#'><img src="src\assets\images\work-img-6.png" alt="cart" /></Link>
              <span>Travel Landing , UX/UI </span>
              <h6><Link to='#'>Chul urina</Link></h6>
            </div>

          </div>

          {/* footer */}
          <div className="resume-footer"><span>© 2024 All Rights Reserved by </span></div>

        </div>
      </div>
    </section>
    
   
    </>
  )
}

export default Works
