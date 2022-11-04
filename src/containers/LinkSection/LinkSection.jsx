import React from "react";
import "./index.css";

const LinkSection = () => {
  return (
    <section>
      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </a>
      <a href="http://books.zuri.team/" id="books">
        Zuri Books
        <sub>This is where you find books about design and coding.</sub>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=fathi"
        id="book__python"
      >
        Python Books
        <sub>
          You are just diving into python? Trust me, this is the book to get
          started as it explains the concept of Python programming smoothly
          without confusion. You don't believe right? Check it out to confirm!
        </sub>
      </a>
      <a href="https://background.zuri.team/" id="pitch">
        Background check for Coders
        <sub>
          Are you thinking of getting a coder but you have this doubt about the
          person? <br /> Worry not, we have your back, check out our website to
          run a background check.
        </sub>
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design">
        Design Books
        <sub>
          Hey you! Yes you, the good looking designer. Check out this Free
          Design Book offered by Zuri to broaden your knowlegde on design
          principles.
        </sub>
      </a>

      <a href="/contact" id="contact">
        Contact Me
      </a>
    </section>
  );
};

export default LinkSection;
