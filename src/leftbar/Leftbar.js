import React from 'react'
import leftbar  from './leftbar.css'
import Form from '../form/Form'
import { useState } from 'react'

const Leftbar = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const {tracker} = props; 
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
     
     <li>
     
      <span  onClick={ () => setOpenModal(true)}>Tracker</span>
      {openModal && <Form />}
     </li>
     </ul>
    </div>
  )
}

export default Leftbar