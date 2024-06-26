import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9r5wju",
        "template_o392psz",
        form.current,
        "zdqymqghi_r9DuGQW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); //resetne formulář při submitu
  };

  return (
    <section id="contact">
      <h5>Ozvěte se</h5>
      <h2>Kontaktujte mne</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>korinek14.j@gmail.com</h5>
            <a href="mailto:korinek14.j@gmail.com" target="_blank">
              Odeslat zprávu
            </a>
          </article>
          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jarda Kořínek</h5>
            <a href="https://m.me/jaroslav.korinek.750" target="_blank">
              Odeslat zprávu
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+420728716658"
              target="_blank"
            >
              Odeslat zprávu
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Vaše celé jméno"
            required
          />
          <input type="email" name="email" placeholder="Váš e-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Vaše zpráva"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Odeslat zprávu
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
