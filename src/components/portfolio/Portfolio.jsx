import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pomodoro.png";
import IMG2 from "../../assets/kalkulacka.png";
import IMG3 from "../../assets/drum.png";
import IMG4 from "../../assets/markdownprev.png";
import IMG5 from "../../assets/random-quote-generator.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Pomodoro Timer",
    github: "https://github.com",
    demo: "https://korinekj.github.io/pomodoro-timer/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Calculator",
    github: "https://github.com",
    demo: "https://korinekj.github.io/javascript-calculator/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Drum Machine",
    github: "https://github.com",
    demo: "https://korinekj.github.io/drum-machine/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Markdown Previewer",
    github: "https://github.com",
    demo: "https://korinekj.github.io/markdown-previewer/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Random Quote Generator",
    github: "https://github.com",
    demo: "https://korinekj.github.io/random-quote-generator/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
