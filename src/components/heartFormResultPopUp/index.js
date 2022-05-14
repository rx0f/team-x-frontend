import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function PopupHeartResult({props}) {
  const [open, setOpen] = useState(false);

  const {Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope} = props
  const handleClose = () => {
    setOpen(false);
  };

  const [pourcentage, setPourcentage] = useState(null)

  
  const handleSubmit = async () => {
    const body = {
      Age: 0,
      Sex: "",
      ChestPainType: "",
      RestingBP: 0,
      Cholesterol: 0,
      FastingBS: 0,
      RestingECG: "",
      MaxHR: 0,
      ExerciseAngina: "",
      Oldpeak: 0,
      ST_Slope: "",
    };

    body["Age"] = Age.current.value;
    body["Sex"] = Sex.current.value;
    body["ChestPainType"] = ChestPainType.current.value;
    body["RestingBP"] = RestingBP.current.value;
    body["Cholesterol"] = Cholesterol.current.value;
    body["FastingBS"] = FastingBS.current.value;
    body["RestingECG"] = RestingECG.current.value;
    body["MaxHR"] = MaxHR.current.value;
    body["ExerciseAngina"] = ExerciseAngina.current.value;
    body["Oldpeak"] = Oldpeak.current.value;
    body["ST_Slope"] = ST_Slope.current.value;
    console.log(body);
    try {
      const { data } = await axios.post(
        "https://diabetes-h.herokuapp.com/predict_heart",
        body
      );
      console.log(data.pourcentage * 100)
      setOpen(true)
      const temp = data.pourcentage * 100
      setPourcentage(temp.toFixed(2))
    } catch (error) {
      //
    }
  };

  const handleCheckDoctor = async ()=> {


    setOpen(false)
  }

  return (
    <div>
        <button className="px-8 py-2 bg-dark-blue-one mx-auto rounded-xl text-white text-lg"onClick={handleSubmit}>
          Submit
        </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Predicition Result
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              {
                  (100-pourcentage)<=50 ?
                      `Prediction ${pourcentage}%`
                  : 
                      `There is a high chance to face heart problems (${pourcentage}%),So we highly recommand you to check one of our doctors.`
              }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cnacel</Button>
          <Button onClick={handleCheckDoctor} autoFocus>
            check a doctor
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
