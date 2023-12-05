import React from 'react'
import logo from "../assets/img/royal.png";
import { Facebook, Google, Insta, Twitter } from './Mysvg';

const Myfooter = () => {
  return (
    <div className='bcg_gradiant_3 px-4'>
        <div className=' container mx-auto pt-[5%] pb-[5%]'>
            <div className=' flex flex-wrap items-center'>
                <div className=' w-[100%] lg:w-[40%] mb-9'>
                    <img src={logo} alt="" />
                    <p className=' font-normal text-[13px] text-white ff_poppins mt-3'>Painting with RP means never painting your house <span className=' block'>again! Our special paint coating comes with a 20</span><span className=' block'> years warranty.</span></p>
                   <div className=' flex items-center gap-5 mt-4'>
                   <Google/>
                    <Facebook/>
                    <Twitter/>
                    <Insta/>
                   </div>
                </div>
                <div className=' w-[50%] lg:w-[20%]'>
                    <ul>
                        <li className=' font-normal text-[18px] text-white ff_poppins'>Links</li>
                        <li><a href="" className=' font-normal text-[12px] text-[#c4c4c4] ff_poppins  relative after:left-[50%] after:absolute after:bg-white after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>Home</a></li>
                        <li><a href="" className=' font-normal text-[12px] text-[#c4c4c4] ff_poppins  relative after:left-[50%] after:absolute after:bg-white after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>About Us</a></li>
                        <li><a href="" className=' font-normal text-[12px] text-[#c4c4c4] ff_poppins  relative after:left-[50%] after:absolute after:bg-white after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>Gallery</a></li>
                        <li><a href="" className=' font-normal text-[12px] text-[#c4c4c4] ff_poppins  relative after:left-[50%] after:absolute after:bg-white after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>Contact Us</a></li>
                    </ul>
                </div>
                <div className=' w-[50%] lg:w-[20%]'>
                    <ul>
                        <li className=' font-normal text-[18px] text-white ff_poppins'>Contact Us</li>
                        <li><a href="" className=' font-normal text-[12px] text-[#c4c4c4] ff_poppins  relative after:left-[50%] after:absolute after:bg-white after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>+91 1234567890</a></li>
                        <li><a href="" className=' font-normal text-[12px] text-[#c4c4c4] ff_poppins  relative after:left-[50%] after:absolute after:bg-white after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>XYZ@gmail.com</a></li>
                        <li><a href="" className=' font-normal text-[12px] text-[#c4c4c4] ff_poppins  relative after:left-[50%] after:absolute after:bg-white after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>Address</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myfooter
