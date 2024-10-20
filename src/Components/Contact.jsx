import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Components.css";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState("Submit");
  const [color, setColor] = useState("indigo");
  const sendEmail = (e) => {
    e.preventDefault();
    setSent("Loading...");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSent("Sent");
          setColor("green");
          console.log("SUCCESS!");
        },
        (error) => {
          setSent("Failed");
          setColor("red");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="text-black body-font relative bg-[url('/src/Assets/2.jpg')]">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">
              Contact Us
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Get In Touch
            </p> */}
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {/* <div className="flex flex-wrap -m-2"> */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-white bg-opacity-40 rounded border  border-black text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_mail"
                    className="w-full bg-white bg-opacity-40 rounded border  border-black text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white bg-opacity-40 rounded border border-black   h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  style={{ backgroundColor: color }}
                  className="flex h-fit w-fit mx-auto text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                  value="Send"
                >
                  {sent}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
