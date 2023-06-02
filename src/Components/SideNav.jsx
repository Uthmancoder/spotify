import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {AiTwotoneHome} from 'react-icons/ai'

const SideNav = () => {
  return (
    <div>
        <div className='sidenav'>
         <div className='d-grid'>
         <button className='text-light btn btn m-3 fs-5'><FiMoreHorizontal/></button>
         <button className='iconss text-light fs-5'><span> <AiTwotoneHome/> </span> Home </button>
         </div>
        </div>
    </div>
  )
}

export default SideNav