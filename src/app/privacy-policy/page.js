import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Nagaare Gold Jewellers',
    description: 'Privacy Policy for Nagaare Gold Jewellers - How we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.policyPage}>
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Privacy Policy</span>
                    </nav>
                    <h1 className={styles.pageTitle}>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last Updated: January 2025</p>
                </div>
            </div>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.policyContent}>
                        <h2>1. Information We Collect</h2>
                        <p>At Nagaare Gold Jewellers, we collect information you provide directly to us, including:</p>
                        <ul>
                            <li>Name, email address, phone number, and shipping address when you place an order</li>
                            <li>Payment information (processed securely through our payment partners)</li>
                            <li>Communication preferences and correspondence with us</li>
                            <li>Information you provide when creating an account</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process and fulfill your orders</li>
                            <li>Send order confirmations and shipping updates</li>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Send promotional communications (with your consent)</li>
                            <li>Improve our services and website experience</li>
                        </ul>

                        <h2>3. Information Sharing</h2>
                        <p>We do not sell your personal information. We may share your information with:</p>
                        <ul>
                            <li>Payment processors to complete transactions</li>
                            <li>Shipping partners to deliver your orders</li>
                            <li>Service providers who assist our operations</li>
                            <li>Legal authorities when required by law</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information. Payment transactions are encrypted using SSL technology. However, no method of transmission over the Internet is 100% secure.</p>

                        <h2>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access and update your personal information</li>
                            <li>Request deletion of your account and data</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Request a copy of your data</li>
                        </ul>

                        <h2>6. Cookies</h2>
                        <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>

                        <h2>7. Contact Us</h2>
                        <p>For privacy-related questions, contact us at:</p>
                        <p><strong>Nagaare Gold Jewellers</strong><br />
                            Deolali Camp, Nasik<br />
                            Phone: +91 9923509016<br />
                            Email: info@nagaare.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
