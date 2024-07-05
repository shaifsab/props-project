import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
  <>
  <section className='sec-blog'>
      <div className="container">
        <div className="blog">

          {/* title */}
          <div className="blog-title"><h4>Blog</h4><div className="line"></div></div>


          {/* cart */}
          <div className="cart">
            <div className="cart-box--one">
              <Link  to='#'><img src="src\assets\images\blog-img-1.png" alt="cart" /></Link>
              <div className="cart-meta">
                <span>27 April</span>
                <span>Inspiration</span>
              </div>
              <h6><Link to='#'>How to Own Your Audience by Creating an Email List.</Link></h6>
            </div>

            <div className="cart-box--two">
            <Link  to='#'><img src="src\assets\images\blog-img-2.png" alt="cart" /></Link>
              <div className="cart-meta">
                <span>27 April</span>
                <span>Inspiration</span>
              </div>
              <h6><Link to='#'>How to Own Your Audience by Creating an Email List.</Link></h6>
            </div>

            <div className="cart-box--three">
            <Link  to='#'><img src="src\assets\images\blog-img-3.png" alt="cart" /></Link>
              <div className="cart-meta">
                <span>06 october</span>
                <span>web design</span>
              </div>
              <h6><Link to='#'>the window know to say beside you</Link></h6>
            </div>

            <div className="cart-box--four">
            <Link  to='#'><img src="src\assets\images\blog-img-4.png" alt="cart" /></Link>
              <div className="cart-meta">
                <span>12 March</span>
                <span>Travel Landing</span>
              </div>
              <h6><Link to='#'>Everything You Need to Know About Web Accessibility.</Link></h6>
            </div>

            <div className="cart-box--five">
            <Link  to='#'><img src="src\assets\images\blog-img-5.png" alt="cart" /></Link>
              <div className="cart-meta">
                <span>15 november</span>
                <span>Webdesign</span>
              </div>
              <h6><Link to='#'>Top 10 Toolkits for Deep Learning in 2021.</Link></h6>
            </div>

            <div className="cart-box--six">
            <Link  to='#'><img src="src\assets\images\blog-img-6.png" alt="cart" /></Link>
              <div className="cart-meta">
                <span>12 March</span>
                <span>Travel Landing</span>
              </div>
              <h6><Link to='#'>Everything You Need to Know About Web Accessibility.</Link></h6>
            </div>

            <div className="slider">...</div>
          </div>

          {/* footer */}
          <div className="blog-footer"><span>© 2024 All Rights Reserved by </span></div>

        </div>
      </div>
    </section>
    
  
  </>
  )
}

export default Blogs
