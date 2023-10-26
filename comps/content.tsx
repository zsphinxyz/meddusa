'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import {GiHospitalCross} from 'react-icons/gi'
import {TbBuildingHospital, TbClipboardList, TbHeartFilled} from 'react-icons/tb'
import {FaTruckMedical, FaUserDoctor, FaRegCalendarPlus, FaTooth, FaScissors, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP} from 'react-icons/fa6'
import {MdOutlineBedroomChild, MdMan, MdHearing, MdRemoveRedEye} from 'react-icons/md'
import {VscDebugBreakpointLog} from 'react-icons/vsc'
import {BiSolidDonateBlood, BiSolidCheckSquare, BiSend} from 'react-icons/bi'
import {AiFillCloseSquare} from 'react-icons/ai'


import {motion} from 'framer-motion'

import Button from '@/comps/button'


// images 
import video from '@/assets/video-bg.jpeg'
import p1 from "@/assets/pf1.jpg"
import p2 from "@/assets/pf2.jpg"
import p3 from "@/assets/pf3.jpg"
import p4 from "@/assets/pf4.jpg"

import n1 from "@/assets/blog1.jpeg"
import n2 from "@/assets/blog2.jpeg"
import n3 from "@/assets/blog3.jpeg"

import c1 from "@/assets/client1.png"
import c2 from "@/assets/client2.png"
import c3 from "@/assets/client3.png"
import c4 from "@/assets/client4.png"
import c5 from "@/assets/client5.png"
const clients = [c1, c2, c3, c4, c5]

import contact from "@/assets/contact-img.jpeg"

const Content = () => {
    
        // Framer
    const contentV = {
        init: {opacity:1},
        view: {opacity:1, transition:{duration: 1.2}, viewport:{once:false}}
    }

    const leftV = {
        init: {opacity:0, x:-100},
        view: {opacity:1, x:0, transition:{duration: 1.2}, viewport:{once:false}},
    }

    const rightV = {
        init: {opacity:0, x:100},
        view: {opacity:1, x:0, transition:{duration: 1.2}, viewport:{once:false}},
    }

        // Types
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

    const AboutIcon = "text-5xl transition block duration-200 text-white w-fit h-fit text-white group-hover:text-blue-500" 
     function About ({Icon ,header, p}:TAbout) {
        return(
            <div className=" z-10 group text-center text-white w-9/12 md:w-72 flex justify-center items-center flex-col md:flex-row gap-1 md:px-10 transition duration-200">
                <div className="p-3 border rounded-full group-hover:bg-white transition">
                    {Icon}
                </div>
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
            <div className="flex px-3 md:px-5 items-center gap-3">
                <div className="text-blue-500">
                    {Icon}
                </div>

                <div className=" ml-3 md:ml-0">
                    <h1 className="text-2xl font-bold text-slate-700 mb-2 lg:text-xl">{header}</h1>
                    <p className="text-slate-600 whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur adipisicing elitas corporis quibusdam hic? Labore, aliquid ea.</p>
                </div>
            </div>
        )
    }

    const BookIcon = "text-6xl mx-auto text-blue-500"
    function Book({Icon, header, p}:TAbout) {
        return(
            <div className="flex flex-col border border-slate-400 rounded-lg gap-2 justify-center p-5 w-full max-w-[600px]">
                {Icon}
                <p className="text-2xl text-slate-700 font-bold text-center">{header}</p>
                <h1 className="bold text-center text-4xl font-bold text-blue-500 ">${p} <span className="text-sm font-normal text-slate-500">/Per Visit</span></h1>
                <ul className="flex flex-col gap-5 mt-5 text-lg text-slate-700 w-full">
                    <li className="flex">Lorem ipsum dolor sit amet. <BiSolidCheckSquare className="inline-block ml-auto text-blue-500 text-2xl" /> </li>
                    <li className="flex">Lorem ipsum dolor sit amet. <BiSolidCheckSquare className="inline-block ml-auto text-blue-500 text-2xl" /> </li>
                    <li className="flex">Lorem ipsum dolor sit amet. <BiSolidCheckSquare className="inline-block ml-auto text-blue-500 text-2xl" /> </li>
                    <li className="flex">Lorem ipsum dolor sit amet. <AiFillCloseSquare className="inline-block ml-auto text-slate-500 text-2xl" /> </li>
                    <li className="flex">Lorem ipsum dolor sit amet. <AiFillCloseSquare className="inline-block ml-auto text-slate-500 text-2xl" /> </li>
                </ul>
                <Button text="Book Now" style='w-full mt-5'/>
            </div>
        )
    }

    function News({Icon, header}:TAbout) {
        return(
            <div className="block max-w-[500px] mx-auto border-b-2 border-gray-300 hover:border-blue-500 transition pb-3">
                {Icon}
                <Button text="22 Aug, 2020" style="mt-3"/>
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-700 mt-5 mb-2">{header}</h1>
                <p className=" text-lg lg:text-xl text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis laborum ullam maxime iste ratione sint velit suscipit?</p>
            </div>
        )
    }

  return (
    <motion.section
        variants={contentV}
        initial="init"
        whileInView="view"
        className="cursor-default"
    >
            {/* 3 Boxes  */}
        <motion.section className="flex px-5 justify-center items-stretch gap-5 flex-col my-10 mx-auto md:flex-row max-w-[1460px]" variants={leftV}>
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
        </motion.section>

            {/* 3 Icons */}
        <motion.section className="my-10 md:my-28" variants={rightV}>
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
        </motion.section>

            {/* About */}
        <motion.section 
            className="my-10 md:my-28 bg-blue-500 text-white py-10 md:py-20 flex flex-col md:flex-row items-center md:justify-around justify-center md:flex-wrap gap-y-10 bg-[url('../assets/bread-bg.jpg')] bg-cover bg-center relative before:w-full before:h-full before:bg-blue-500/95 md:before:bg-blue-500/70 before:absolute before:inset-0"
            variants={leftV}
        >
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
        </motion.section>

            {/* Who Are We section */}
        <motion.section className="my-10 md:mb-28 px-5 py-3 md:px-10" variants={rightV}>
            <h1 className=" text-center text-2xl md:text-4xl font-bold text-slate-700">We Offer Different Services To Improve Your Health</h1>
            <p className=" text-center text-xl text-md my-5 text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla facere deleniti.</p>

            <div className="flex flex-col md:flex-row justify-center">
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

                <div className="px-5 self-center">
                    <Image src={video} alt='video' className="rounded w-[400px] max-w-[900px] bg-cover" />
                </div>
            </div>
        </motion.section>

            {/* Emergency Call */}
        <motion.section className="my-10 md:mb-28 py-10 px-5 bg-blue-500 flex flex-col gap-10 text-center md:px-40 md:gap-16 md:py-16 md:bg-[url('../assets/call-bg.png')] bg-cover" variants={leftV}>
            <h1 className="text-3xl md:text-4xl text-white font-bold max-w-[700px] mx-auto">Do you need Emergency Medical Care? Call @ +95 999 999 999</h1>
            <p className="text-white text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit repudiandae eos.</p>
            <div className="flex gap-3 w-full items-center justify-center">
                <Button text="Contact Now" style="!bg-white !text-blue-500"  />
                <Button text="Learn More" style="!bg-transparent !border !border-white"  />
            </div>
        </motion.section>

            {/* Maintain Section */}
        <motion.section className="px-5 mb-10 md:mb-28" variants={rightV}>
            <h1 className="text-3xl md:text-4xl text-center text-slate-700 font-bold ">We maintain Cleanliness Rules Inside Our Hospital</h1>
            <p className="my-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit nam voluptate nobis vero.</p>

            <div className="flex gap-5 w-11/12 my-auto overflow-x-scroll justify-center">
                <Image src={p1} alt='01' className=""/>
                <Image src={p2} alt='02' className=""/>
                <Image src={p3} alt='03' className=""/>
                <Image src={p4} alt='04' className=""/>
            </div>
        </motion.section>

            {/* Improve your health section  */}
        <motion.section className="mb-10 md:mb-28 px-1 md:px-5" variants={leftV}>
            <h1 className="text-3xl md:text-4xl text-center text-slate-700 font-bold ">We Offer Different Services to Improve Your Health</h1>
            <p className="my-10 text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit nam voluptate nobis vero.</p>

            <div className="grid gap-y-10 gap-x-3 my-auto md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
                <Treatment
                    Icon={<TbClipboardList className={TreatIcon}/>}
                    header="General Treatments"
                />
                <Treatment
                    Icon={<FaTooth className={TreatIcon}/>}
                    header="Teeth Whitening"
                />
                <Treatment
                    Icon={<TbHeartFilled className={TreatIcon}/>}
                    header="Heart Surgery"
                />
                <Treatment
                    Icon={<MdHearing className={TreatIcon}/>}
                    header="Ear Treatment"
                />
                <Treatment
                    Icon={<MdRemoveRedEye className={TreatIcon}/>}
                    header="Vision Problems"
                />
                <Treatment
                    Icon={<BiSolidDonateBlood className={TreatIcon}/>}
                    header="Blood Transfusion"
                />
            </div>
        </motion.section>

            {/* Provide Section  */}
        <motion.section className="px-5 mb-10 md:mb-28" variants={rightV}>
            <div className="md:w-[620px] mx-auto">
                <h1  className="text-3xl md:text-4xl text-center text-slate-700 font-bold ">We Provide You The Best Treatment In Resonable Price</h1>
                <p className="my-10 text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit nam voluptate nobis vero.</p>
            </div>

            <div className="flex flex-col gap-3 w-full justify-center items-center lg:flex-row lg:max-w-[1200px] mx-auto">
                <Book Icon={<FaScissors className={BookIcon} />} header="Plastic Surgery" p="399" />
                <Book Icon={<FaTooth className={BookIcon} />} header="Teeth Whitening" p="299"  />
                <Book Icon={<TbHeartFilled className={BookIcon} />} header="Heart Surgery" p="199"  />
            </div>

        </motion.section>

            {/* News  */}
        <motion.section className="flex flex-col" variants={leftV}>
            <div className="md:w-[620px] mx-auto">
                <h1  className="text-3xl md:text-4xl text-center text-slate-700 font-bold ">Keep Up With Our Most Recent Medical News.</h1>
                <p className="my-10 text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit nam voluptate nobis vero.</p>
            </div>

            <div className="flex flex-col px-5 lg:flex-row gap-5 max-w-[1900px] mx-auto mb-10 lg:mb-28">
                <News Icon={<Image src={n1} alt='n1' />} header="We have announced our new product."/>
                <News Icon={<Image src={n2} alt='n2' />} header="Top Five Ways for Solving Teeth Problems."/>
                <News Icon={<Image src={n3} alt='n3' />} header="We Provide Highly Business Solutons."/>
            </div>
        </motion.section>

            {/* Sponsors  */}
        <motion.section className="flex flex-col bg-blue-500 py-10 my-10 md:my-28" variants={rightV}>
            <h1 className="text-3xl md:text-5xl text-center font-bold mb-5 text-white capitalize">Companies we work with Together</h1>
            <div className="flex overflow-x-scroll scroll-smooth">
                {
                clients.map((img, index) => (
                    <Image key={index} height={500} src={img} alt='client' className="object-contain mx-20 aspect-video"/>
                    ))
                }
            </div>
        </motion.section>

            {/* form  */}
        <motion.section className="max-w-[1000px] mx-auto mb-10 md:mb-28" variants={leftV}>
            <div className="md:w-[620px] mx-auto">
                <h1  className="text-3xl md:text-4xl text-center text-slate-700 font-bold capitalize ">we are always ready to help you. Book an appointment</h1>
                <p className="my-10 text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit nam voluptate nobis vero.</p>
            </div>
            <div className="flex items-center ">
                <form className="flex flex-col items-center w-full">
                    <input className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 mb-5 focus:bg-blue-100"  type="text" placeholder="Enter Name" />
                    <input className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 mb-5 focus:bg-blue-100" type="email" placeholder="Enter Email" />
                    <input className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 mb-5 focus:bg-blue-100" type="tel" placeholder="Enter Phone" />
                    <select  className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 mb-5 focus:bg-blue-100 ">
                        <option value="d1" disabled>Department</option>
                        <option value="d2">Cardiac</option>
                        <option value="d3">Neurology</option>
                        <option value="d4">Dentist</option>
                        <option value="d5">Gastroenterology</option>
                        <option value="d6">Others</option>
                    </select>
                    <input className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 mb-5 hover:bg-blue-200" type="date" placeholder="Enter Date" />
                    <input className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 mb-5 hover:bg-blue-200" type="number" min={1} max={120} placeholder="Enter Age" />
                    <textarea className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 mb-5 hover:bg-blue-200" cols={5} rows={5} placeholder="Enter Additional Information"></textarea>
                    <Button text="Book an Appointment" />
                </form>

                <div className="hidden md:block ml-auto w-full h-full self-start">
                    <Image src={contact} width={500} alt='contact' />
                </div>
            </div>
        </motion.section>

            {/* NewsLatter  */}
        <motion.section className="bg-blue-500 py-10 mb-10 md:mb-28" variants={rightV}>
            <div className="md:w-[620px] mx-auto pb-5">
                <h1  className="text-3xl md:text-4xl text-center text-slate-100 font-bold capitalize ">Sign Up for Newsletter</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 md:flex-row max-w-[520px] mx-auto">
                <input type="email" className="text-xl px-3 py-2 rounded-lg w-9/12 border-blue-500 border-2 hover:bg-blue-200" placeholder="Enter Your Email"/>
                <Button text='Subscribe' style="!bg-white !text-blue-500" />
            </div>
        </motion.section>

            {/* Footer */}
        <motion.footer className=" bg-blue-500 text-white py-10 px-5 " variants={leftV}>
            <div className="max-w-[1400px] mx-auto flex flex-wrap gap-8 items-start justify-start lg:justify-center"> 
                <div className="flex-1 max-w-[300px]">
                    <h1 className="text-2xl font-bold ">About us</h1>
                    <div className="w-32 h-1 bg-white my-3" />
                    <p className="text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, voluptas officiis! Saepe officia totam, ratione velit obcaecati quod minima error.</p>
                    <div className="text-4xl flex gap-5 my-5">
                        <FaFacebookF    className="border-white w-fit hover:bg-white hover:text-blue-500 transition border-2 p-2 rounded-full" />
                        <FaTwitter      className="border-white w-fit hover:bg-white hover:text-blue-500 transition border-2 p-2 rounded-full" />
                        <FaInstagram    className="border-white w-fit hover:bg-white hover:text-blue-500 transition border-2 p-2 rounded-full" />
                        <FaPinterestP   className="border-white w-fit hover:bg-white hover:text-blue-500 transition border-2 p-2 rounded-full" />
                    </div>
                </div>

                <div className="lg:px-12">
                    <h1 className="text-2xl font-bold ">Quick Links</h1>
                    <div className="w-32 h-1 bg-white my-3" />
                    <ul className="text-xl flex flex-col gap-3 list-disc ml-7">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="lg:px-12">
                    <h1 className="text-2xl font-bold ">Open Hours</h1>
                    <div className="w-32 h-1 bg-white my-3" />
                    <ul className="text-xl flex flex-col gap-3 ml-7 md:ml-0">
                        <li className="flex ">Monday - Friday <span className="ml-auto">8:00 - 20:00</span>   </li>
                        <li className="flex ">Saturday        <span className="ml-auto">8:00 - 20:00</span>   </li>
                        <li className="flex ">Sunday          <span className="ml-auto">8:00 - 20:00</span>   </li>
                    </ul>
                </div>

                <div className="mx-auto max-w-[500px] flex-1 px-5">
                <h1 className="text-2xl font-bold ">Newsletter</h1>
                    <div className="w-32 h-1 bg-white my-3" />
                    <div className="flex w-full">
                        <input type="text" placeholder="Your Email Address..." className="bg-transparent border-white border-2 px-2 flex-1 rounded-s-lg"/>
                        <BiSend className="text-5xl text-blue-500 bg-white p-1 rounded-e-lg" />
                    </div>
                </div>
            </div>
        </motion.footer>
    </motion.section>
  )
}

export default Content