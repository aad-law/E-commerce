import Link from 'next/link';
import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiYoutube,
    FiMail,
    FiPhone,
    FiMapPin
} from 'react-icons/fi';
import styles from './Footer.module.css';

const categoryLinks = [
    { name: 'Nosepin', href: '/collections/nosepin' },
    { name: 'Studs', href: '/collections/studs' },
    { name: 'New Arrivals', href: '/collections/new-arrivals' },
    { name: 'Best Sellers', href: '/collections/best-sellers' },
    { name: 'All Products', href: '/shop' },
];

const policyLinks = [
    { name: 'Shipping Policy', href: '/pages/shipping' },
    { name: 'Return Policy', href: '/pages/returns' },
    { name: 'Privacy Policy', href: '/pages/privacy' },
    { name: 'Terms of Service', href: '/pages/terms' },
];

const helpLinks = [
    { name: "FAQ's", href: '/pages/faqs' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* Newsletter Section */}
            <div className={styles.newsletter}>
                <div className={styles.container}>
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterText}>
                            <h3 className={styles.newsletterTitle}>Join Our Wholesale Network</h3>
                            <p className={styles.newsletterDesc}>
                                Subscribe for exclusive wholesale offers and new arrivals
                            </p>
                        </div>
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.newsletterInput}
                            />
                            <button type="submit" className={styles.newsletterBtn}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className={styles.footerMain}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        {/* Brand Column */}
                        <div className={styles.footerColumn}>
                            <Link href="/" className={styles.footerLogo}>
                                <span className={styles.logoIcon}>N</span>
                                <span className={styles.logoName}>NAGAARE</span>
                            </Link>
                            <p className={styles.footerTagline}>
                                Wholesale of Premium Nosepin & Studs
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FiFacebook size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FiInstagram size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FiTwitter size={20} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FiYoutube size={20} />
                                </a>
                            </div>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactLink}>
                                    <FiMapPin size={16} />
                                    <span>Deolali Camp, Nasik</span>
                                </div>
                                <a href="tel:+919923509016" className={styles.contactLink}>
                                    <FiPhone size={16} />
                                    <span>+91 9923509016</span>
                                </a>
                                <a href="mailto:info@nagaare.com" className={styles.contactLink}>
                                    <FiMail size={16} />
                                    <span>info@nagaare.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Shop Column */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.footerHeading}>Shop</h4>
                            <ul className={styles.footerLinks}>
                                {categoryLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={styles.footerLink}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Help Column */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.footerHeading}>Quick Links</h4>
                            <ul className={styles.footerLinks}>
                                {helpLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={styles.footerLink}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Policy Column */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.footerHeading}>Policies</h4>
                            <ul className={styles.footerLinks}>
                                {policyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={styles.footerLink}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Owner Info */}
                            <div className={styles.ownerInfo}>
                                <h4 className={styles.footerHeading}>Proprietor</h4>
                                <p className={styles.ownerName}>Yogita Nagare</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className={styles.trustSection}>
                <div className={styles.container}>
                    <div className={styles.trustBadges}>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustIcon}>🔒</span>
                            <span>100% Secure Payments</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustIcon}>✨</span>
                            <span>Premium Quality</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustIcon}>🚚</span>
                            <span>Fast Delivery</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustIcon}>💎</span>
                            <span>Wholesale Prices</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <div className={styles.container}>
                    <div className={styles.copyrightContent}>
                        <p>© {currentYear} Nagaare Gold Jewellers. All rights reserved.</p>
                        <div className={styles.paymentMethods}>
                            <span>We Accept:</span>
                            <div className={styles.paymentIcons}>
                                <span>💳 Visa</span>
                                <span>💳 Mastercard</span>
                                <span>💳 UPI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
