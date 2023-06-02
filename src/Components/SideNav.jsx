import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {MdHomeFilled} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {VscLibrary} from 'react-icons/vsc'
import {AiFillPlusSquare} from 'react-icons/ai'
import {BiHeartSquare} from 'react-icons/bi'

const SideNav = () => {
  return (
    <div>
        <div className='sidenav text-start'>
         <div className='d-grid text-start p-3'>
         <p className='text-light  m-2 '><FiMoreHorizontal/></p>
         <p className='iconss   text-light'><span className='fs-3'> <MdHomeFilled/> </span> Home </p>
         <p className='iconss'><span className='fs-5'> <BsSearch/> </span> Search </p>
         <p className='iconss'><span className='fs-5'> <VscLibrary/> </span> Your Liberary </p>
         <p className='iconss  mt-3'><span className='fs-3'> <AiFillPlusSquare/> </span> <small className=''>Create Playlist </small></p>
         <p className='iconss'><span className='fs-2'> <BiHeartSquare/> </span> <small>Liked Songs</small> </p>
         <hr  className='text-light'/>
         <p className='iconss' >My Playlists</p>
         </div>
        </div>
    </div>
  )
}

export default SideNav