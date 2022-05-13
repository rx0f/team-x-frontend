import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CheckboxesTags from '../selectField/index'
import { useState } from 'react';


export default function AlertDialog() {

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = ()=>{
      console.log(values)
    //   Fetch api here 
      setOpen(false)
  }

  return (
    <div>
    <button className="w-36 rounded-xl bg-dark-blue-one text-white py-1" onClick={handleClickOpen}>
        <div className="flex justify-around">
              Fill form
        <img src="/assets/checkout/5.svg" alt="" />
      </div>
    </button>      
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter your symptoms?"}
        </DialogTitle>
        <DialogContent>
            <CheckboxesTags fnc={setValues}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
