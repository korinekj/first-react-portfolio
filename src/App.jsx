import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
// import Services from "./components/services/Services";
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  //
  /**
   * When the user scrolls, the function will check which section is currently in view and then add the
   * class 'active' to the corresponding nav link.
   */
  const highlightNavLinkOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((navItem) => {
      navItem.classList.remove('active');
      if (navItem.href === 'https://jardakorinek.cz/#' + current) {
        navItem.classList.add('active');
      }
    });
  };

  // Jako ComponentDidMount -> pouze při prvním renderu přidá EventListener ([])
  /* Adding an event listener to the window object. */
  useEffect(() => {
    window.addEventListener('scroll', highlightNavLinkOnScroll);

    /* Removing the event listener when the component unmounts. */
    return () => {
      window.removeEventListener('scroll', highlightNavLinkOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
