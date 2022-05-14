import React from "react";
import Button from "../../components/checkoutPage/Button"
import AlertDialog from "../../components/shared/pop-up";
import { Link } from "react-router-dom";

export default function Checkout() {
  const tests = [
    {
      id: 1,
      img: "/assets/checkout/1.svg",
      title: "Blood Pressure",
      details: "Test your blood pressure",
      button: <Link to="/heartform"><Button content="Upload file" icon="/assets/checkout/4.svg" /></Link>
    },
    {
      id: 2,
      img: "/assets/checkout/2.svg",
      title: "Symptoms",
      details: "Check your symptoms",
      button: <AlertDialog />
    },
    {
      id: 3,
      img: "/assets/checkout/3.svg",
      title: "Diabet",
      details: "Check your diabet",
      button: <Link to="/diabeteform"><Button content="Upload file" icon="/assets/checkout/4.svg" /></Link>
    },
    {
      id: 4,
      img: "/assets/checkout/6.svg",
      title: "Eye measurements",
      details: "Measure your eyes for glasses",
      button: <Button content="Upload file" icon="/assets/checkout/4.svg" />
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center my-12 gap-y-2 lg:gap-y-4 font-semibold">
        <h1 className="uppercase text-dark-blue-one text-4xl lg:text-6xl">
          Checkout
        </h1>
        <div className="text-36 w-44 lg:w-64 h-1.5 rounded-full bg-dark-orange" />
      </div>
      <div className="flex flex-wrap">
        {tests.map((test) => {
          return (
            <div
              key={test.id}
              className="mx-auto my-4 rounded-xl drop-shadow-md h-72 w-72 bg-white opacity-90 flex flex-col items-center justify-evenly"
            >
              <img className="h-28 w-auto" src={test.img} alt="" />
              <div className="flex flex-col items-center gap-y-2">
                <h3>{test.title}</h3>
                <p>{test.details}</p>
                {test.button}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
