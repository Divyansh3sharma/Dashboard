// import React from 'react'
import new_page from './new_page.css'
import {useState, useEffect} from 'react'
import Form from '../form/Form'


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormValues from '../formValues/FormValues';
import TextField from '@mui/material/TextField';
import AddSharpIcon from '@mui/icons-material/AddSharp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const New_page = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    const [openForm, setOpenForm] = useState(false);
    const initialvalues = {sprint: "",sprintweek :"", tickettype: "", parentticketno: "", ticketno: "", efforthours: "", status: "", comment: ""} ;
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [checkError , setCheckError] = useState(false);

    const[finalSubmit, setFinalSubmit] = useState(true);

    const[Arr,setArr] = useState([]);

    const handleDelete = (index) => {
      const newFormData = [...Arr];
      newFormData.splice(index,1);
      setArr(newFormData);
    }

    const handleReset = () => {
      setFormValues({
        sprint: "",
        sprintweek :"", 
        tickettype: "",
        parentticketno: "",
        ticketno: "", 
        efforthours: "", 
        status: "", 
        comment: ""
      });
    }

    const handleFinalSubmit = () => {
      setFinalSubmit(!finalSubmit);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value });
    }
    
    const handleForm = () => {
      setOpenForm(true);
      setFinalSubmit(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate(formValues);
        if(Object.keys(errors).length > 0){
          setFormErrors(errors);
          return;
        }

        setFormErrors(validate(formValues));
        setArr(Arr => [...Arr,formValues]);

        setIsSubmit(true);

        setFinalSubmit(false);
        
        setFormValues({
          sprint: "",
          sprintweek :"", 
          tickettype: "",
          parentticketno: "",
          ticketno: "", 
          efforthours: "", 
          status: "", 
          comment: ""
        });
        
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
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
    <div className="new_page">
        <div className="upper_conatiner">
            <div className="button_search">
              <div className="search">  <input type="text" placeholder='Search Sprint'></input> </div>
              <div className="button"><Button variant="contained" endIcon ={<AddSharpIcon />} onClick={ () => {handleForm(); handleOpen();}}>Add Items</Button> </div> 
              
            </div>
            
            <div className="form">{ finalSubmit && openForm && 
              <>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="container">
    <form onSubmit={handleSubmit} onReset={handleReset}>
    <div className="values">

        
        <div className="field">
            <label>Sprint</label>
            <input type="text" name = "sprint" placeholder="Sprint" value={formValues.sprint} onChange={handleChange}  required/>
        </div>
        <p className="error-check">{formErrors.sprint}</p>
    

        <div className="field">
        <label>Sprint Week</label>
        <select name="sprintweek"   value={formValues.sprintweek}  onChange={handleChange} defaultValue={null} required>
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
        <select name="tickettype" value={formValues.tickettype} onChange = {handleChange} required>
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
            <input type="text" name="parentticketno" value = {formValues.parentticketno} onChange={handleChange} required />
            <p className="error-check" >{formErrors.parentticketno}</p>
        </div>
        }
        
    <div className="field">
    <label>Ticket No</label>
    <input type="text" name = "ticketno" value={formValues.ticketno} onChange={handleChange} required/>
    </div>
    <p className="error-check">{formErrors.ticketno}</p>

    <div className="field">
    <label>Effort Hours</label>
    <input type='number' min='0' max = '8' name= "efforthours" values = {formValues.efforthours}  onChange={handleChange} required />
    </div>
    <p className="error-check">{formErrors.efforthours}</p>

    <div className="field">
    <label>Status</label>
    <select  name="status" value = {formValues.status} onChange={handleChange} required>
        <option>Select</option>
        <option>Completed</option>
        <option>Completed</option>
        <option>Blocked</option>
    </select>
    </div>
    <p className="error-check">{formErrors.status}</p>

    <div className="field">
    {/* <label>Comments</label>
    <input type="text" name = "comments"  value={formValues.comments} onChange={handleChange} required/> */}
    <TextField
          name="comments"
          label="comment"
          value = {formValues.comments}
          onChange={handleChange}
          type="text"
          autoComplete="Comment"
          required
        />
    </div>
    {/* <p className="error-check">{formErrors.comments}</p> */}
    
    

    <br></br>
    <button type="submit" className="btn" >Submit</button>
    <button  type="reset" className="btn" >Reset</button>
  
    </div>
    
</form>
</div>
          </Typography>
        </Box>
      </Modal>
    </div>              
              </>
            }
            </div>
        </div>

        <div className="lower_conatiner">
         <FormValues  inputValues = {Arr} onDelete = {handleDelete}/>

        </div>
    </div>
  )
}

export default New_page