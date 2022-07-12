import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "TRololooo BEST DEVEloper EVER",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
