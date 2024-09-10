import React from "react";

function Button({ icon, title }) {
  return (
    <>
      <li className="flex items-center group">
        <button className="w-full flex items-center p-1.5 group-hover:bg-newText/10 rounded-lg transition-all duration-200 ease-in-out">
          {icon}
          <span className="ml-2 text-newFifth text-sm font-semibold group-hover:text-newText/100">
            {title}
          </span>
        </button>
      </li>
    </>
  );
}

export default Button;
