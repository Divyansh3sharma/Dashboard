import React from 'react'
import formValues from './formValues.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import {useState} from 'react';


const FormValues = ({onDelete,inputValues}) => {
    
    // const inputValues = props.inputValues;
    

    const handleDelte = (index) => {
        onDelete(index);
    }

   

  return (
    // <div className="item_container">
    //     <ul>
    //         {inputValues.map((value,index) =>(
    //             <div className="listItems"> 
    //                  <li  key = {index}><b>Sprint </b>   {value.sprint}</li>
    //                  <li key = {index}><b>Ticket Type : </b>{value.tickettype}</li>
    //                  <li key = {index}><b>SprintWeek : </b>{value.sprintweek}</li>
    //                  <li key = {index}><b>Status : </b>{value.status}</li>
    //                  <li key = {index}><b>Comment : </b>{value.comments}</li>
    //                  <li><Button    variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></li>
    //                  <li><Button variant="outlined" startIcon={<AddSharpIcon />}>Edit</Button></li>
    //              </div>
    //         ))}
    //     </ul>
    // </div>



    <div className="conatiner">
       { inputValues.length > 0 ?
       <>
       {inputValues.map((value,index) =>(
            <div className="items"> 
            <p key = {index}>Sprint ="{value.sprint}"</p>
            <p key = {index}>Sprint-Week ="{value.sprintweek}"</p>
            <p key = {index}>Ticket-Type ="{value.tickettype}"</p>
            <div className="buttons">
            <Button onClick={() => handleDelte(index)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            <Button variant="outlined"  startIcon={<AddSharpIcon />}>Edit</Button>
            </div>
            </div>
        ) 
        )}
        </> : 
        <div className="no-data">No Data</div>
        
    }
    </div>



  )
}

export default FormValues