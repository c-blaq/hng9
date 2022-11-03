import React from "react";
import PageLayout from "../../Layout/layout";

const Contact = () => {
  return (
    <PageLayout>
      <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you in mind.</p>
        <form>
          <label htmlFor="first_name">
            First name
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </label>

          <label htmlFor="last_name">
            Last name
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" id="email" placeholder="yourname@gmail.com" />
          </label>

          <label htmlFor="message">
            Message
            <textarea id="message" cols="30" rows="10" className="border">
              Send me a message and I'll reply you as soon as possible
            </textarea>
          </label>

          <label>
            <input type="checkbox" />
            You agree to providing your data to Fathi who may contact you.
          </label>

          <button id="btn__submit">Submit</button>
        </form>
      </div>
    </PageLayout>
  );
};

export default Contact;
