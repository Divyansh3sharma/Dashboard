import React from 'react'
import new_page from './new_page.css'
import {useState, useEffect} from 'react'
import Form from '../form/Form'

const New_page = () => {
    const [openForm, setOpenForm] = useState(false);

    function handleForm(){
            setOpenForm(true);
    }

  return (
    <div className="new_page">
        <div className="upper_conatiner">
            <div className="button_search">
              <div className="search">  <input type="text" placeholder='Search Sprint'></input> </div>
              <div className="button"><button onClick={handleForm}>Add Items</button> </div> 
            </div>
            
            <div className="form">{openForm && <Form/>} </div>
        </div>

        <div className="lower_conatiner">
            
        </div>
    </div>
  )
}

export default New_page