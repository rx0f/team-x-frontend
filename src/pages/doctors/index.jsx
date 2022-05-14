import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

export default function Doctors() {
  const specialityRef = useRef();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async()=>{
      try {
        const {data: res} = await axios.get("https://team-x-backend.herokuapp.com/doctor")
        console.log(res.data)
        setDoctors(res.data)
      } catch (error) {
        
      }
    }
    getDoctors()
  }, [])
  
  return (
    <div>
      <div className="flex flex-col items-center my-12 gap-y-2 lg:gap-y-4 font-semibold">
        <h1 className="uppercase text-dark-blue-one text-4xl lg:text-6xl">
          Doctors
        </h1>
        <div className="text-36 w-44 lg:w-64 h-1.5 rounded-full bg-dark-orange" />
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-evenly">
        <h3 className="text-md lg:text-xl mx-auto lg:mx-0">
          Find doctors by speciality
        </h3>
        <div className="flex items-center gap-x-4 mx-auto lg:mx-0 my-4">
          <select
            ref={specialityRef}
            name="speciality"
            className="outline-none px-6 py-1 rounded-xl text-base lg:text-lg"
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
                `https://team-x-backend.herokuapp.com/doctor/${
                  value === "" ? "" : "speciality/"
                }${value}`
              );
              setDoctors(res.data);
            }}
            className="px-6 py-1 bg-dark-blue-one rounded-xl text-white text-base lg:text-lg"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap lg:px-8">
        {doctors.length > 0 &&
          doctors.map((doctor) => {
            return (
              <div
                key={doctor._id}
                className="bg-white rounded-xl p-4 mx-auto my-4 flex flex-col gap-y-4"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt=""
                  className="w-64 h-64 object-cover rounded-xl"
                />
                <div className="text-base lg:text-lg">
                  <div className="flex items-center gap-x-2"><FaUserAlt/> {doctor.username}</div>
                  <div className="flex items-center gap-x-2"><HiOutlineMail/> {doctor.email}</div>
                  <div className="flex items-center gap-x-2"><FaPhone/> +213 {doctor.phoneNumber}</div>
                  <div className="flex items-center gap-x-2"><ImLocation/> {doctor.location}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
