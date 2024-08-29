import React from "react";
import { MdOutlineMenu } from "react-icons/md";

function App() {
  return (
    <>
      <section className="h-screen w-screen bg-primary font-sans">
        <header className="bg-gradient-to-r from-secondary to-third w-full h-12">
          <div className="flex items-center h-full mx-6">
            <div className="flex justify-between w-full">
              <h1 className="text-pretty text-2xl font-extrabold text-center h-full flex items-center">
                Jarsdev
              </h1>
              <div className="flex items-center">
                <button className="rounded-xl border-2 border-primary p-0.5">
                  <MdOutlineMenu className="text-pretty text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default App;
