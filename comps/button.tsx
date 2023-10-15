import {motion} from 'framer-motion'
import { useState } from 'react'

const Button = ({text, style}:any) => {
  const [hover, setHover] = useState(false)
  const variant = {
    active: {scaleX: '100%' },
    inactive: {scaleX: 0}
  }
  return (
    <div className={`relative overflow-hidden rounded-md ${style}`}>
      <button className="bg-blue-500 px-4 text-xl py-2 rounded-md text-whitetransition relative overflow-hidden" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
        <motion.div 
          className=" w-full h-full bg-blue-600 absolute top-0 left-0 scale-x-0"
          initial={{scaleX: 0}}
          animate = {hover ? "active" : 'inactive'}
          variants={variant}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
          }}
        />
        <span className="text-white relative z-10">{text}</span>
      </button>
    </div>
  )
}

export default Button