import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillGooglePlusCircle } from "react-icons/ai";

export default function SignupPatient() {
  return (
    <div className="lg:h-[90vh] flex flex-col lg:flex-row items-center justify-around">
      <div className="w-72 md:w-[32rem] lg:h-[32rem] rounded-xl drop-shadow-md bg-white flex flex-col gap-y-8 items-center p-4">
        <div className="flex justify-between lg:justify-evenly items-end w-full">
          <div className="flex flex-col gap-y-2">
            <h3 className="uppercase text-dark-blue-one text-lg md:text-3xl font-semibold">
              Patient sign up
            </h3>
            <div className="w-36 md:w-60 h-1 bg-dark-orange rounded-full" />
          </div>
          <Link to="/signup-doctor" className="text-sm md:text-lg text-dark-blue-one">Are you a doctor?</Link>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/user.svg" alt="" />
            <input
              type="text"
              placeholder="Name"
              className="px-2 w-full bg-light-blue-one outline-none"
            />
          </div>

          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/email.svg" alt="" />
            <input
              type="email"
              placeholder="Email adress"
              className="px-2 w-full bg-light-blue-one outline-none"
            />
          </div>

          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/password.svg" alt="" />
            <input
              type="password"
              placeholder="Password"
              className="px-2 w-full bg-light-blue-one outline-none"
            />
          </div>

          <div className="bg-light-blue-one h-10 flex w-56 md:w-96 drop-shadow-md rounded-xl p-2">
            <img src="/assets/login-signup/password.svg" alt="" />
            <input
              type="password"
              placeholder="Confirm password"
              className="px-2 w-full bg-light-blue-one outline-none"
            />
          </div>

          <div className="flex flex-col items-center gap-y-1">
            <button className="bg-dark-blue-one text-white text-xl py-1 w-full rounded-full">
              Login
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
            <Link className="text-lg font-bold uppercase" to="/signup">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
