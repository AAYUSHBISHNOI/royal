import React from 'react'
import { Play, Playone, Star } from './Mysvg'
import whitee from "../assets/img/Path 4.2.png";
import white from "../assets/img/clients.png";

const Around = () => {
  return (
    <div className='bcg_gradiant_1 relative px-4'>
        <img className=' absolute  left-0 top-[-0%] w-[100%] md:top-[-1%]' src={white} alt="" />
        <div className=' container mx-auto pt-[18%] sm:pt-[23%] md:pt-[20%] mb-[25%] pb-[20%] xl:pb-[10%] xl:pt-[16%]'>
                <h2 className=' text-center font-bold text-[28px] text-white ff_poppins'>10,000 Satisfied clients <span className=' block'>around the world</span></h2>
                <p className=' text-center font-normal text-[16px] ff_poppins text-white'>Yeah! we’re proud with numbers. We’ve helped thousands of clients <span className=' sm:block'>all around the world with our bespoke service. Hover ontop of them</span><span className=' sm:block'> pic to view their testimonials.</span></p>
            <div className=' flex flex-wrap justify-between mt-[6%] px-7'>
                <div className='w-[90%] md:w-[100%] lg:w-[35%] h-[125px] rounded-[15px] bg-[#c4c4c4] pt-[14px] pb-[15px] pl-[20px] relative'>
                    <p className=' font-normal text-[16px] ff_poppins text-[#333] mb-2'>Neya from Goa</p>
                    <Star/>
                    <p className=' font-bold text-[14px] text[#333] ff_poppins mt-2'>Best service</p>
                    <p className=' font-normal text-[14px] text[#333] ff_poppins mt-1'>Good material, Thank you.</p>
                    <Playone/>
                </div>
                <div className='w-[90%] md:w-[100%] lg:w-[35%] h-[135px] rounded-[15px] bg-[#c4c4c4] pt-[14px] pb-[15px] pl-[20px] mt-[4%] relative'>
                    <p className=' font-normal text-[16px] ff_poppins text-[#333] mb-2'>Ankit from MP</p>
                    <Star/>
                    <p className=' font-bold text-[14px] text[#333] ff_poppins mt-2'>Wonderful service</p>
                    <p className=' font-normal text-[12px] text[#333] ff_poppins mt-1'>Good deal and very wonderful service thank you.</p>
                    <Play/>
                </div>
            </div>
            <div className=' lg:ml-[17%] mt-[3%] px-7'>
                <div className='w-[90%] md:w-[100%] lg:w-[35%] h-[125px] rounded-[15px] bg-[#c4c4c4] pt-[14px] pb-[15px] pl-[20px] relative'>
                    <p className=' font-normal text-[16px] ff_poppins text-[#333] mb-2'>Pooja from UP</p>
                    <Star/>
                    <p className=' font-bold text-[14px] text[#333] ff_poppins mt-2'>Best service</p>
                    <p className=' font-normal text-[14px] text[#333] ff_poppins mt-1'>Good material, Thank you.</p>
                    <Playone/>
                </div>
            </div>
            <div className=' flex flex-wrap justify-between px-7'>
                <div className='w-[90%] md:w-[100%] lg:w-[35%] h-[125px] rounded-[15px] bg-[#c4c4c4] pt-[14px] pb-[15px] pl-[20px] my-[7%] relative'>
                    <p className=' font-normal text-[16px] ff_poppins text-[#333] mb-2'>klyan from Gujarat</p>
                    <Star/>
                    <p className=' font-bold text-[14px] text[#333] ff_poppins mt-2'>Best service</p>
                    <p className=' font-normal text-[14px] text[#333] ff_poppins mt-1'>Good material, Thank you.</p>
                    <Playone/>
                </div>
                <div className='w-[90%] md:w-[100%] lg:w-[35%] h-[135px] rounded-[15px] bg-[#c4c4c4] pt-[14px] pb-[15px] pl-[20px] mt-[%] relative'>
                    <p className=' font-normal text-[16px] ff_poppins text-[#333] mb-2'>Sushant from Mumbai</p>
                    <Star/>
                    <p className=' font-bold text-[14px] text[#333] ff_poppins mt-2'>Wonderful service</p>
                    <p className=' font-normal text-[12px] text[#333] ff_poppins mt-1'>Good deal and very wonderful service thank you.</p>
                    <Play/>
                </div>
            </div>
        </div>
        <img className=' w-[100%] absolute left-0 bottom-[-0%] md:bottom-[-1%]' src={whitee} alt="" />
    </div>
  )
}

export default Around