import React from 'react'
import living from "../assets/img/living.png";
import kitchen from "../assets/img/dining.png";
import office from "../assets/img/bathroom.png";
import both from "../assets/img/bathroom.png";
import bed from "../assets/img/bedroom.png";

const Gallery = () => {
  return (
    <div>
        <div className=' container mx-auto px-4 mb-12'>
            <div className=' text-center'>
                <h2 className=' font-bold text-[32px] ff_poppins bcg_gallery pt-3 xl:pt-0'>Gallery</h2>
            </div>
            <div className=' flex flex-wrap justify-center items-center mt-9'>
                <div className=' lg:mr-[122px]'>
                    <div class=""><img src={living} alt="" /></div>
                    <p className=' font-medium text-[28px] bcg_living ff_poppins'>Living Room</p>
                     <div class=" mt-12 lg:mt-[212px]"><img src={kitchen} alt="" /></div>
                     <p className=' font-medium text-[28px] ff_poppins bcg_living'>Kitchen</p>
                </div>
                <div>
                    <div class= " mt-12 lg:mt-[92px]"><img src={office} alt="" /></div>
                    <p className=' font-medium text-[28px] ff_poppins bcg_living'>Office</p>
                    <div class=" mt-12 lg:mt-[152px]"><img src={both} alt="" /></div>
                    <p className=' font-medium text-[28px] bcg_living'>Bath</p>
                    <div class=" mt-12 lg:mt-[152px]"><img src={bed} alt="" /></div>
                    <p className=' font-medium text-[28px] ff_poppins bcg_living'>Bed Room</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Gallery