import NavBar from './NavBar.css'
import React from 'react'
import { FaCog } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


function Navbar() {
  return (
    <div className='Navbar'>
        <div className="Home">Home</div>
        <div className="Search">
           <div className="Input" >
           <input type="text" placeholder='Search'></input>
           </div>
           <div className="Icon">
                <div><FaCog /></div>
                <div><FaComment /></div>
                <div><FaGlobe /></div>

           </div>
        </div>
        

</div>
  )
}

export default Navbar