import React from "react";

export default function Button({ icon, func }) {
  return (
    <button
      className="w-36 rounded-xl bg-dark-blue-one text-white py-1"
      onClick={() => {
        func();
      }}
    >
      <div className="flex justify-around">
        Feeling sick ?
        <img src="/assets/checkout/5.svg" alt="" />
      </div>
    </button>
  );
}
