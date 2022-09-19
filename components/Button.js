import React from 'react'

function Button({imp,text}) {
  return (
    <div className={`h-10 w-64 bg-opacity-90 m-2 py-1 rounded-md text-center font-medium ${imp == "secondary"? 'bg-white text-black' : 'bg-gray-800  text-white '}`}>{text}</div>
  )
}

export default Button