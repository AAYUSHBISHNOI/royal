import React from 'react'
import logo from "../assets/img/Royal_Paints logo.png";
import sideone from "../assets/img/side1.png";
import sidetwo from "../assets/img/side2.png";
import white from "../assets/img/white1.png";
import { useState } from 'react'
import { Navdot } from './Mysvg';


const Myheader = () => {
    const [show, setShow] = useState(false);
    if(show){
      document.body.classList.add("overflow-hidden")
    }else{
      document.body.classList.remove("overflow-hidden")
    }
  return (
    <div className='bcg_gradiants min-h-[90vh] sm:min-h-[90vh] md:min-h-[100vh] flex flex-col relative overflow-hidden px-4'>
        <nav>
             <div className=' container mx-auto'>
                <div className=' flex items-center justify-between pt-3'>
                    <a href="logo"><img className=' w-[20%]' src={logo} alt="" /></a>
                    <ul className={`${show ? "start-0" : "right-[-100%]"} flex flex-col z-[4]  min-h-screen lg:min-h-fit fixed lg:static w-full lg:w-auto items-center justify-center top-0 max-lg:right-[-100%] bg-violet-500 lg:bg-[unset] lg:flex-row right-0 gap-12 ps-0 duration-700`}>                        
                        <li><a href="#" className=' text-[21px] font-bold text-white ff_poppins relative after:left-[50%] after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>Home</a></li>
                        <li><a href="#" className=' text-[21px] font-bold text-white ff_poppins relative after:left-[50%] after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>About Us</a></li>
                        <li><a href="#" className=' text-[21px] font-bold text-white ff_poppins relative after:left-[50%] after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>Gallery</a></li>
                        <li><a href="#" className=' text-[21px] font-bold text-white ff_poppins relative after:left-[50%] after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] hover:after:left-0 after:duration-300 inline hover:after:w-full'>Contact Us</a></li>
                    </ul>
               <button className=' relative z-[20] lg:hidden' onClick={() => {setShow(!show); }}><Navdot/></button>
                </div>
            </div>
        </nav>
        <section className=' flex-grow flex relative'>
            <img className=' absolute left-[-5%] bottom-[65%] w-[25%] md:bottom-[60%] lg:w-[20%] xl:w-[23%] xl:bottom-[18%] xl:left-[-1%]' src={sideone} alt="" />
            <img className=' absolute right-[-5%] bottom-[5%] w-[25%] lg:w-[20%] xl:w-[23%] xl:right-[-1%]' src={sidetwo} alt="" />
            <div className=' container mx-auto  flex justify-center items-center'>
                <div>
                   <h1 className=' text-[32px] lg:text-[48px] font-semibold text-white ff_poppins'>We Make Your Home <span className=' block'>More Beautiful</span></h1>
                    <p className='text-[17px] lg:text-[21px] font-normal text-white ff_poppins pt-3'>From choosing the right paint to getting <span className=' block'>an expert touch - leave it on us.</span></p>
                    </div>
            </div>
        </section>
        <img className=' absolute w-[100%] bottom-[-0%] left-0' src={white} alt="" />
    </div>
  )
}

export default Myheader
