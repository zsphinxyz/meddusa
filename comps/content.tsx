'use client'
import Link from "next/link"
import {GiHospitalCross} from 'react-icons/gi'
import {TbBuildingHospital} from 'react-icons/tb'
import {FaTruckMedical, FaUserDoctor, FaRegCalendarPlus, FaRing} from 'react-icons/fa6'
import {MdOutlineBedroomChild, MdMan} from 'react-icons/md'
import {VscDebugBreakpointLog} from 'react-icons/vsc'
import {motion, useScroll} from 'framer-motion'
import { useState } from "react"
import Button from '@/comps/button'
import video from '@/assets/video-bg.jpg'

import Image from "next/image"

// images 
import p1 from "@/assets/pf1.jpg"
import p2 from "@/assets/pf2.jpg"
import p3 from "@/assets/pf3.jpg"
import p4 from "@/assets/pf4.jpg"

const Content = () => {
    type TInfo = {
        info: string,
        header: string
    }

    function InfoBox ({info, header}:TInfo) {
        return(
            <div className=" w-[90%] bg-blue-500 mx-auto p-7 rounded-md text-white cursor-default hover:shadow-xl shadow-stone-900 hover:-translate-y-1 transition duration-500">
                <p className="text-md ">{info}</p>
                <h1 className="my-4 text-2xl font-bold">{header}</h1>
                <p className="mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut aperiam vitae velit pariatur neque provident tempore nobis error asperiores.</p>
                <Link className="group uppercase font-bold" href="#">Learn More <span className=" inline-block group-hover:translate-x-2 group-hover:scale-x-150 transition "> → </span> </Link>
            </div>
        )
    }

    type TIconText = {
        Icon: JSX.Element,
        header: string,
        p: string,
    }
    const iStyle = "text-7xl border transition duration-200 text-blue-500 p-3 border-blue-500 rounded-full group-hover:bg-blue-500 group-hover:text-white transition" 
    function IconText ({Icon ,header, p}:TIconText) {
        return(
            <div className="group text-center w-9/12 mx-auto flex items-center justify-center flex-col gap-5 md:px-10 transition duration-200">
                {Icon}
                <h1 className="text-xl font-bold text-slate-700">{header}</h1>
                <p className="text-lg text-slate-600">{p}</p>
            </div>
        )
    }
    
    
    type TAbout = {
        Icon: JSX.Element,
        header: string,
        p?: string,
    }

    const AboutIcon = "text-5xl border transition block duration-200 text-white w-fit h-fit p-3 border-white text-white rounded-full group-hover:bg-white group-hover:text-blue-500 transition" 
     function About ({Icon ,header, p}:TAbout) {
        return(
            <div className=" z-10 group text-center text-white w-9/12 md:w-72 flex justify-center items-center flex-col md:flex-row gap-1 md:px-10 transition duration-200">
                {Icon}
                <div>
                    <h1 className="mt-3 md:ml-3 text-4xl font-bold block">{header}</h1>
                    <p className="block">{p}</p>
                </div>
            </div>
        )
    }


    const TreatIcon = 'text-5xl'
    function Treatment ({Icon, header}:TAbout) {
        return(
            <div className="flex px-10 items-center gap-3">
                <div className="text-blue-500">
                    {Icon}
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-700 mb-2 lg:text-xl">{header}</h1>
                    <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elitas corporis quibusdam hic? Labore, aliquid ea.</p>
                </div>
            </div>
        )
    }


  return (
    <main>
            {/* 3 Boxes  */}
        <section className="flex px-5 justify-center items-stretch gap-5 flex-col my-10 mx-auto md:flex-row max-w-[1460px]">
            <InfoBox 
                info="Info1"
                header="Emergency Cases"
            />
            <InfoBox 
                info="Info2"
                header="Doctors Timetable"
            />
            <InfoBox 
                info="Info3"
                header="Opening Hours"
            />
        </section>

            {/* 3 Icons */}
        <section className="my-10 md:my-28">
            <h1 className="text-center px-10 text-3xl text-slate-700 font-bold mb-5">We Are Always Ready To Help You & Your Family</h1>
            <p className="text-center mb-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, eveniet.</p>
            <div className="flex flex-col md:flex-row gap-10">
                <IconText
                    Icon = {<FaTruckMedical className={iStyle} />}
                    header="Emergency Help"
                    p = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, atque?"
                />
                
                <IconText
                    Icon = {<TbBuildingHospital className={iStyle} />}
                    header="Enriched Pharmecy"
                    p = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, atque?"
                />
                
                <IconText
                    Icon = {<GiHospitalCross className={iStyle} />}
                    header="Medical Treatment"
                    p = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, atque?"
                />
            </div>
        </section>

            {/* About */}
        <section className="my-10 md:my-28 bg-blue-500 text-white py-10 md:py-20 flex flex-col md:flex-row items-center md:justify-around justify-center md:flex-wrap gap-y-10 bg-[url('../assets/bread-bg.jpg')] bg-cover bg-center relative before:w-full before:h-full before:bg-blue-500/95 md:before:bg-blue-500/70 before:absolute before:inset-0">
            <About 
                Icon={<MdOutlineBedroomChild className={AboutIcon} />}
                header="255"
                p='Hospital Rooms'
            />
            <About 
                Icon={<FaUserDoctor className={AboutIcon} />}
                header="80"
                p='Specialist Doctors'
            />
            <About 
                Icon={<MdMan className={AboutIcon} />}
                header="138"
                p='Patients'
            />
            <About 
                Icon={<FaRegCalendarPlus className={AboutIcon} />}
                header="32"
                p='Years of Experience'
            />
        </section>

            {/* Who Are We section */}
        <section className="my-10 md:mb-28 px-5 py-3 md:px-10">
            <h1 className=" text-center text-2xl md:text-4xl font-bold text-slate-700">We Offer Different Services To Improve Your Health</h1>
            <p className=" text-center text-xl text-md my-5 text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla facere deleniti.</p>

            <div className="flex flex-col md:flex-row">
                <div className="text-slate-700">
                    <h1 className=" text-3xl font-bold text-slate-700 mb-8">Who We Are</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum veritatis praesentium accusamus alias, quos fugit fugiat. Odio animi perferendis possimus praesentium excepturi esse vitae? Perferendis voluptas distinctio natus cupiditate.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reiciendis nesciunt eligendi?</p>
                    <ul className='my-5 list-inside grid grid-cols-1 grid-rows-6 grid-flow-col md:grid-cols-2 md:grid-rows-3 list-none'>
                        <li><VscDebugBreakpointLog className=' inline-block mr-2 text-blue-500'/>Lorem, ipsum dolor.</li>
                        <li><VscDebugBreakpointLog className=' inline-block mr-2 text-blue-500'/>Lorem ipsum dolor.</li>
                        <li><VscDebugBreakpointLog className=' inline-block mr-2 text-blue-500'/>Lorem ipsum dolor.</li>
                        <li><VscDebugBreakpointLog className=' inline-block mr-2 text-blue-500'/>Lorem, ipsum dolor.</li>
                        <li><VscDebugBreakpointLog className=' inline-block mr-2 text-blue-500'/>Lorem, ipsum dolor.</li>
                    </ul>
                </div>

                <div className="px-5 self-center md:h-[400px] grid items-center">
                    <Image src={video} alt='video' className=" bg-cover object-cover rounded" />
                </div>
            </div>
        </section>

            {/* Emergency Call */}
        <section className="my-10 md:mb-28 py-10 px-5 bg-blue-500 flex flex-col gap-10 text-center md:px-40 md:gap-16 md:py-16 md:bg-[url('../assets/call-bg.jpg')] bg-cover bg-blend-soft-light">
            <h1 className="text-3xl md:text-4xl text-white font-bold max-w-[700px] mx-auto">Do you need Emergency Medical Care? Call @ +95 999 999 999</h1>
            <p className="text-white text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit repudiandae eos.</p>
            <div className="flex gap-3 w-full items-center justify-center">
                <Button text="Contact Now" style="bg-white text-blue-700"  />
                <Button text="Learn More" style="bg-transparent border border-white"  />
            </div>
        </section>

            {/* Maintain Section */}
        <section className="px-5 mb-10 md:mb-28">
            <h1 className="text-3xl md:text-4xl text-center text-slate-700 font-bold ">We maintain Cleanliness Rules Inside Our Hospital</h1>
            <p className="my-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit nam voluptate nobis vero.</p>

            <div className="flex gap-5 w-11/12 my-auto overflow-scroll mx-auto">
                <Image src={p1} alt='01' className=""/>
                <Image src={p2} alt='02' className=""/>
                <Image src={p3} alt='03' className=""/>
                <Image src={p4} alt='04' className=""/>
            </div>

        </section>

            {/* Improve your health section  */}
        <section className="mb-28 px-5">
            <h1 className="text-3xl md:text-4xl text-center text-slate-700 font-bold ">We Offer Different Services to Improve Your Health</h1>
            <p className="my-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit nam voluptate nobis vero.</p>

            <div className="grid gap-y-10 gap-x-3 my-auto md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
                <Treatment
                    Icon={<GiHospitalCross className={TreatIcon}/>}
                    header="General Treatments"
                />
                <Treatment
                    Icon={<GiHospitalCross className={TreatIcon}/>}
                    header="Teeth Whitening"
                />
                <Treatment
                    Icon={<GiHospitalCross className={TreatIcon}/>}
                    header="Heart Surgery"
                />
                <Treatment
                    Icon={<GiHospitalCross className={TreatIcon}/>}
                    header="Ear Treatment"
                />
                <Treatment
                    Icon={<GiHospitalCross className={TreatIcon}/>}
                    header="Vision Problems"
                />
                <Treatment
                    Icon={<GiHospitalCross className={TreatIcon}/>}
                    header="Blood Transfusion"
                />
            </div>

        </section>



    </main>
  )
}

export default Content