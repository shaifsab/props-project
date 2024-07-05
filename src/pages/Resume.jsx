import React from 'react'

const Resume = () => {
return (
<>
  <section className='sec-resume'>
    <div className="container">
      <div className="resume">

        {/* title */}
        <div className="resume-title">\
          <h1>Resume</h1>
          <div className="line"></div>
        </div>

        {/* achivment */}
        <div className="resume-achivment">
          <div className="education">
            <div className="edu-title">
              <h4>(icon) Education</h4>
            </div>
            <div className="edu-details">

              <div className="edu-details--one">
                <span>2021-2024</span>
                <h6>Ph.D in Horriblensess <span>- University,</span></h6>
                <p>Los Angeles, CA</p>
              </div>
              <div className="edu-details--two">
                <span>2021-2024</span>
                <h6>Ph.D in Horriblensess <span>- University,</span></h6>
                <p>Los Angeles, CA</p>
              </div>
              <div className="edu-details--three">
                <span>2021-2024</span>
                <h6>Ph.D in Horriblensess <span>- University,</span></h6>
                <p>Los Angeles, CA</p>
              </div>

            </div>
          </div>

          <div className="experience">
            <div className="exe-title">
              <h4>(icon) Experience</h4>
            </div>
            <div className="exe-details">

              <div className="exe-details--one">
                <span>2019 - Present</span>
                <h6>Sr. Software Tester</h6>
                <p>Google Inc.</p>
              </div>
              <div className="exe-details--two">
                <span>2015-2017</span>
                <h6>Cr. Web Developer</h6>
                <p>elite-themes24 ltd.</p>
              </div>
              <div className="exe-details--three">
                <span>2014 - 2015</span>
                <h6>Jr. Web Developer</h6>
                <p>Creative Gigs.</p>
              </div>

            </div>
          </div>

          <div className="awards">
            <div className="awards-title">
              <h4>(icon) Awards</h4>
            </div>
            <div className="awards-details">

              <div className="awards-details--one">
                <span>2015-2017</span>
                <h6>Graphic Designer</h6>
                <p>Web Graphy, Los Angeles, CA</p>
              </div>
              <div className="awards-details--two">
                <span>2014 - 2015</span>
                <h6>Jr. Web Developer</h6>
                <p>Creative Gigs.</p>
              </div>
              <div className="awards-details--three">
                <span>2015-2017</span>
                <h6>Best Freelancer</h6>
                <p>Fiver & Upwork Level 2 & Top Rated.</p>
              </div>

            </div>
          </div>

        </div>

        {/* skills */}
        <div className="resume-skills">
          <div className="skills-row">
            <div className="skills-row--working">
              <div className="working-title">
                <h2>Working Skills</h2>
              </div>

              <div className="working-percentage">
                <div className="percentage-box">

                  <div className="percentage-box--one">
                    <div className="box-text">
                      <h5>Web Design</h5>
                      <span>85%</span>
                    </div>
                    <div className="percentage-line"></div>
                  </div>

                  <div className="percentage-box--two">
                    <div className="box-text">
                      <h5>Mobile App</h5>
                      <span>55%</span>
                    </div>
                    <div className="percentage-line"></div>
                  </div>

                  <div className="percentage-box--three">
                    <div className="box-text">
                      <h5>Illustrator</h5>
                      <span>65%</span>
                    </div>
                    <div className="percentage-line"></div>
                  </div>

                  <div className="percentage-box--four">
                    <div className="box-text">
                      <h5>Photoshope</h5>
                      <span>72%</span>
                    </div>
                    <div className="percentage-line"></div>
                  </div>

                </div>




              </div>

              <div className="skills-row--knowledge">
                <div className="knowledge-title"><h2>Knowledges</h2></div>

                <div className="knowledge-tag">
                  <span class="gk-item">Digital Design</span>
                  <span class="gk-item">Marketing</span>
                  <span class="gk-item">Communication</span>
                  <span class="gk-item">Social Media</span>
                  <span class="gk-item">Time Management</span>
                  <span class="gk-item">Flexibility</span>
                  <span class="gk-item">Print</span>
                </div>
              </div>

            </div>
          </div>

          {/* footer */}
          <div className="resume-footer"><span>© 2024 All Rights Reserved by </span></div>

















        </div>

      </div>
    </div>
  </section>




</>
)
}

export default Resume