import React from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options"></div>
        <article className="contact__option">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>korinek14.j@gmail.com</h5>
          <a href="mailto:korinek14.j@gmail.com" target="_blank">
            Send a message
          </a>
        </article>
        <article className="contact__option">
          <SiMessenger />
          <h4>Messenger</h4>
          <h5>Jarda Kořínek</h5>
          <a href="https://m.me/" target="_blank">
            Send a message
          </a>
        </article>
        <article className="contact__option">
          <BsWhatsapp />
          <h4>WhatsApp</h4>
          <h5>korinek14.j@gmail.com</h5>
          <a
            href="https://api.whatsapp.com/send?phone=+420728716658"
            target="_blank"
          >
            Send a message
          </a>
        </article>
        {/* END OF CONTACT OPTIONS*/}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
