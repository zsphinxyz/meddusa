import Link from "next/link"
import {GiHospitalCross} from 'react-icons/gi'
import {TbBuildingHospital} from 'react-icons/tb'
import {FaTruckMedical, FaUserDoctor, FaRegCalendarPlus} from 'react-icons/fa6'
import {MdOutlineBedroomChild, MdMan} from 'react-icons/md'

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
        p: string,
    }
    const AboutIcon = "text-5xl border transition block duration-200 text-white w-fit h-fit p-3 border-white text-white rounded-full group-hover:bg-white group-hover:text-blue-500 transition" 
     function About ({Icon ,header, p}:TAbout) {
        return(
            <div className="group text-center text-white w-9/12 md:w-80 flex justify-center items-center flex-col md:flex-row gap-1 md:px-10 transition duration-200">
                {Icon}
                <div>
                    <h1 className="mt-3 md:ml-3 text-4xl font-bold block">{header}</h1>
                    <p className="block">{p}</p>
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
        <section className="mb-10">
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
        <section className="bg-blue-500 text-white py-10 flex flex-col md:flex-row items-center md:justify-around justify-center md:flex-wrap gap-y-10 ">
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
    </main>
  )
}

export default Content