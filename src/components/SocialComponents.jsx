import React from 'react'
import { Link } from 'react-router-dom'

const SocialComponents = ({icons , iconLink}) => {
  return (
    <>

        <Link to={iconLink} className='dark:bg-[#1d1d1d] w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] flex items-center justify-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition duration-300'>
                {icons}
        </Link>
      
    </>
  )
}

export default SocialComponents
