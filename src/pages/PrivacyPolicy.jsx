import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from '../styles/privacyPolicy.module.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100,
      disable: false
    });
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.privacyContainer}>
      {/* Background decorative elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.backgroundShape1}></div>
        <div className={styles.backgroundShape2}></div>
        <div className={styles.backgroundShape3}></div>
      </div>

      <div className={styles.content}>
        {/* Header Section */}
        <header className={styles.header} data-aos="fade-down" data-aos-duration="800">
          <Link 
            to="/" 
            className={styles.backButton}
            data-aos="fade-right" 
            data-aos-duration="600" 
            data-aos-delay="200"
          >
            ← Back to Home
          </Link>
          
          <div className={styles.titleSection} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <h1 className={styles.mainTitle}>Privacy Policy</h1>
            <p className={styles.effectiveDate}>Effective Date: 01-07-2025</p>
            <p className={styles.subtitle}>
              Welcome to The Designs Vault. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <div className={styles.sectionContent}>
              <p>We may collect the following types of information:</p>
              <ul className={styles.infoList}>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  Personal Information (e.g., name, email, phone number) when you contact us or fill out a form.
                </li>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  Non-personal information such as browser type, pages visited, and time spent on the site.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <div className={styles.sectionContent}>
              <p>We may use the information we collect to:</p>
              <ul className={styles.infoList}>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  Respond to your inquiries or requests
                </li>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  Improve our website and services
                </li>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                  Send occasional emails or updates (only if you opt-in)
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>3. Cookies</h2>
            <div className={styles.sectionContent}>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings if you prefer.
              </p>
            </div>
          </section>

          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>4. Third-Party Services</h2>
            <div className={styles.sectionContent}>
              <p>
                We do not sell, trade, or share your personal information with third parties, except when required by law or for basic website functionality (e.g., analytics or contact forms).
              </p>
            </div>
          </section>

          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>5. Data Security</h2>
            <div className={styles.sectionContent}>
              <p>
                We take reasonable steps to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </div>
          </section>

          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>6. Your Rights</h2>
            <div className={styles.sectionContent}>
              <p>
                You may request access to the personal information we hold about you and request correction or deletion at any time.
              </p>
            </div>
          </section>

          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>7. Changes to This Policy</h2>
            <div className={styles.sectionContent}>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
              </p>
            </div>
          </section>

          <section className={styles.section} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h2 className={styles.sectionTitle}>8. Contact Us</h2>
            <div className={styles.sectionContent}>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className={styles.contactInfo} data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
                <strong>Email: thedesignsvault14@gmail.com</strong>
              </div>
            </div>
          </section>
        </main>

        {/* Footer CTA */}
        <div className={styles.footerCta} data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <Link to="/" className={styles.ctaButton}>
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
