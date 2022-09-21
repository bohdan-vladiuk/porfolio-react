import React from "react";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello I'm John!
          <br />
          Front End Developer
        </h1>
      </div>
      <Animate
        play
        duration={1}
        delay={1}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
      >
        <div className="contact">
          <div className="contact__button-wrapper">
            <button>Hire Me</button>
            <button>Resume</button>
          </div>
          <div className="contact__social-wrapper">
            <FaLinkedin size={32} />
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagram size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
