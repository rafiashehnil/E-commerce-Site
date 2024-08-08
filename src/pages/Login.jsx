import React from 'react'

const Login = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12">
      <section className="flex flex-col items-center pt-8 sm:pt-16 lg:pt-32 w-full max-w-md lg:max-w-lg">
        <div className="bg-white w-full h-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-7 text-gray-900">Sign Up</h3>
          <div className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="h-12 sm:h-14 w-full pl-4 sm:pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="h-12 sm:h-14 w-full pl-4 sm:pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="h-12 sm:h-14 w-full pl-4 sm:pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          </div>
          <button className="bg-gray-900 text-white py-3 sm:py-4 w-full rounded-md my-4 sm:my-6 hover:bg-gray-800 transition">
            Continue
          </button>
          <p className="text-gray-900 font-bold text-sm sm:text-base text-center">
            Already have an account? <span className="text-orange-500 underline cursor-pointer">Login</span>
          </p>
          <div className="flex items-center mt-4 sm:mt-6 gap-3">
            <input type="checkbox" id="terms" className="accent-blue-600"/>
            <label htmlFor="terms" className="text-sm">
              By continuing, I agree to the terms of use & privacy policy
            </label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
