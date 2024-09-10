import React from "react";

function Accounts({
  profile_img,
  text_name,
  text_email,
  extraClass,
  extraClass_,
}) {
  return (
    <>
      <button className="w-full h-full flex items-center hover:bg-newText/10 p-1.5 rounded-lg transition-all duration-200 ease-in-out">
        <div className="w-full flex justify-between">
          <div className="flex space-x-2">
            <img
              className="w-10 h-10 rounded-full border-newFourth border"
              src={profile_img}
              alt=""
            />
            <div className="flex flex-col text-start">
              <span className="font-bold text-sm">{text_name}</span>
              <span className="text-xs">{text_email}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <span className="relative flex h-3 w-3">
                <span
                  className={`${extraClass} animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
                ></span>
                <span
                  className={`${extraClass_} relative inline-flex rounded-full h-3 w-3`}
                ></span>
              </span>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

export default Accounts;
