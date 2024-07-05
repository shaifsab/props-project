import React from 'react'

const InfoTextComponents = ({infoHead , infoText , infoIcon , infoColor}) => {
  return (
    <>

    <div className='flex '>
        <div className={` w-[48px] h-[46px] text-2xl rounded-[6px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex justify-center items-center ${infoColor}`}>
       {infoIcon}
      </div> 
        <div className='ml-[10px]'>
            <h3  className='text-[#44566c] text-[12px] font-medium font-poppins  '>{infoHead}</h3>
            <p className='hover:text-[#af3939] font-medium transition-all duration-300 font-poppins  ' >{infoText}</p>
        </div>
    </div>
      
    </>
  )
}

export default InfoTextComponents
