import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className=' container mx-auto mt-[10%] mb-[5%] px-4'>
            <h2 className='ff_poppins font-bold text-[26px] bcg_sub text-center'>Subscribe our newsletter</h2>
            <p className=' font-normal text-[14px] text-[#333] ff_poppins text-center mt-8 line_height'>Subscribe to our newsletter for daily/weekly <span className=' block'>update of our products and services.</span></p>
            <div className=' flex justify-center'>
                <div class="mt-6 flex w-[100%] sm:w-[60%] lg:w-[40%] gap-x-4">
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto myemail bg-white/5 px-3.5 py-2 outline-none text-black sm:text-sm sm:leading-6" placeholder="Email"/>
                    <button type="submit" class="flex-none px-[40px] py-[17px] text-sm font-semibold text-white shadow-sm bttn_subs">SUBMIT</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe