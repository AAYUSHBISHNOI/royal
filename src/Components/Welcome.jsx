import React from 'react'
import imgone from "../assets/img/img3.png";



const Welcome = () => {
  return (
    <div className=' relative mb-7 px-4'>
        <div className=' container mx-auto'>
                <div className=' sm:flex flex-wrap'>
                    <div className=' w-[100%] xl:w-[50%] xl:mt-3 flex justify-center xl:justify-start'>
                        <img className='' src={imgone} alt="" />
                    </div>
                    <div className=' w-[100%] xl:w-[50%] text-center xl:text-start mt-9'>
                        <h2 className=' font-bold text-[32px] ff_poppins bcg_welcome'>Welcome to RP</h2>
                        <p className=' font-normal text-[14px] md:text-[15px] ff_poppins text-[#333] line_height mb-8 mt-6'>A family-run business, with our own factory nestled in India, we are producing a <span className=' lg:block'>complete range of traditional and modern paints. We formulate high</span><span className='lg: block'>performance paint, blended with the best ingredients. Our company includes</span><span className=' lg:block'> interior and exterior paints, oil-based paints, floor paints and a special range of</span><span className=' lg:block'> antimicrobial paints.</span><span className=' lg:block'>With a color palette you can easily mix the colors together to expand the range. </span><span className=' lg:block'>The numbers of creating different textures, finishes and shades are unlimited.  </span></p>
                        <div className=' flex justify-center xl:justify-start'>
                          <button className='bttn_more font-bold text-base text-white'>MORE</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Welcome