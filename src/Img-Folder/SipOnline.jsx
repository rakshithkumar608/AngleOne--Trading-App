import React, { useState } from "react";
import img from "../assets/online-training.jpg";
import { IndianRupee } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const SipOnline = () => {
  const navigate = useNavigate();
  const steps = [
    {
      step: "1",
      text: (
        <>
          Log in to the Angel One app/website and click on{" "}
          <strong>'Mutual Funds'</strong>.
        </>
      ),
    },

    {
      step: "2",
      text: (
        <>Explore funds and select your preferred one after evaluating it.</>
      ),
    },

    {
      step: "3",
      text: <>On the fund page, enter the monthly amount and duration.</>,
    },

    {
      step: "4",
      text: (
        <>
          Click <strong>'Invest Now'</strong> to initiate the SIP process.
        </>
      ),
    },
  ];

  // const [phone, setPhone] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Phone Number:", phone);
  // };

  const [formData, setFormData] = useState({
    number: "",
  });

  const [errors, setErrors] = useState({
    number: "",
  });

  

  //regex pattern
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //clear errors when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validatedForm = () => {
    let newErrors = { number: "" };
    let isValid = true;

    //number validation
    if (!formData.number) {
      newErrors.number = "This field is Required";
      isValid = false;
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = "Enter the correct number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (validatedForm()) {
      console.log("Number correct", formData);
      console.log("Please Login your Account");
      navigate('/register')
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-12 w-full">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 w-full">
        How to Start a SIP Online with Angle One?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Steps section */}
        <div className="flex flex-col space-y-6 w-auto md:w-1/2">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-blue-600 text-white font-semibold px-6 py-6 flex flex-col items-center justify-center">
                <p className="text-2xl">Step</p>
                <p className="text-2xl font-bold">{item.step}</p>
              </div>
              <div className="flex-1 px-6 py-6 text-gray-800 font-semibold leading-relaxed text-xl">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Right img*/}
        <div className="w-full md:w-1/2 flex justify-center  ">
          <img
            src={img}
            alt="SIP online"
            className="w-[90%] md:w-[90%] lg:w-[100%] object-contain"
          />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto mt-20 border border-gray-100">
        {/* Left  */}
        <div className="flex items-center gap-3 bg-indigo-50 px-6 py-4 rounded-xl">
          <div className="flex items-center">
            <IndianRupee className="text-indigo-600 w-6 h-6 font-bold" />
            <span className="text-8xl font-bold text-indigo-600">0</span>
          </div>
          <div>
            <p className="text-indigo-700 font-bold text-3xl leading-tight">
              Commission
            </p>
            <p className="text-blue-500 text-sm">On Mutual Funds Investments</p>
          </div>
        </div>

        {/* Middle section */}
        <div className="flex flex-col">
          <h3 className="text-gray-900 font-semibold text-xl">
            Grow your wealth with SIP
          </h3>
          <p className="text-gray-500 text-sm mt-3">
            4,000+ Mutual Funds to choose from
          </p>
        </div>

        {/* Right section input */}
       <form
  className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto"
  onSubmit={handleGetStarted}
>
  <div className="w-full md:w-80">
    <div className="flex items-center border rounded-lg overflow-hidden">
      <span className="px-3 bg-gray-50 text-gray-600 border-r">+91</span>
      <input
        name="number"
        value={formData.number}
        onChange={handleChange}
        type="text"
        placeholder="Enter your Mobile no."
        className={`w-full  bg-white px-4 py-3 ${
          errors.number ? "border-red-500" : "border-white"
        }`}
      />
    </div>

    {/* 👇 Error message now appears directly below the input */}
    {errors.number && (
      <p className="text-red-500 text-xs mt-1 ml-2">{errors.number}</p>
    )}
  </div>

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition"
  >
    Start SIP Now
  </button>
</form>
      </div>
      
    </div>
  );
};

export default SipOnline;
