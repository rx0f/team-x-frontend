import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillGooglePlusCircle } from "react-icons/ai";
import axios from "axios";

export default function SignupPatient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validatePassword, setValidatePassword] = useState("")

  return (
    <div className="lg:h-[90vh] flex flex-col lg:flex-row items-center justify-around">
      <div className="w-[90%] md:w-[32rem] flex flex-col items-center my-8">
        <img src="/assets/shared/logo.svg" alt="" />
        <h2 className="text-dark-blue-one text-xl lg:text-3xl">You will feel well nurtured here.</h2>
      </div>
      <div className="w-72 md:w-[32rem] lg:h-[32rem] rounded-xl drop-shadow-md bg-white flex flex-col gap-y-8 items-center p-4">
        <div className="flex justify-between lg:justify-evenly items-end w-full">
          <div className="flex flex-col gap-y-2">
            <h3 className="uppercase text-dark-blue-one text-lg md:text-3xl font-semibold">
              Patient sign up
            </h3>
            <div className="w-36 md:w-60 h-1 bg-dark-orange rounded-full" />
          </div>
          <Link
            to="/signup-doctor"
            className="text-sm md:text-lg text-dark-blue-one"
          >
            Are you a doctor?
          </Link>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/user.svg" alt="" />
            <input
              type="text"
              placeholder="Name"
              className="px-2 w-full bg-light-blue-one outline-none"
              onChange={({currentTarget: input}) => {
                setName(input.value)
              }}
            />
          </div>

          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/email.svg" alt="" />
            <input
              type="email"
              placeholder="Email adress"
              className="px-2 w-full bg-light-blue-one outline-none"
              onChange={({currentTarget: input}) => {
                setEmail(input.value)
              }}
            />
          </div>

          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/password.svg" alt="" />
            <input
              type="password"
              placeholder="Password"
              className="px-2 w-full bg-light-blue-one outline-none"
              onChange={({currentTarget: input}) => {
                setPassword(input.value)
              }}
            />
          </div>

          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/password.svg" alt="" />
            <input
              type="password"
              placeholder="Confirm password"
              className="px-2 w-full bg-light-blue-one outline-none"
              onChange={({currentTarget: input}) => {
                setValidatePassword(input.value)
              }}
            />
          </div>

          <div className="flex flex-col items-center gap-y-1">
            <button className="bg-dark-blue-one text-white text-xl py-1 w-full rounded-full" onClick={async () => {
              if (!password === validatePassword) {
                alert("There's an error in the password")
              } else {
                const {data: res} = await axios.post("http://localhost:8000/auth/register", {username: name, email, password})
              }
            }}>
              Register
            </button>
            <span className="text-dark-blue-one">OR</span>
            <div className="flex h-12 justify-center gap-x-4 text-4xl md:text-5xl text-dark-orange">
              <a href="">
                <RiFacebookCircleFill />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <AiFillGooglePlusCircle />
              </a>
            </div>
          </div>

          <div className="text-dark-blue-one flex justify-center">
            Already have an account ?{" "}
            <Link className="text-lg font-bold uppercase" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
