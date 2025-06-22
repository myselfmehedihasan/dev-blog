/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
const EmptyState = ({ message, address, label }) => {
  return (
    <div className='min-h-[calc(100vh-250px)] gap-5 flex flex-col justify-center items-center pb-16 '>
      <p className='text-gray-600 text-xl lg:text-3xl'>{message}</p>

      <Link
                    to={address}
                    className="w-40 text-center relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group text-md hover:text-black"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">{label}</span>
                  </Link>
    </div>
  )
}

export default EmptyState
