import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { BiMessageDetail, BiLogOut } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiGearSix } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";

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
                    <img
                      src="perfil.jpg"
                      alt=""
                      className="w-10 rounded-full"
                    />
                  </button>
                </div>
                <div className="absolute top-14 right-6 border rounded-lg">
                  <div className="px-2 py-2">
                    <div>
                      <ul className="text-white border-b">
                        <li>
                          <button className="w-full flex items-center my-2">
                            <HiOutlineUserCircle className="text-2xl" />
                            <span className="ml-2">My Profile</span>
                          </button>
                        </li>
                        <li className="flex items-center my-2">
                          <button className="w-full flex items-center my-2">
                            <PiGearSix className="text-2xl" />
                            <span className="ml-2">Account Settings</span>
                          </button>
                        </li>
                      </ul>
                      <ul className="text-white border-b">
                        <li>
                          <button className="w-full flex items-center my-2">
                            <TbDeviceAnalytics className="text-2xl" />
                            <span className="ml-2">Device Management</span>
                          </button>
                        </li>
                        <li className="flex items-center my-2">
                          <button className="w-full flex items-center my-2">
                            <BiLogOut className="text-2xl" />
                            <span className="ml-2">Sign Out</span>
                          </button>
                        </li>
                      </ul>
                      <ul className="text-white">
                        <li>
                          <span className="w-full flex items-center my-2">
                            Switch Account
                          </span>
                        </li>
                        <li>
                          <button className="w-full h-full flex items-center my-2">
                            <div className="flex">
                              <div>
                                <img
                                  className="w-10 rounded-full border"
                                  src="perfil.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col text-start">
                                <span>Angel Ramirez</span>
                                <span>hi.legacyier@gmail.com</span>
                              </div>
                              <div className="h-full flex items-center">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                                </span>
                              </div>
                            </div>
                          </button>
                        </li>
                        <li className="flex items-center my-2">
                          <button className="w-full flex items-center my-2">
                            <BiLogOut className="text-2xl" />
                            <span className="ml-2">Sign Out</span>
                          </button>
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
