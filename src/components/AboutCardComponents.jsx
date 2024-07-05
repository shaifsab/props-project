import React from 'react'

const AboutCardComponents = ({cardHead , cardText , cardImg , CardColor}) => {
  return (
    <>
      <div className={`w-[352px] h-[182px] p-[24px] bg-slate-400 rounded-xl flex gap-5 ${CardColor} `}>
        <div className='w-[40px]'>
            <img className='w-full' src={cardImg} alt="card img" />
        </div>
        <div className="card-text">
              <h2 className='text-5 font-medium font-poppins text-black'>{cardHead}</h2>
              <p className='text-4 mt-2 font-normal font-poppins text-[#44566c] leading-[32px] w-[248px] '>{cardText}</p>
        </div>
      </div>
    </>
  )
}

export default AboutCardComponents
