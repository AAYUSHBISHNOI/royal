import React from 'react'
import whiteee from "../assets/img/Path4.4.png";
import home from "../assets/img/bed.png";
import homee from "../assets/img/charming.png";
import mask from "../assets/img/Mask22.png";

const Warm = () => {
  return (
    <div className='bcg_gradiant_2 relative px-4'>
        <img className=' w-[100%] top-[-1%] left-0 absolute' src={whiteee} alt="" />
        <div className=' container mx-auto pb-[10%] sm:pb-[5%] xl:pb-[3%]'>
            <div className='pt-[15%] sm:pt-[18%] sm:flex items-center justify-center w-[100%]'>
                <div className=' w-[100%] xl:w-[30%] flex justify-center'>
                    <img src={home} alt="" />
                </div>
                <div className=' w-[100%] xl:w-[40%] flex justify-center my-3 sm:px-4'>
                 <p className=' font-bold text-[18px] sm:text-[20px] xl:text-[42px] text-white ff_poppins'>Creating a Warm, <span className=' md:block xl:flex xl:justify-end xl:text-end xl:ml-5'>Welcoming Home</span></p>
                </div>
                <div className=' w-[100%] xl:w-[30%] flex justify-center'>
                    <img className=' xl:-translate-y-20 w-[400px]' src={homee} alt="" />
                </div>
            </div>
            <img className=' absolute bottom-[2%] right-[1%] hidden xl:block' src={mask} alt="" />
        </div>
    </div>
  )
}

export default Warm