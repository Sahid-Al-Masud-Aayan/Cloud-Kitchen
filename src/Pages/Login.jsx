import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/login.jpg')] bg-cover bg-center flex justify-center items-center">
      <form className="md:w-[420px] w-[350px] bg-white/30 backdrop-blur-lg p-10 rounded-2xl mt-20">
                <h1 className="text-center font-bold text-3xl mb-5 text-[#000b4d]">Welcome Back!</h1>

                {/*=========================== Name =============================*/}

                {/*=========================== Subject =============================*/}

                <p className="font-semibold text-white mb-1">Email</p>
                
                <input className="contInp w-full p-3 outline-none mb-5 transition-all bg-transparent border-b-2 border-b-white text-white" type="email"/>
               {/*=========================== Message =============================*/}

                <p className="font-semibold text-white mb-1">Password</p>
                
                <input className="contInp w-full p-3 outline-none transition-all bg-transparent border-b-2 border-b-white text-white" type="password"/>
                <br />
                <br />
                <button className="w-full mt-5 bg-black text-white h-[50px] rounded-full font-black text-xl hover:bg-[#595959] duration-200 active:scale-[1.1]">Login</button>
                <br />
                <br />
                <p className="font-medium text-[15px] text-center text-[#0c143f]">Don't have an account? <Link className="text-red-950">Register</Link></p>
            </form>
    </div>
  )
}

export default Login
