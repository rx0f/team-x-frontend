import React from 'react'

export default function DiabeteForm(){
    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-2xl drop-shadow-md p-4 flex flex-col items-end gap-y-4 my-8">
                <h2 className="text-3xl text-dark-blue-one my-2 mx-auto font-semibold">Diabete form</h2>
                <div>
                    <label>Pregnancies</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Glucose</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Blood Pressure (mm Hg)</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Skin Thickness (mm)</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Insulin (mu U/ml)</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>BMI</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <div>
                    <label>Diabetes pedigree function</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-20 md:w-72"/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" className="mx-2 outline-none border-2 border-dark-blue-one rounded-lg w-24 md:w-72"/>
                </div>
                <button className="px-8 py-2 bg-dark-blue-one mx-auto rounded-xl text-white text-lg">
                    Submit
                </button>
            </div>
        </div>
    )
}