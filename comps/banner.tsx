
const Banner = () => {
  return (
    <div className="overflow-hidden">
        <div className="w-fit min-h-full flex justify-center items-center">

            <div className=" px-3 md:px-10 w-screen min-h-fit h-96 md:h-[420px] lg:h-[540px] bg-[url(../assets/slider.jpg)] bg-cover bg-no-repeat flex gap-7 flex-col justify-center items-start">
                <h1 className=" font-semibold text-3xl md:text-4xl">We Provide <span className="text-blue-500">Medical </span> Services That You Can <span className="text-blue-500">Trust!</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quidem ratione consectetur aliquam consequuntur sequi.</p>
             
              <div className="flex gap-3">
                <button className=" bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md">Get Appointment</button>
                <button className=" bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md">Contect Now</button>
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