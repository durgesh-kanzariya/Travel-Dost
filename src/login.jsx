import React, { useState, useEffect } from "react";

export default function Login() {
    return (
        <>
            <center>
                <p className="text-center"><button>{"<="}</button> Back to Home</p>
                <div className="md:h-[450px]  md:w-[500px] h-auto w-auto rounded-2xl shadow-xl border-[1px] border-gray-300 shadow-gray-200 text-black md:mt-40 p-5 bg-white">
                    <h1 className=" text-3xl font-bold">Welcome Back</h1><br/>
                    <h4 className="text-[18px]">Sign in to continue your journey</h4><br></br>

                    <div className="text-start ml-5 ">
                        <label htmlFor="Email" className="font-semibold">Email</label><br />
                        <input type="text" placeholder="your@example.com" className=" placeholder:text-[17px]  pl-10 w-full h-12 focus:outline-blue-600 outline-1 outline-gray-300 rounded-xl" />
                    </div><br />

                    <div className="text-start ml-5">
                        <label htmlFor="Email" className="font-semibold">Password</label><br />
                        <input type="password" placeholder="......." className="text-xl placeholder:text-5xl     pl-10 w-full h-12 focus:outline-blue-600 outline-1 outline-gray-300 rounded-xl" />
                    </div><br />

                    <button className="w-[420px] bg-blue-500 text-xl text-white font-semibold h-12 rounded-xl">Sign In</button>


                    <br /> <br />
                    <p>Don't have an account? <a href="login.jsx" className="hover:text-blue-500 text-blue-700 font-semibold">Create Account</a></p>
                </div>
            </center>
        </>

    );
}

