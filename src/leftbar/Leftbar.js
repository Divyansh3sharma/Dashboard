import React from 'react'
import leftbar  from './leftbar.css'
// import Form from '../form/Form'
// import { useState } from 'react'

const Leftbar = ({handleTracker}) => { 
  return (
    <div className='Leftbar'>
     <ul className='OrderList'>
     <li>Dashboard</li>
     <li>User</li>
     <li>Product</li>
     <li>Cart</li>
     <li>Notification</li>
     <li>Stats</li>
     <li>Revenue</li>
     <li onClick={()=>handleTracker()}>Tracker</li>
     </ul>
    </div>
  )
}

export default Leftbar