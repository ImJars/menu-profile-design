import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { BiMessageDetail, BiLogOut } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiGearSix } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";

import { motion, AnimatePresence } from "framer-motion";
import Button from "./components/button";
import Accounts from "./components/accounts";

function App() {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(!active);
  };
  return (
    <>
      <section className="h-screen w-screen bg-newPrimary font-sans flex flex-col">
        <header className="bg-newSecondary w-full h-12">
          <div className="flex items-center h-full mx-6">
            <div className="flex justify-between w-full items-center">
              <a
                href="https://jarsdev.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-newText text-pretty text-2xl font-bold text-center h-full flex items-center hover:scale-105 transition-all duration-200 ease-in-out"
              >
                Jarsdev
              </a>
              <div className="flex items-center static">
                <div className="flex space-x-3 items-center">
                  <BiMessageDetail className="text-newText text-pretty text-3xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer" />
                  <MdOutlineNotifications className="text-newText text-pretty text-3xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer" />
                  <button
                    onClick={changeActive}
                    className="rounded-full border border-newText hover:scale-105 transition-all duration-200 ease-in-out"
                  >
                    <img
                      src="perfil.jpg"
                      alt=""
                      className="w-10 rounded-full"
                    />
                  </button>
                </div>
                <AnimatePresence>
                  {active && (
                    <motion.div
                      className={
                        "bg-newThird px-3 py-4 absolute top-14 right-6 border-newThird rounded-lg"
                      }
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: active ? 1 : 0, y: active ? 0 : -20 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-3 py-4">
                        <div>
                          <ul className="text-white border-b border-b-newFourth pb-2 mb-2">
                            <Button
                              icon={
                                <HiOutlineUserCircle className="text-newFifth text-2xl group-hover:text-newText/100" />
                              }
                              title="My Profile"
                            />
                            <Button
                              icon={
                                <PiGearSix className="text-newFifth text-2xl group-hover:text-newText/100" />
                              }
                              title="Account Settings"
                            />
                          </ul>
                          <ul className="text-white border-b border-b-newFourth pb-2 mb-2">
                            <Button
                              icon={
                                <TbDeviceAnalytics className="text-newFifth text-2xl group-hover:text-newText/100" />
                              }
                              title="Device Management"
                            />
                            <Button
                              icon={
                                <BiLogOut className="text-newFifth text-2xl group-hover:text-newText/100" />
                              }
                              title="Sign Out"
                            />
                          </ul>
                          <ul className="text-white">
                            <li>
                              <span className="w-full flex my-2 text-newFifth text-md font-semibold">
                                Switch Account
                              </span>
                            </li>
                            <li className="mt-4">
                              <Accounts
                                profile_img="perfil.jpg"
                                text_name="Angel Ramirez"
                                text_email="hi.legacyier@gmail.com"
                                extraClass={"bg-green-600"}
                                extraClass_={"bg-green-600"}
                              />
                            </li>
                            <li className="mt-4">
                              <Accounts
                                profile_img="profile-pic.webp"
                                text_name="Paulina Hernandez"
                                text_email="hi.pauh@gmail.com"
                                extraClass={"bg-red-600"}
                                extraClass_={"bg-red-600"}
                              />
                            </li>
                            <li className="mt-6">
                              <button className="w-full bg-newButton hover:bg-newText/40 flex justify-center border border-newFourth rounded-lg px-8 py-2 transition-all duration-200 ease-in-out">
                                <div className="flex space-x-1 items-center">
                                  <BiLogOut className="text-2xl" />
                                  <span className="text-sm font-semibold">
                                    Sign out all accounts
                                  </span>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-grow flex justify-center items-center">
          <span className="text-newText text-center">
            Para mas informacion y componentes visita mi sitio web 👉​{" "}
            <a
              href="https://jarsdev.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline"
            >
              {" Jarsdev.app "}
            </a>
          </span>
        </div>
        <footer className="bg-newSecondary w-full h-12 flex justify-center items-center">
          <span className="text-xs text-newText/25">
            © Angel Ramirez {new Date().getFullYear()}, Todos los derechos
            reservados.
          </span>
        </footer>
      </section>
    </>
  );
}

export default App;
