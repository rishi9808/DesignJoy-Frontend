import React, { useState, useEffect } from "react";
import styles from "../styles/subscriptionForm.module.css";

const SubscriptionForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
        name: '',
        phone: '+971',
        email: '',
        whatsapp: '+971',
        subscriptionType: 'individual',
        businessName: '',
        businessPhone: '+971',
        businessEmail: '',
        emirate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "loading", message: "Submitting your information..." });

    try {
      // Google Apps Script Web App URL - Replace with your actual deployed script URL
      // Follow the setup guide in GOOGLE_SHEETS_SETUP.md to get this URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx3GGsCRvzFUsXUOdpzsog-qVXwhdzkP47zdyWOijn-VQZoDz-I9pMqgEo32DpTO0QC/exec';
      
      // Prepare FormData for Google Sheets
      const formDataToSend = new FormData();
      formDataToSend.append('timestamp', new Date().toISOString());
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('whatsapp', formData.whatsapp);
      formDataToSend.append('subscriptionType', formData.subscriptionType);
      formDataToSend.append('businessName', formData.subscriptionType === 'business' ? formData.businessName : '');
      formDataToSend.append('businessPhone', formData.subscriptionType === 'business' ? formData.businessPhone : '');
      formDataToSend.append('businessEmail', formData.subscriptionType === 'business' ? formData.businessEmail : '');
      formDataToSend.append('emirate', formData.subscriptionType === 'business' ? formData.emirate : '');

      // Submit to Google Sheets using FormData
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      // Since mode is 'no-cors', we can't read the response
      // But we assume success if no error is thrown
      setSubmitStatus({ 
        type: "success", 
        message: `Welcome to the waitlist, ${formData.name}! We'll be in touch soon with exclusive updates.` 
      });
      setIsSubmitted(true);
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        onClose();
        // Reset states when closing
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "+971",
          email: "",
          whatsapp: "+971",
          subscriptionType: "individual",
          businessName: "",
          businessPhone: "+971",
          businessEmail: "",
          emirate: "",
        });
        setSubmitStatus({ type: "", message: "" });
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: "error", 
        message: "Oops! Something went wrong. Please check your connection and try again." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    
        if (value.startsWith('+971')) {
            setFormData({ ...formData, [name]: value });
        } else if (value === '+97') {
            setFormData({ ...formData, [name]: '+971' });
        } else if (value === '+9' || value === '+' || value === '') {
            setFormData({ ...formData, [name]: '+971' });
        } else {
            if (!value.startsWith('+')) {
                setFormData({ ...formData, [name]: '+971' + value.replace(/\D/g, '') });
            } else {
                setFormData({ ...formData, [name]: value });
            }
        }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close form"
        >
          &times;
        </button>
        <div className={styles.decorElements}>
          <div className={styles.decorCircle}></div>
          <div className={styles.decorSquare}></div>
          <div className={styles.decorTriangle}></div>
        </div>
        
        {isSubmitted ? (
          // Success view
          <div className={styles.successView}>
            <h2 className={styles.modalTitle}>Welcome Aboard!</h2>
            <div className={`${styles.statusMessage} ${styles.success} ${styles.successOnly}`}>
              {submitStatus.message}
            </div>
            <p className={styles.successSubtext}>
              You'll receive an email confirmation shortly. We're excited to have you on our journey!
            </p>
          </div>
        ) : (
          // Form view
          <>
            <h2 className={styles.modalTitle}>Join Waitlist</h2>
            <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              placeholder="+971 58 939 7426"
              title="Please enter a valid UAE phone number starting with +971 (e.g., +971 58 939 7426)"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="whatsapp">WhatsApp</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handlePhoneChange}
              required
              placeholder="+971 58 939 7426"
              title="Please enter a valid UAE WhatsApp number starting with +971 (e.g., +971 58 939 7426)"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Subscription Type</label>
            <div className={styles.radioGroup}>
              <label
                className={`${styles.radioLabel} ${
                  formData.subscriptionType === "individual"
                    ? styles.selected
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="subscriptionType"
                  value="individual"
                  checked={formData.subscriptionType === "individual"}
                  onChange={handleChange}
                />
                Individual
              </label>
              <label
                className={`${styles.radioLabel} ${
                  formData.subscriptionType === "business"
                    ? styles.selected
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="subscriptionType"
                  value="business"
                  checked={formData.subscriptionType === "business"}
                  onChange={handleChange}
                />
                Business
              </label>
            </div>
          </div>

          {formData.subscriptionType === "business" && (
            <div className={styles.businessSection}>
              <div className={styles.formGroup}>
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required={formData.subscriptionType === "business"}
                  placeholder="Your business name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="businessPhone">Business Phone</label>
                <input
                  type="tel"
                  id="businessPhone"
                  name="businessPhone"
                  value={formData.businessPhone}
                  onChange={handlePhoneChange}
                  required={formData.subscriptionType === "business"}
                  placeholder="+971 2 123 4567"
                  title="Please enter a valid UAE business phone number starting with +971 (e.g., +971 2 123 4567)"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="businessEmail">Business Email</label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  required={formData.subscriptionType === "business"}
                  placeholder="business@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="emirate">Emirate</label>
                <select
                  id="emirate"
                  name="emirate"
                  value={formData.emirate}
                  onChange={handleChange}
                  required={formData.subscriptionType === "business"}
                >
                  <option value="">Select an Emirate</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Ajman">Ajman</option>
                  <option value="Umm Al Quwain">Umm Al Quwain</option>
                  <option value="Fujairah">Fujairah</option>
                  <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                </select>
              </div>
            </div>
          )}

          {submitStatus.message && !isSubmitted && (
            <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
              {submitStatus.message}
            </div>
          )}

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining Waitlist...' : 'Join the Waitlist'}
          </button>
        </form>
        </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionForm;
