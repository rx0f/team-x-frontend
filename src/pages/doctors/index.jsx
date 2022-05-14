import React, { useRef, useState } from "react";
import axios from "axios";

export default function Doctors() {
  const specialityRef = useRef();
  const [doctors, setDoctors] = useState([]);
  return (
    <div>
      <div className="flex flex-col items-center my-12 gap-y-2 lg:gap-y-4 font-semibold">
        <h1 className="uppercase text-dark-blue-one text-4xl lg:text-6xl">
          Doctors
        </h1>
        <div className="text-36 w-44 lg:w-64 h-1.5 rounded-full bg-dark-orange" />
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-evenly">
        <h3 className="text-2xl mx-auto lg:mx-0">Find doctors by speciality</h3>
        <div className="flex items-center gap-x-4">
          <select
            ref={specialityRef}
            name="speciality"
            className="outline-none px-6 py-1 rounded-xl text-lg"
          >
            <option value="">All</option>
            <option value="627e169838530793a0c3e39f">General Doctor</option>
            <option value="627e16ac38530793a0c3e3a2">Cardiologist</option>
            <option value="627e172e38530793a0c3e3a5">Diabetologist</option>
            <option value="627e184838530793a0c3e3a8">Internist</option>
            <option value="627e190938530793a0c3e3ac">Ophthalmologist</option>
          </select>
          <button
            onClick={async () => {
              const value = specialityRef.current.value;
              const { data: res } = await axios.get(
                `http://localhost:8000/doctor/${
                  value === "" ? "" : "speciality/"
                }${value}`
              );
              setDoctors(res.data);
            }}
            className="px-6 py-1 bg-dark-blue-one rounded-xl text-white text-lg"
          >
            Search
          </button>
        </div>
      </div>
      <div className="">
            {doctors.map(doctor => {
                
            })}
      </div>
    </div>
  );
}
