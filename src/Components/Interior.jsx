import React from 'react'
import Slider from "react-slick";
import house from "../assets/img/house.png";
import int from "../assets/img/img1.png";
import color from "../assets/img/color.png";
import slider1 from "../assets/img/slider1.png";
import slider2 from "../assets/img/slider2.png";

const Interior = () => {
    const settings = {
        arrows: false,
        autoplay:true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3, 
        responsive: [
            {
              breakpoint: 999,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding:'0px',
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
             
    };
  return (
    <div className='bcg_gradiant relative'>
        <img className=' absolute left-0 top-[-1%] w-[100%]' src={slider1} alt="" />
        <div className=' container mx-auto flex justify-center items-center pt-[17%] pb-[20%] xl:pb-[10%] xl:pt-[13%]'>
                <Slider {...settings} className=' flex items-center justify-center'>
                    <div className='my_slider'>
                <div className=' card_one my-2 md:my-28 w-[90%] md:w-[80%] lg:w-[100%]'>
                    <div>
                        <h2 className=' font-bold text-[28px] ff_poppins bcg_int my_text'>Exterior </h2>
                        <img className='img_hgt mt-[19px]' src={house} alt="" />
                        <div className='my_bttn mt-[15px]'>
                            <button className=' font-bold text-[16px] ff_poppins text-white btn_more'>MORE</button>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className='my_slider'>
                <div className=' card_one my-2 md:my-28 w-[90%] md:w-[80%] lg:w-[100%]'>
                <div>
                        <h2 className=' font-bold text-[28px] ff_poppins bcg_int my_text'>Interior</h2>
                        <img className='img_hgt mt-[19px]' src={int} alt="" />
                        <div className=' my_bttn mt-[15px]'>
                            <button className=' font-bold text-[16px] ff_poppins text-white btn_more'>MORE</button>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className='my_slider'>
                <div className=' card_one my-2 md:my-28 w-[90%] md:w-[80%] lg:w-[100%]'>
                <div>
                        <h2 className=' font-bold text-[23px] ff_poppins bcg_int my_text'>your perfect color</h2>
                        <img className='img_hgt mt-[19px]' src={color} alt="" />
                        <div className=' my_bttn mt-[15px]'>
                            <button className=' font-bold text-[16px] ff_poppins text-white btn_more'>MORE</button>
                        </div>
                    </div> </div>
                    </div>
                    <div className='my_slider'>
                <div className=' card_one my-2 md:my-28 w-[90%] md:w-[80%] lg:w-[100%]'>
                    <div>
                        <h2 className=' font-bold text-[28px] ff_poppins bcg_int my_text'>Exterior </h2>
                        <img className='img_hgt mt-[19px]' src={house} alt="" />
                        <div className=' my_bttn mt-[15px]'>
                            <button className=' font-bold text-[16px] ff_poppins text-white btn_more'>MORE</button>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className='my_slider'>
                <div className=' card_one my-2 md:my-28 w-[90%] md:w-[80%] lg:w-[100%]'>
                <div>
                        <h2 className=' font-bold text-[28px] ff_poppins bcg_int my_text'>Interior</h2>
                        <img className='img_hgt mt-[19px]' src={int} alt="" />
                        <div className=' my_bttn mt-[15px]'>
                            <button className=' font-bold text-[16px] ff_poppins text-white btn_more'>MORE</button>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className='my_slider'>
                <div className=' card_one my-2 md:my-28w-[90%] md:w-[80%] lg:w-[100%]'>
                <div>
                        <h2 className=' font-bold text-[28px] ff_poppins bcg_int  my_text'>your perfect color</h2>
                        <img className='img_hgt mt-[19px]' src={color} alt="" />
                        <div className=' my_bttn mt-[15px]'>
                            <button className=' font-bold text-[16px] ff_poppins text-white btn_more'>MORE</button>
                        </div>
                    </div> </div>
                    </div>
                </Slider>
        </div>
        <img className=' absolute left-0 bottom-[-1%] w-[100%] xl:h-[15%]' src={slider2} alt="" />
    </div>
  )
}

export default Interior