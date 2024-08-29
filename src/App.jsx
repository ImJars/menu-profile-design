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
              <div className="flex items-center static">
                <button className="rounded-xl border-2 border-primary p-0.5">
                  <MdOutlineMenu className="text-pretty text-3xl" />
                </button>
                <div className="absolute top-14 right-6 border rounded-lg">
                  <div className="px-2 py-2">
                    <h1 className="font-extrabold text-2xl text-white">
                      Hello World!
                    </h1>
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
