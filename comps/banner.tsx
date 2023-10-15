'use client'
import Button from '@/comps/button'

import banner1 from '@/assets/slider.jpg'
import banner2 from '@/assets/slider2.jpg'
import banner3 from '@/assets/slider3.jpg'

import Image from 'next/image'
import {motion} from 'framer-motion' 

const Banner = () => {
  return (
    <div className="overflow-hidden">
        <div className="w-fit min-h-full flex justify-center items-center">

            <div className=" px-3 md:px-10 w-screen min-h-fit h-96 md:h-[420px] lg:h-[540px] flex gap-7 flex-col justify-center items-start relative">
                <div className='absolute inset-0 -z-20'>
                  <Image src={banner1} alt='banner1' className='object-cover'/>
                  <Image src={banner2} alt='banner2' className='object-cover'/>
                  <Image src={banner3} alt='banner3' className='object-cover'/>
                </div>
                <h1 className=" font-bold text-3xl md:text-4xl">We Provide <span className="text-blue-500">Medical </span> Services That You Can <span className="text-blue-500">Trust!</span></h1>
                <p className='text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quidem ratione consectetur aliquam consequuntur sequi.</p>
             
              <div className="flex gap-3">
                <Button text="Get Appointment" className=" bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md" />
                <Button text="Connect Now" className=" bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md" />
              </div>
            </div>

            <div className=" w-screen min-h-fit h-96 bg-[url(../assets/slider2.jpg)] bg-cover bg-no-repeat">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorem in consectetur quo nemo quia debitis modi adipisci ut magni blanditiis, soluta, eius est provident cumque, ipsam repellendus nesciunt quisquam.
            </div>
            <div className=" w-screen min-h-fit h-96 bg-[url(../assets/slider3.jpg)] bg-cover bg-no-repeat">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorem in consectetur quo nemo quia debitis modi adipisci ut magni blanditiis, soluta, eius est provident cumque, ipsam repellendus nesciunt quisquam.
            </div>
        </div>
    </div>
  )
}

export default Banner