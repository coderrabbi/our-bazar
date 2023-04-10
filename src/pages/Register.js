import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const Register = () => {
  const [value, setValue] = useState();
  console.log(value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phoneNumber = value;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    const userInfo = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    console.log(phoneNumber, password);
    const phoneNumberRegex = /^(?:(?:\+|00)88|01)?(?:\d{11}|\d{13})$/;

    if (phoneNumberRegex.test(phoneNumber)) {
      const { data } = await axiosInstance.post("/api/register", userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(data);
    } else {
      toast.error("Invalid Bangladeshi phone number");
    }
  };
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0  md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-5">
            Let's Get Started <br /> Please Register
          </h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Phone Number</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                defaultCountry="BD"
                onChange={setValue}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                autoFocus
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full block bg-primary hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <p className="mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-yellow-700 font-semibold"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
