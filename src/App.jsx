import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { BiMessageDetail, BiLogOut } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiGearSix } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";

import { motion } from "framer-motion";

function App() {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(!active);
  };
  return (
    <>
      <section className="h-screen w-screen bg-newPrimary font-sans">
        <header className="bg-newSecondary w-full h-12">
          <div className="flex items-center h-full mx-6">
            <div className="flex justify-between w-full">
              <h1 className="text-newText text-pretty text-2xl font-extrabold text-center h-full flex items-center">
                Jarsdev
              </h1>
              <div className="flex items-center static">
                <div className="flex space-x-2 items-center">
                  <BiMessageDetail className="text-newText text-pretty text-3xl" />
                  <MdOutlineNotifications className="text-newText text-pretty text-3xl" />
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
                <motion.div
                  className={`bg-newThird px-3 py-4 absolute top-14 right-6 border-newThird rounded-lg ${!active ? 'hidden' : ''}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: active ? 1 : 0, y: active ? 0 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-2 py-2">
                    <div>
                      <ul className="text-white border-b">
                        <li>
                          <button className="w-full flex items-center my-2">
                            <HiOutlineUserCircle className="text-newFifth text-2xl" />
                            <span className="ml-2 text-newFifth text-sm font-semibold">My Profile</span>
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
                            <div className="flex space-x-3">
                              <div>
                                <img
                                  className="w-10 rounded-full border"
                                  src="perfil.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col text-start">
                                <span className="font-bold text-sm">
                                  Angel Ramirez
                                </span>
                                <span className="text-xs">
                                  hi.legacyier@gmail.com
                                </span>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        </li>
                        <li className="flex items-center my-2">
                          <button className="w-full h-full flex items-center my-2">
                            <div className="flex space-x-3">
                              <div>
                                <img
                                  className="w-10 rounded-full border"
                                  src="perfil.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col text-start">
                                <span className="font-bold text-sm">
                                  Angel Ramirez
                                </span>
                                <span className="text-xs">
                                  hi.legacyier@gmail.com
                                </span>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        </li>
                        <li>
                          <button className="w-full flex justify-center border rounded-lg px-2 py-2">
                            <div className="flex space-x-2">
                              <BiLogOut className="text-2xl" />
                              <span>Sign out all accounts</span>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default App;
