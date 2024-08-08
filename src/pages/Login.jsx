import React from 'react'

const Login = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <section className="max_padd_container flex flex-col items-center pt-32">
        <div className="max-w-[555px] h-auto bg-white m-auto px-6 py-10 shadow-md">
          <h3 className="text-2xl font-bold mb-7">Sign Up</h3>
          <div className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          </div>
          <button className="bg-gray-900 text-white py-4 w-full rounded-md my-6 hover:bg-gray-800 transition">
            Continue
          </button>
          <p className="text-black font-bold">
            Already have an account? <span className="text-orange-500 underline cursor-pointer">Login</span>
          </p>
          <div className="flex items-center mt-6 gap-3">
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


