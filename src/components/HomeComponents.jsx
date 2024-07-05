import React from 'react'
import { Link } from 'react-router-dom'
import SocialComponents from './SocialComponents'

const HomeComponents = () => {
  return (
    <div>
       <div className="container">
    <div className="main flex-col flex-wrap text-center px-[15px] py-[30px]">
      <div className="main-img flex justify-center">
        <img className="rounded-full mb-[21px]" src="https://i.ibb.co/qmVzh1D/parson-img.png" alt="img" />
      </div>
      <h4>
        <Link className="text-[26px] font-medium text-black mb-2 font-slab dark:text-white " to="#">
        Monalisa Ashley
        </Link>
      </h4>
      <span
        className="text-[14px] inline-block text-[#7b7b7b] font-poppins font-medium px-5 py-1 mb-[15px] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] dark:rounded-[5px]">
        Ui/Ux Designer
      </span>

      {/* social button  */}

                <ul className="flex justify-center flex-wrap gap-1 mb-[30px] ">
                    <li>
                        <SocialComponents iconLink='#' icons={<i className="fa-brands fa-facebook-f text-[#1773EA] hover:text-white transition duration-300"></i>} />
                    </li>
                    <li>
                        <SocialComponents iconLink='#' icons={<i className="fa-brands fa-twitter  text-[#1C9CEA] hover:text-white transition duration-300"></i>} />
                    </li>
                    <li>
                        <SocialComponents iconLink='#' icons={<i className="fa-brands fa-instagram text-[#E14A84] hover:text-white transition duration-300"></i>} />
                    </li>
                    <li>
                        <SocialComponents iconLink='#' icons={<i className="fa-brands fa-linkedin-in text-[#0072B1] hover:text-white transition duration-300"></i>} />
                    </li>
                </ul>



      <div className="main-cv flex justify-center">
        <Link
          className="flex justify-center items-center gap-[5px] px-[30px] py-3 text-[18px] text-[#F3F6F6] font-poppins font-normal bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-[30px]  transform hover:-translate-y-0.5"
          to="#">
        <i className="fa-regular fa-download"></i>
        <span>Download Cv</span>
        </Link>
      </div>
    </div>
  </div>
    </div>
  )
}

export default HomeComponents
