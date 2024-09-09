import React from "react";

function Button({ icon, title }) {
  return (
    <>
      <li className="flex items-center">
        <button className="w-full flex items-center my-1.5">
          {icon}
          <span className="ml-2 text-newFifth text-sm font-semibold">
            {title}
          </span>
        </button>
      </li>
    </>
  );
}

export default Button;
