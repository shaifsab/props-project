import React from 'react'
import CommonHead from './CommonHead'
import CommonHeadTwo from './CommonHeadTwo'
import AboutCardComponents from './AboutCardComponents'
import InfoTextComponents from './InfoTextComponents'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { IoLocationSharp } from 'react-icons/io5'

const AboutComponents = () => {
  return (
    <>
    <section className='about'>
        <div className="container">
            <div className="about-head w-full rounded-[20px] bg-white pt-[60px] px-[80px] ">
                <div className="title flex items-center">
                    <CommonHead AboutHeadTitle='About Me' />
                    <div className=" w-[192px] h-[2px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-[6px] ml-[25px]"></div> 
                </div>

                <div className="image flex pt-[40px]">
                    <div className="img w-[330px]  ">
                        <img className='w-full' src="https://bostami-nextjs.netlify.app/_next/image?url=%2Fimages%2Fabout%2Fabout.jpg&w=640&q=75" alt="img" />
                    </div>
                    <div className="info  pl-[60px]">
                        <div className="img-text w-[700px] ">
                        <h2 className='font-poppins text-4xl font-medium mb-[10px]'>Who am i?</h2>
                        <p className=' text-[16px] font-poppins  font-normal'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                        <p className=' text-[16px] font-poppins  font-normal mt-[10px]'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                    </div>

                    <div className="life">
                        <h3 className='font-poppins text-4xl font-medium py-[10px] '>Personal Info</h3>
                        <div className="contact flex">
                            <div className='flex flex-col gap-[24px]'>
                                <InfoTextComponents infoColor='text-[#E93B81]' infoIcon={<MdOutlinePhoneIphone/>} infoText='+123 456 7890' infoHead='Phone'/> 
                                <InfoTextComponents infoColor='text-[#6AB5B9]'  infoIcon={<HiOutlineMailOpen />} infoText='example@mail.com' infoHead='Email'/> 
                            </div>
                            <div className='flex flex-col gap-[24px] ml-[160px]'>
                                <InfoTextComponents infoColor='text-[#FD7590]'  infoIcon={<IoLocationSharp />} infoText='Hong kong china' infoHead='Location'/> 
                                <InfoTextComponents infoColor='text-[#C17CEB]'  infoIcon={<MdOutlinePhoneIphone />} infoText='May 27, 1990' infoHead='Birthday'/> 
                            </div>
                            
                            
                            
                        </div>

                    </div>


                    </div>
                   


                </div>

                
                <CommonHeadTwo CommonHeadTitle='What I do!' />
                <div className="card flex flex-wrap justify-center gap-[32px] pb-[48px] pt-5 ">
                    <AboutCardComponents CardColor='bg-[#FCF4FF]' cardHead='Ui/Ux Design' cardImg='https://bostami-nextjs.netlify.app/images/icons/icon-1.svg' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.'  />
                    <AboutCardComponents CardColor='bg-[#FEFAE0]' cardHead='App Development' cardImg='https://bostami-nextjs.netlify.app/images/icons/icon-2.svg' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.'  />
                    <AboutCardComponents CardColor='bg-[#F4FCFF]' cardHead='Photography' cardImg='https://bostami-nextjs.netlify.app/images/icons/icon-3.svg' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.'  />
                    <AboutCardComponents CardColor='bg-[#F4F4F4]' cardHead='Photography' cardImg='https://bostami-nextjs.netlify.app/images/icons/icon-4.svg' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.'  />
                    <AboutCardComponents CardColor='bg-[#F0F0F8]' cardHead='Managment' cardImg='https://bostami-nextjs.netlify.app/images/icons/icon-5.svg' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.'  />
                    <AboutCardComponents CardColor='bg-[#F3FBFF]' cardHead='Web Development' cardImg='https://bostami-nextjs.netlify.app/images/icons/icon-6.svg' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.'  />
                </div>

            </div>


           
        </div>
    </section>

      
    </>
  )
}

export default AboutComponents
