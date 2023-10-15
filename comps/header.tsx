"use client"
import Button from '@/comps/button'
import Image from "next/image"
import logo from '@/assets/logo.png'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"
import Link from "next/link"

const Header = () => {
    const [menu, setMenu] = useState(true);
    const nav = [
        {
            'id': 1,
            'nav': 'Home'
        },
        {
            'id': 2,
            'nav': 'Service'
        },
        {
            'id': 3,
            'nav': 'Pages'
        },
        {
            'id': 4,
            'nav': 'Blog'
        },
        {
            'id': 5,
            'nav': 'Contact'
        }
    ];
    return (
        <div className="px-10 flex bg-stone-200 py-2 md:px-5 justify-between items-center lg:justify-around">

            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image src={logo} width={70} alt='med-dusa' />
                </Link>
                <h1 className=" text-2xl font-extrabold text-slate-800 select-none" >Med<span className="text-red-500">-</span>Dusa</h1>
            </div>

            <div>
                <button onClick={() => setMenu(!menu)} className=" md:hidden">
                    {menu ? <BiMenu className=" text-[40px] hover:cursor-pointer" /> :
                        <AiOutlineClose className=" text-[40px] hover:cursor-pointer" />
                    }
                </button>

                <div className="hidden md:flex gap-2 lg:gap-4">
                    {
                        nav.map(i => (
                            <Link key={i.id} href={i.nav} className=" px-3 text-blue-600 font-bold hover:text-blue-800"> {i.nav} </Link>
                        ))
                    }
                </div>


                {!menu &&
                    <div className="relative">
                        <ul className="absolute right-5 top-5 [&>*]:leading-3">
                        {
                            nav.map(i => (
                                <Link key={i.id} href={i.nav} className=" px-3 text-blue-600 font-bold hover:text-blue-800"> {i.nav} </Link>
                            ))
                            }  
                        </ul>
                    </div>
                }

            </div>

            <Button text='Book Appointment' style="!hidden lg:!block" />
        </div>
    )
}

export default Header