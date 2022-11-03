import React from "react";
import PageLayout from "../../Layout/layout";

const Contact = () => {
  return (
    <PageLayout>
      <div className="text-left">
        <h1 className="font-semibold text-3xl text-gray-900">Contact Me</h1>
        <p className="text-lg mt-4 text-gray-600">
          Hi there, contact me to ask me about anything you in mind.
        </p>
        <form className="mt-12 mb-20 flex flex-col gap-6">
          <label
            htmlFor="first_name"
            className="text-gray-700 text-sm font-medium"
          >
            First name
            <input
              className="w-full mt-1 border border-gray-300 py-2 px-3 rounded-lg"
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </label>

          <label
            htmlFor="last_name"
            className="text-gray-700 text-sm font-medium"
          >
            Last name
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              className="w-full mt-1 border border-gray-300 py-2 px-3 rounded-lg"
            />
          </label>

          <label htmlFor="email" className="text-gray-700 text-sm font-medium">
            Email
            <input
              type="email"
              id="email"
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
              placeholder=" Send me a message and I'll reply you as soon as possible"
              className="border border-gray-300 mt-1 w-full h-[132px]"
            ></textarea>
          </label>

          <div className="text-gray-700 text-left m-0 flex items-stretch text-sm font-medium">
            <input type="checkbox" className="h-fit mt-1" />
            <span className="px-3 text-gray-600">
              You agree to providing your data to Fathi who may contact you.
            </span>
          </div>

          <button
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
