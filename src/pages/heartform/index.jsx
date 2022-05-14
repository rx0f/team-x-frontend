import React from 'react'

export default function HeartForm(){
    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-2xl drop-shadow-md p-4 flex flex-col items-end gap-y-4 my-8">
                <h2 className="text-3xl text-dark-blue-one my-2 mx-auto font-semibold">Heart form</h2>
                <div>
                    <label>Age</label>
                    <input className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72" type="number" />
                </div>
                <div>
                    <label>Sexe</label>
                    <select className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72" name="sex">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
                <div>
                    <label>Chest Pain Type</label>
                    <select name="ChestPainType" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72">
                        <option value="ATA">ATA</option>
                        <option value="ASY">ASY</option>
                        <option value="NAP">NAP</option>
                        <option value="TA">TA</option>
                    </select>
                </div>
                <div>
                    <label>Resting BP</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"/>
                </div>
                <div>
                    <label>Cholesterol</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"/>
                </div>
                <div>
                    <label>Fasting BS</label>
                    <input type="number"  className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"/>
                </div>
                <div>
                    <label>Resting ECG</label>
                    <select name="RestingECG" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72">
                        <option value="Normal">Normal</option>
                        <option value="LVH">LVH</option>
                        <option value="ST">ST</option>
                    </select>
                </div>
                <div>
                    <label>Max HR</label>
                    <input type="number"  className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"/>
                </div>
                <div>
                    <label>Exercise Angina</label>
                    <select name="ExerciseAngina" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72">
                        <option value="N">N</option>
                        <option value="Y">Y</option>
                    </select>
                </div>
                <div>
                    <label>Oldpeak</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72"/>
                </div>
                <div>
                    <label htmlFor="">ST Slope</label>
                    <select name="ST_Slope" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-36 lg:w-72">
                        <option value="Up">Up</option>
                        <option value="Flat">Flat</option>
                        <option value="Down">Down</option>
                    </select>
                </div>
                <button className="px-8 py-2 bg-dark-blue-one mx-auto rounded-xl text-white text-lg">
                    Submit
                </button>
            </div>
        </div>
    )
}