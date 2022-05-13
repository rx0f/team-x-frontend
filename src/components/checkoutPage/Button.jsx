import React from "react";

export default function Button({ content, icon, func }) {
  return (
    <button
      className="w-36 rounded-xl bg-dark-blue-one text-white py-1"
      onClick={() => {
        func();
      }}
    >
      <div className="flex justify-around">
        {content}
        <img src={icon} alt="" />
      </div>
    </button>
  );
}
