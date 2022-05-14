import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import CheckboxesTags from "../selectField/index";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);
  const [preditionResult, setPresdictionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
    setPresdictionResult(null)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    let body = bodyInit;
    for (let i = 0; i < values.length; i++) {
      body[`sym${i}`] = values[i];
    }
    try {
      console.log(body);
      const { data } = await axios.post(
        "https://diabetes-h.herokuapp.com/predict_symptoms",
        body
      );
      setLoading(false);
      setPresdictionResult(data.resultat);
      // Redirect
    } catch (error) {
      setLoading(false);
      //
    }
  };

  const navigate = useNavigate()

  const handleredirectTodoctor = async () => {
    navigate('/doctors')
  };
  return (
    <div>
      <button
        className="w-36 rounded-xl bg-dark-blue-one text-white py-1"
        onClick={handleClickOpen}
      >
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
          {preditionResult == null
            ? "Enter your symptoms?"
            : "Prediction Result"}
        </DialogTitle>
        <DialogContent>
          {preditionResult == null ? (
            <CheckboxesTags fnc={setValues} />
          ) : (
            <p>{preditionResult}</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {preditionResult == null ? (
            <Button
              onClick={handleSubmit}
              autoFocus
              disabled={loading}
            >
              {loading ? <CircularProgress />: "Submit"}
            </Button>
          ) : (
            <Button
              onClick={handleredirectTodoctor}
              autoFocus
            >
              Check a doctor
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

let bodyInit = {
  sym1: "nan",
  sym2: "nan",
  sym3: "nan",
  sym4: "nan",
  sym5: "nan",
  sym6: "nan",
  sym7: "nan",
  sym8: "nan",
  sym9: "nan",
  sym10: "nan",
  sym11: "nan",
  sym12: "nan",
  sym13: "nan",
  sym14: "nan",
  sym15: "nan",
  sym16: "nan",
  sym17: "nan",
};
