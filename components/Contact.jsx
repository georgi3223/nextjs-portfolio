import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const userID = 'YOUR_USER_ID';

      await emailjs.send(serviceID, templateID, formData, userID);
      setLoading(false);
      setSuccessMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <div id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.title}>Contact</p>
        <h2 className={styles.subtitle}>Get In Touch</h2>
        <div className={styles.gridContainer}>
          {/* Left Section */}
          <div className={styles.leftContainer}>
            <div className={styles.leftContent}>
              <div>
                <Image className={styles.contactImage} src={ContactImg} alt="/" />
              </div>
              <div>
                <h2 className={styles.name}>Georgi Nyagolov</h2>
                <p className={styles.role}>Web Developer</p>
                <p className={styles.availability}>
                  I am available for intern and junior positions. Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className={styles.connect}>Connect With Me</p>
                <div className={styles.iconsContainer}>
                  <a
                    href="https://www.linkedin.com/in/georgi-nyagolov-26668a23a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.icon}>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/georgi3223"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.icon}>
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.rightContainer}>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formField}>
                    <label className={styles.label}>Name</label>
                    <input
                      className={styles.input}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formField}>
                  <label className={styles.label}>Email</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.label}>Subject</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={styles.textarea}
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
              {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
