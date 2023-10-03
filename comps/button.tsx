type Tbtn = {
  text: 'string'
}

const Button = ({text}:Tbtn) => {
  return (
    <div className="relative overflow-hidden rounded-md">
      <button className="bg-blue-600 px-3 py-1 rounded-md text-whitetransition relative group">
        <div className="w-full rounded-md h-full bg-gradient-to-r from-blue-500 to-pink-600 duration-300 transition-all absolute left-0 top-0 
        group-hover:bg-gradiant-to-r group-hover:from-blue-900 group-hover:from-100% group-hover:to-pink-600 group-hover:to-100%"></div>
        <span className="text-white relative z-10">{text}</span>
      </button>
    </div>
  )
}

export default Button