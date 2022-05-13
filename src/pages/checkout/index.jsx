import React from "react";
import Button from "./Button";

export default function Checkout() {
  const tests = [
    {
      img: "/assets/checkout/1.svg",
      title: "Blood Pressure",
      details: "Test your blood pressure",
      button: <Button content="Upload file" icon="/assets/checkout/4.svg"/>,
    },
    {
      img: "/assets/checkout/2.svg",
      title: "Symptoms",
      details: "Check your symptoms",
      button: <Button content="Fill form" icon="/assets/checkout/5.svg"/>,
    },
    {
      img: "/assets/checkout/3.svg",
      title: "Diabet",
      details: "Check your diabet",
      button: <Button content="Upload file" icon="/assets/checkout/4.svg"/>,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center my-12 gap-y-2 lg:gap-y-4 font-semibold">
        <h1 className="uppercase text-dark-blue-one text-4xl lg:text-6xl">Checkout</h1>
        <div className="text-36 lg:w-64 h-1.5 rounded-full bg-dark-orange" />
      </div>
      <div className="flex flex-wrap">
        {tests.map((test) => {
          return (
            <div className="mx-auto my-4 rounded-xl drop-shadow-md h-72 w-72 bg-white opacity-90 flex flex-col items-center justify-evenly">
              <img src={test.img} alt="" />
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
