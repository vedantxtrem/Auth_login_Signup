import React from 'react';

function Signup() {
  return (
    <>
      <body className="bg-[#1e1e1e] font-mono" >
        <div className="sm:h-screen sm:flex justify-center items-center">
          <div className="sm:flex w-full h-screen border-2 sm:h-[80%] sm:w-10/12 border-green-300 sm:scroll-m-1 ">
            {/* Form section */}
            <div className="h-11/12 flex flex-col justify-center p-20 w-full lg:w-1/2">
              <div className="px-4 text-2xl font-bold text-gray-300">
                <span className="text-gray-300">&#9650;</span>
                <span>SpaceX</span>
              </div>
              <div className="px-4 mt-5 font-bold text-sm text-gray-300">
                <h2>START FOR FREE</h2>
              </div>
              <div className="px-4 mt-2 font-bold text-3xl text-gray-300">
                <h2>Create a new account</h2>
              </div>
              <form className="mt-6 w-[80%] lg:w-96 space-y-4">
                <div className="flex gap-4">
                <input
                  type="FirstName"
                  name="FirstName"
                  className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  placeholder="First Name"
                />

                <input
                  type="LastName"
                  name="LastName"
                  className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  placeholder="Last Name"
                />
                </div>
                <div className="flex gap-4">
                <input
                  type="MobileNO."
                  name="MobileNO."
                  className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  placeholder="Mobile NO."
                />

                <input
                  type="Age"
                  name="Age"
                  className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  placeholder="Age"
                />
                </div>
                <input
                  type="Email"
                  name="Email"
                  className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  placeholder="Email"
                />

                <input
                  type="password"
                  name="password"
                  className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  placeholder="password"
                />
                <button className="mt-2 bg-blue-600 ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 hover:ring-gray-900/20 text-white hover:bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  Signup
                </button>
              </form>
              <div className="mt-4 text-white">
                Already have an account?
                <span className="text-blue-600 hover-text-blue-400 cursor-pointer">Log in here</span>
              </div>
            </div>

            {/* Image section */}
            <div className="flex w-1/2 justify-center item-center">
              <img
                className="hidden lg:block w-[80%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 animate-pulse"
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Signup;