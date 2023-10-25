'use client'
import Button from '@/comps/button'

import banner1 from '@/assets/slider.jpg'
import banner2 from '@/assets/slider2.jpg'
import banner3 from '@/assets/slider3.jpg'

import Image from 'next/image'
import {AnimatePresence, motion} from 'framer-motion' 
import { useState, useEffect } from 'react'


const Banner = () => {
  const [banner, setBanner] = useState(1)
  const banners = [banner1, banner2, banner3]
  useEffect(() => {
    setTimeout(() => {
      setBanner(banner + 1)
      banner >= 3 && setBanner(1);
    }
    , 5000);
  }, [banner])

  const bannerVariants = {
    start: {opacity:0, x:300},
    end: {opacity:1, x:0}
  }

  const transitionVarients = {
    initial: {opacity:0, y:-100},
    animate: {opacity:1, y:0, 
      transition: {duration:0.3, ease: 'easeOut'}
    },
  }

  return (
    <div className="overflow-hidden min-h-[600px] bg-blue-500/30 ">
        <div className="w-fit h-full flex justify-center items-center relative">

            <div className=" px-3 md:px-10 w-screen h-[600px] flex gap-7 flex-col justify-center items-start relative">
              <AnimatePresence>
                <motion.div 
                  transition={{ease: 'easeIn', repeat: Infinity, repeatDelay: 4.7 }}
                  variants={bannerVariants}
                  initial="start"
                  animate="end"
                  exit="start"
                  className='absolute left-0 top-0 w-full h-full -z-20'
                >
                    <Image src={banners[banner-1]} alt='banner1' className='h-full object-cover object-center'/>
                </motion.div>
              </AnimatePresence>
                <motion.h1 variants={transitionVarients} initial="initial" animate='animate' className=" font-bold text-3xl md:text-4xl">We Provide <span className="text-blue-500">Medical </span> Services That You Can <span className="text-blue-500">Trust!</span></motion.h1>
                <motion.p variants={transitionVarients} initial="initial" animate='animate'  className='text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quidem ratione consectetur aliquam consequuntur sequi.</motion.p>
             
              <motion.div initial={{opacity:0, rotate:30}} animate={{opacity:1, rotate:0}} transition={ {duration:0.2, ease:'backOut' } } className="flex gap-3">
                <Button text="Get Appointment" className=" bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md" />
                <Button text="Connect Now" className=" bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md" />
              </motion.div>
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