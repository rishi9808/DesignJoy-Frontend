import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";
import SubscriptionForm from "./SubscriptionForm";
import TwitterIcon from "../assets/Footer/twitter.png";
import FacebookIcon from "../assets/Footer/facebook.png";
import InstagramIcon from "../assets/Footer/instagram.png";
import GMBIcon from "../assets/Footer/my-business.png";
import LinkedInIcon from "../assets/Footer/linkedin.png";

// import logo1 from "../assets/Marquee/1.svg"
// import logo2 from "../assets/Marquee/2.svg"
// import logo3 from "../assets/Marquee/3.svg"
// import logo4 from "../assets/Marquee/4.svg"
// import logo5 from "../assets/Marquee/5.svg"

// import footerImg from "../assets/Footer/footer-img.svg"
import logo from "../assets/Footer/logo-bl-bg.jpg";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <footer className={styles.footer} id="footer">
      <div
        className={styles.footer__cta_section}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="50"
      >
        <h2 className={styles.footer__cta_heading}>
          See if Designsvault is right for you. (It totally is.)
        </h2>
        <p className={styles.footer__cta_subheading}></p>
        <button
          className={styles.footer__cta_button}
          onClick={handleOpenModal}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          Join Waitlist
        </button>
      </div>
      <div className={styles.footer__top}>
        {/* <div className={styles.footer__clients}>
                    <img src={logo1} alt="Memberstack" className={styles.footer__client_logo} />
                    <img src={logo2} alt="nectar" className={styles.footer__client_logo} />
                    <img src={logo3} alt="ASTRO" className={styles.footer__client_logo} />
                    <img src={logo4} alt="xfinity" className={styles.footer__client_logo} />
                    <img src={logo5} alt="cometchat" className={styles.footer__client_logo} />
                </div> */}
      </div>
      <div
        className={styles.footer__bottom}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-offset="30"
      >
        <div
          className={styles.footer__brand_location}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="20"
        >
          <div className={styles.footer__brand}>
            <img
              src={logo}
              alt="Designsvault Logo"
              className={styles.footer__logo}
            />
          </div>
          <div className={styles.footer__location}>
            {/* <img src={footerImg} alt="Location Icon" className={styles.footer__location_icon} /> */}
            {/* <span>An initiative by Fimkin Advertising</span> */}
            <span>A Digital Creek (FZE) venture</span>
          </div>
          {/* social icons */}
          <div className={styles.footer__social_icons}>
            <a
              href="https://x.com/ThedesignV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={TwitterIcon}
                alt="Twitter"
                className={styles.footer__social_icon}
              />
            </a>
            <a
              href="https://www.facebook.com/thedesignsvault.UAE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                className={styles.footer__social_icon}
              />
            </a>
            <a
              href="https://www.instagram.com/thedesignsvaultuae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className={styles.footer__social_icon}
              />
            </a>
            <a
              href="https://g.co/kgs/eayxmTJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GMBIcon}
                alt="Google My Business"
                className={styles.footer__social_icon}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/the-designs-vault-uae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                className={styles.footer__social_icon}
              />
            </a>
          </div>
        </div>
        <div
          className={styles.footer__links}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="500"
          data-aos-offset="20"
        >
          <ul className={styles.footer__links_list}>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
          <ul className={styles.footer__links_list}>
            <li>
              <a href="#howwework">How we work</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <SubscriptionForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </footer>
  );
};

export default Footer;
