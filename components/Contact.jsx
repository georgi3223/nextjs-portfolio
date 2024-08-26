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

        </div>
      </div>
    </div>
  );
};

export default Contact;
