import { useRef } from "react";
import PopupHeartResult from "../../components/heartFormResultPopUp";

export default function HeartForm() {
  const ageRef = useRef();
  const sexRef = useRef();
  const chestPainTypeRef = useRef();
  const RestingBpRef = useRef();
  const cholesterolRef = useRef();
  const fastingBsRef = useRef();
  const restingEcgRef = useRef();
  const maxHrRef = useRef();
  const exerciseAnginaRef = useRef();
  const oldpeakRef = useRef();
  const stSlopeRef = useRef();

  const props = {
    Age: ageRef,
    Sex: sexRef,
    ChestPainType: chestPainTypeRef,
    RestingBP: RestingBpRef,
    Cholesterol: cholesterolRef,
    FastingBS: fastingBsRef,
    RestingECG: restingEcgRef,
    MaxHR: maxHrRef,
    ExerciseAngina: exerciseAnginaRef,
    Oldpeak: oldpeakRef,
    ST_Slope: stSlopeRef,
  };

  
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-2xl drop-shadow-md p-4 flex flex-col items-end gap-y-4 my-8">
        <h2 className="text-3xl text-dark-blue-one my-2 mx-auto font-semibold">
          Heart form
        </h2>
        <div>
          <label>Age</label>
          <input
            ref={ageRef}
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
            type="number"
            value={0}
          />
        </div>
        <div>
          <label>Sexe</label>
          <select
            ref={sexRef}
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
            name="sex"
            required
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div>
          <label>Chest Pain Type</label>
          <select
            ref={chestPainTypeRef}
            name="ChestPainType"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
            required
          >
            <option value="ATA">ATA</option>
            <option value="ASY">ASY</option>
            <option value="NAP">NAP</option>
            <option value="TA">TA</option>
          </select>
        </div>
        <div>
          <label>Resting BP</label>
          <input
            ref={RestingBpRef}
            type="number"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
            required
            value={0}
          />
        </div>
        <div>
          <label>Cholesterol</label>
          <input
            ref={cholesterolRef}
            type="number"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
            required
            value={0}
          />
        </div>
        <div>
          <label>Fasting BS</label>
          <input
            ref={fastingBsRef}
            type="number"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
            required
            value={0}
          />
        </div>
        <div>
          <label>Resting ECG</label>
          <select
            ref={restingEcgRef}
            name="RestingECG"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
            required
          >
            <option value="Normal">Normal</option>
            <option value="LVH">LVH</option>
            <option value="ST">ST</option>
          </select>
        </div>
        <div>
          <label>Max HR</label>
          <input
            ref={maxHrRef}
            value={0}
            type="number"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
          />
        </div>
        <div>
          <label>Exercise Angina</label>
          <select
            ref={exerciseAnginaRef}
            name="ExerciseAngina"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
          >
            <option value="N">N</option>
            <option value="Y">Y</option>
          </select>
        </div>
        <div>
          <label>Oldpeak</label>
          <input
            ref={oldpeakRef}
            value={0}
            type="number"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
          />
        </div>
        <div>
          <label htmlFor="">ST Slope</label>
          <select
            ref={stSlopeRef}
            name="ST_Slope"
            className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"
          >
            <option value="Up">Up</option>
            <option value="Flat">Flat</option>
            <option value="Down">Down</option>
          </select>
        </div>
        <section className="mx-auto">
            <PopupHeartResult props={props}/>
        </section>
      </div>
    </div>
  );
}
