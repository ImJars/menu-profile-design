import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineNotifications } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiGearSix } from "react-icons/pi";

function App() {
  const [active, setActive] = useState(false);
  function changeActive() {
    setActive(!active);
    if (active) {
      document.querySelector(".absolute").style.display = "none";
    } else {
      document.querySelector(".absolute").style.display = "block";
    }
    console.log(active);
  }
  return (
    <>
      <section className="h-screen w-screen bg-primary font-sans">
        <header className="bg-gradient-to-r from-secondary to-third w-full h-12">
          <div className="flex items-center h-full mx-6">
            <div className="flex justify-between w-full">
              <h1 className="text-pretty text-2xl font-extrabold text-center h-full flex items-center">
                Jarsdev
              </h1>
              <div className="flex items-center static">
                <div className="flex space-x-2 items-center">
                  <BiMessageDetail className="text-pretty text-3xl" />
                  <MdOutlineNotifications className="text-pretty text-3xl" />
                  <button
                    onClick={changeActive}
                    className="rounded-full border-2 border-primary"
                  >
                    <img src="perfil.jpg" alt="" className="w-10 rounded-full" />
                  </button>
                </div>
                <div className="absolute top-14 right-6 border rounded-lg">
                  <div className="px-2 py-2">
                    <div>
                      <ul className="text-white">
                        <li className="flex items-center my-2">
                          <HiOutlineUserCircle className="text-2xl"/>
                          <span className="ml-2">My Profile</span>
                        </li>
                        <li className="flex items-center my-2">
                          <PiGearSix className="text-2xl"/>
                          <span className="ml-2">Account Settings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default App;
