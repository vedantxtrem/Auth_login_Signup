import React from 'react';



function Login() {
  return (
    <div className="bg-[#1e1e1e] font-mono">
      <div className="sm:h-screen sm:flex justify-center items-center">
        <div className="sm:flex w-full h-screen border-2 sm:h-[80%] sm:w-10/12 border-green-300 sm:scroll-m-1">
          
          <div className="flex justify-center items-center w-1/2">

            <img className="hidden lg:block w-8/12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src="" alt="" />

          </div>


          {/* Login section */}
          <div className="flex flex-col justify-center items-center  w-full lg:w-1/2">
            <div>
              <div className="text-xl font-bold text-center text-gray-200">
                <span className="text-gray-200">&#9650;</span>
                <span>SpaceX</span>
              </div>
              <div className="mt-10 font-bold text-3xl text-center text-gray-200">
                <h2>Hello,</h2>
                <h2>Welcome Back</h2>
              </div>
              {/* Login form */}
              <form action="" method="get" className="mt-10 w-[80%] lg:w-96 mx-auto space-y-4 text-gray-200">
                <h4>Login to manage your account</h4>

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
                <div className="text-blue-600 hover:text-blue-400">Forgot your password ?</div>
                <button
                  className="ring-1 mt-2 rounded-full w-full px-4 py-3 ring-gray-900/10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-600 hover:bg-blue-400 text-gray-200"
                >
                  Login
                </button>
              </form>
              
              <div className="text-center space-y-4 mt-4 text-gray-200">
                <span>OR</span>
                <div className="flex gap-8 justify-center items-center">
                  <i className="fa-brands fa-facebook text-2xl cursor-pointer"></i>
                  <i className="fa-brands fa-google text-2xl cursor-pointer"></i>
                  <i className="fa-brands fa-instagram text-2xl cursor-pointer"></i>
                </div>
              </div>
              <div className="mt-4 text-sm text-center text-gray-200">
                Don't have an account?
                <span className="text-blue-600 hover:text-blue-400 cursor-pointer">Sign Up here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;