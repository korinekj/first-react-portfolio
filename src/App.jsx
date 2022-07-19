import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  //Funkce -> Zvýrazní aktuální sekci v Nav při scrollování stránkou
  const highlightNavLinkOnScroll = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((navItem) => {
      navItem.classList.remove("active");
      if (navItem.href === "http://localhost:3000/#" + current) {
        navItem.classList.add("active");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", highlightNavLinkOnScroll);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", highlightNavLinkOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
