import React, { useState } from "react";
import PageLayout from "../../Layout/layout";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <PageLayout>
      <div className="text-left max-w-[720px] mx-auto">
        <h1 className="font-semibold text-3xl text-gray-900">Contact Me</h1>
        <p className="text-lg mt-4 text-gray-600">
          Hi there, contact me to ask me about anything you in mind.
        </p>
        <form className="mt-12 mb-20 flex flex-col gap-6">
          <div className="m-0 text-left flex flex-col gap-6 sm:flex-row">
            <label
              htmlFor="first_name"
              className="text-gray-700 sm:flex-1 text-sm font-medium"
            >
              First name
              <input
                type="text"
                id="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full mt-1 border border-gray-300 py-2 px-3 rounded-lg"
              />
            </label>

            <label
              htmlFor="last_name"
              className="text-gray-700 text-sm font-medium flex-1"
            >
              Last name
              <input
                type="text"
                id="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="w-full  mt-1 border border-gray-300 py-2 px-3 rounded-lg"
              />
            </label>
          </div>

          <label htmlFor="email" className="text-gray-700 text-sm font-medium">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@gmail.com"
              className="w-full mt-1 border border-gray-300 py-2 px-3 rounded-lg"
            />
          </label>

          <label
            htmlFor="message"
            className="text-gray-700 text-sm font-medium"
          >
            Message
            <textarea
              id="message"
              value={message}
              onChange={(e) => SetMessage(e.target.value)}
              placeholder="Send me a message and I'll reply you as soon as possible"
              className="border p-3 border-gray-300 mt-1 w-full h-[132px]"
            ></textarea>
          </label>

          <div className="text-gray-700 text-left m-0 flex items-stretch text-sm font-medium">
            <input
              type="checkbox"
              className="h-fit mt-1"
              onClick={() => setChecked(!checked)}
            />
            <span className="px-3 text-gray-600">
              You agree to providing your data to Fathi who may contact you.
            </span>
          </div>

          <button
            type="submit"
            id="btn__submit"
            className="w-full rounded-lg font-semibold bg-blue-600 py-3 text-white"
          >
            Send message
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default Contact;
