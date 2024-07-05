import React from 'react'

const Contact = () => {
  return (
   <>
   <section className='sec-contact'>
      <div className="container">
        <div className="contact">

          {/* title */}
          <div className="contact-title"><h4>Contact</h4><div className="line"></div></div>


          {/* cart */}
          <div className="cart">
            <div className="cart-info">
              <div className="info-one">
                <div className="icon"><img src="src\assets\icon\phone-call.png" alt="icon" /></div>
                <div className="text">
                  <h5>phone :</h5>
                  <span>+452 666 386</span>
                  <span>+2565 562 226</span>
                </div>
              </div>

              <div className="info-two">
                <div className="icon"><img src="src\assets\icon\email-icon.png" alt="icon" /></div>
                <div className="text">
                  <h5>email :</h5>
                  <span>support@gmail.com</span>
                  <span>example@gmail.com</span>
                </div>
              </div>

              <div className="info-three">
                <div className="icon"><img src="src\assets\icon\map-icon.png" alt="icon" /></div>
                <div className="text">
                  <h5>address :</h5>
                  <span>Maount View, Oval</span>
                  <span>Road, New York, USA</span>
                </div>
              </div>
            </div>

            <div className="cart-form">
              <h5>I'm always open to discussing produuct</h5>
              <h5>design work or partnerships.</h5>

              <form action="#" method='post'>
                <div className="form-name-input">
                  <label class="input-lebel name">Name *</label>
                  <input name="name" class="input-box name" type="text" required=""></input>
                </div>

                <div className="form-email-input">
                  <label class="input-lebel name">Name *</label>
                  <input name="email" class="input-box gmail" type="Email" required=""></input>
                </div>

                <div className="form-message-input">
                  <label class="input-lebel name">Message *</label>
                  <textarea name="message" class="input-box message" required=""></textarea>
                </div>
                <button type="submit" value="Send" class="form-btn">Submit</button>

              </form>
            </div>

          </div>

          {/* footer */}
          <div className="contact-footer"><span>© 2024 All Rights Reserved by </span></div>

        </div>
      </div>
    </section>
   
   
   
   
   
   </>
  )
}

export default Contact
