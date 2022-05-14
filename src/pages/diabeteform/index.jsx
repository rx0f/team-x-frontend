import axios from "axios";
import { useRef } from "react"

export default function DiabeteForm(){

    const regnanciesRef = useRef();
    const glucoseRef = useRef()
    const bloodRef = useRef()
    const skinThicknessRef = useRef()
    const insulinRef = useRef()
    const bmiRef = useRef()
    const diabetesPedigreeFunctionRef = useRef()
    const ageRef = useRef()

    const handleSubmit = async()=>{
        const body = {
            "Pregnancies": regnanciesRef.current.value,
            "Glucose": glucoseRef.current.value,
            "BloodPressure": bloodRef.current.value,
            "SkinThickness": skinThicknessRef.current.value,
            "Insulin": insulinRef.current.value,
            "BMI": bmiRef.current.value,
            "DiabetesPedigreeFunction": diabetesPedigreeFunctionRef.current.value,
            "Age": ageRef.current.value
          }
          console.log(body)
          try {
              const {data} = await axios.post("https://kokovagabond.herokuapp.com/predict_diabetes", body)
              console.log("skandar")
              console.log(data)
          } catch (error) {

          }
    }
    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-2xl drop-shadow-md p-4 flex flex-col items-end gap-y-4 my-8">
                <h2 className="text-3xl text-dark-blue-one my-2 mx-auto font-semibold">Diabete form</h2>
                <div>
                    <label>Pregnancies</label>
                    <input value={0} ref={regnanciesRef} type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Glucose</label>
                    <input value={0} ref={glucoseRef} type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Blood Pressure (mm Hg)</label>
                    <input ref={bloodRef} value={0} type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Skin Thickness (mm)</label>
                    <input ref={skinThicknessRef} value={0} type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Insulin (mu U/ml)</label>
                    <input ref={insulinRef} value={0} type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>BMI</label>
                    <input ref={bmiRef} value={0} type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Diabetes pedigree function</label>
                    <input ref={diabetesPedigreeFunctionRef} value={0} type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-20 md:w-72"/>
                </div>
                <div>
                    <label>Age</label>
                    <input ref={ageRef} type="number" value={0} className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <button onClick={handleSubmit} className="px-8 py-2 bg-dark-blue-one mx-auto rounded-xl text-white text-lg">
                    Submit
                </button>
            </div>
        </div>
    )
}