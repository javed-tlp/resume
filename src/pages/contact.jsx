import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [value, setValue] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('access_key', 'a8f92459-6c6f-4139-856f-a63b451fe731');
    formData.append('name', value.name);
    formData.append('email', value.email);
    formData.append('message', value.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        toast(result.message, { type: "success" });
        setValue({ name: "", email: "", message: "" });
      } else {
        toast(result.message || 'Mail not sent', { type: "error" });
      }
    } catch (error) {
      toast('Mail not sent', { type: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-transparent m-2 p-2 sm:h-3/4 sm:w-3/5 sm:mt-4 grid gap-8 grid-cols-1 md:grid-cols-2 bg-gray-100 shadow-orange-500 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div className="sm:mt-20">
            <h2 className="text-lg sm:text-4xl lg:text-5xl font-bold leading-tight">
              Let's Talk!
            </h2>
            <div className="mt-8">Connect with me on social handles</div>
            <div className="flex mt-2 gap-2">
              <a href="https://github.com/javed-tlp" target="_blank" rel="noopener noreferrer" className="text-4xl">
                <AiFillGithub />
              </a>
              <a href="https://www.instagram.com/javed_saifi_0786/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <span className="uppercase text-sm font-bold">Full Name</span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-1 p-1 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm font-bold">Email</span>
            <input
              className="w-full bg-gray-300 mt-1 p-1 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={value.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 mt-1 p-1 rounded-lg focus:outline-none focus:shadow-outline"
              name="message"
              value={value.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-orange-600 text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
