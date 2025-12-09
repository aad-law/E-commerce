'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contactPage}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Contact Us</span>
                    </nav>
                    <h1 className={styles.pageTitle}>Contact Us</h1>
                    <p className={styles.pageDesc}>
                        Have questions? We would love to hear from you!
                    </p>
                </div>
            </div>

            {/* Contact Content */}
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <h2>Get in Touch</h2>
                            <p>
                                For wholesale inquiries, orders, or any questions, feel free to reach out to us.
                            </p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiMapPin /></div>
                                    <div>
                                        <strong>Address</strong>
                                        <p>Deolali Camp, Nasik, Maharashtra, India</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiPhone /></div>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>
                                            <a href="tel:+919923509016">+91 9923509016</a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiMail /></div>
                                    <div>
                                        <strong>Email</strong>
                                        <p>
                                            <a href="mailto:info@nagaare.com">info@nagaare.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiClock /></div>
                                    <div>
                                        <strong>Business Hours</strong>
                                        <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.ownerBox}>
                                <strong>Proprietor</strong>
                                <span>Yogita Nagare</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.contactForm}>
                            <h2>Send us a Message</h2>

                            {success ? (
                                <div className={styles.successMessage}>
                                    <span>✓</span>
                                    <p>Thank you for contacting us! We will get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {error && <div className={styles.errorMessage}>{error}</div>}

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email *</label>
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
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 9876543210"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="subject">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Wholesale Inquiry"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                                        {loading ? 'Sending...' : <>Send Message <FiSend /></>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
