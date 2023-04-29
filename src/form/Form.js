import React from 'react'
import form from './form.css'
import { useState } from 'react';
import { useEffect } from 'react';


const Form = () => {
    const initialvalues = {sprint: "",sprintweek :"", tickettype: "", parentticketno: "", ticketno: "", efforthours: "", status: "", comment: ""} ;
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const[Arr,setArr] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setArr(Arr => [...Arr,formValues]);

        console.log(formValues);
        console.log(Arr);
        setIsSubmit(true);
    }

    useEffect(() => {
        // console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            // console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) =>{
        const errors = {};
        const regex = /^[a-zA-Z0-9-]+$/

        if(!values.sprint){
            errors.sprint = "*Sprint is required"
        }
        else if (!regex.test(values.sprint)) {
            errors.sprint = "*This is not a valid sprint format!";
          }
        if(!values.sprintweek){
            errors.sprintweek = "*Sprint Week is required"
        }
       

          if(!values.tickettype){
            errors.tickettype = "*Ticket Type is required"
            
            if(values.tickettype === "Task" || values.tickettype=== "Defect"){

            if(!values.parentticketno){
                errors.parentticketno = "*Parent Ticket No Type is required"
            }
            else if (!regex.test(values.parentticketno)) {
                errors.parentticketno = "*This is not a valid Parent Ticket No format!";
              }
            }
        }

        if(!values.ticketno){
            errors.ticketno = "*Ticket No is required"
        }
        if(!values.efforthours){
            errors.efforthours = "*Effort hours is required"
        }
        if(!values.status){
            errors.status = "*Status is required"
        }
        if(!values.comments){
            errors.comments = "Comment is required"
        }

        return errors;
    }

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    <div className="values">

        
        <div className="field">
            <label>Sprint</label>
            <input type="text" name = "sprint" placeholder="Sprint" value={formValues.sprint} onChange={handleChange} />
        </div>
        <p className="error-check">{formErrors.sprint}</p>
    

        <div className="field">
        <label>Sprint Week</label>
        <select name="sprintweek"   value={formValues.sprintweek}  onChange={handleChange} defaultValue={null}>
            <option>Select</option>
            <option>Week 1</option>
            <option>Week 2</option>
            <option>Week 3</option>
            <option>Week 4</option> 
            
        </select>
        </div>
        <p className="error-check" >{formErrors.sprintweek}</p>
    
    
        <div className="field">
        <label>Ticket Type</label>
        <select name="tickettype" value={formValues.tickettype} onChange = {handleChange}>
            <option>Select</option>
            <option>Story</option>
            <option>Task</option>
            <option>Defect</option>
            <option>Bug</option>
        </select>
        </div>
        <p className="error-check" >{formErrors.tickettype}</p>

        {
            formValues.tickettype === "Task" || formValues.tickettype === "Defect" 
                && 
                <div className="Field">
            <label> Parent Ticket No</label>
            <input type="text" name="parentticketno" value = {formValues.parentticketno} onChange={handleChange} />
            <p className="error-check" >{formErrors.parentticketno}</p>
        </div>
        }
        
    <div className="field">
    <label>Ticket No</label>
    <input type="text" name = "ticketno" value={formValues.ticketno} onChange={handleChange} />
    </div>
    <p className="error-check">{formErrors.ticketno}</p>

    <div className="field">
    <label>Effort Hours</label>
    <input type='number' min='0' max = '8' name= "efforthours" values = {formValues.efforthours}  onChange={handleChange} />
    </div>
    <p className="error-check">{formErrors.efforthours}</p>

    <div className="field">
    <label>Status</label>
    <select  name="status" value = {formValues.status} onChange={handleChange}>
        <option>Select</option>
        <option>Completed</option>
        <option>Completed</option>
        <option>Blocked</option>
    </select>
    </div>
    <p className="error-check">{formErrors.status}</p>

    <div className="field">
    <label>Comments</label>
    <input type="text" name = "comments"  value={formValues.comments} onChange={handleChange}/>
    </div>
    <p className="error-check">{formErrors.comments}</p>

    <br></br>
    <button className="btn">Submit</button>
  
    </div>
    <table border={1} width = "30%" cellPadding={10}>
    <tbody>
        <tr>
            <td>Sprint</td>
            <td>Ticket Type</td>
            <td>Sprint Week</td>
            <td>Status</td>
        </tr>
        {
        Arr.map(
            (info, ind) =>{
                return(
                    <tr key={ind}>
                        <td>{info.sprint}</td>
                        <td>{info.tickettype}</td>
                        <td>{info.sprintweek}</td>
                        <td>{info.status}</td>
                    </tr>
                )
            }
        )
    }
    </tbody>
</table>
</form>
</div>
  )
}

export default Form

