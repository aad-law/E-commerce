import styles from '../privacy-policy/page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service | Nagaare Gold Jewellers',
    description: 'Terms of Service for Nagaare Gold Jewellers - Terms and conditions for using our website and services.',
};

export default function TermsPage() {
    return (
        <div className={styles.policyPage}>
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Terms of Service</span>
                    </nav>
                    <h1 className={styles.pageTitle}>Terms of Service</h1>
                    <p className={styles.lastUpdated}>Last Updated: January 2025</p>
                </div>
            </div>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.policyContent}>
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using the Nagaare Gold Jewellers website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

                        <h2>2. Products and Pricing</h2>
                        <p>All products are subject to availability. We reserve the right to:</p>
                        <ul>
                            <li>Limit quantities of products</li>
                            <li>Refuse any order without explanation</li>
                            <li>Correct pricing errors at any time</li>
                            <li>Discontinue products without notice</li>
                        </ul>
                        <p>Prices are in Indian Rupees (INR) and include applicable taxes unless stated otherwise.</p>

                        <h2>3. Orders and Payment</h2>
                        <p>When you place an order:</p>
                        <ul>
                            <li>You confirm that all information provided is accurate</li>
                            <li>Payment must be made at the time of order (except COD)</li>
                            <li>Order confirmation does not guarantee acceptance</li>
                            <li>We reserve the right to cancel orders due to errors or unavailability</li>
                        </ul>

                        <h2>4. Shipping and Delivery</h2>
                        <p>We ship across India. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs.</p>

                        <h2>5. Returns and Refunds</h2>
                        <ul>
                            <li>Returns accepted within 7 days of delivery</li>
                            <li>Products must be unused and in original packaging</li>
                            <li>Custom or personalized items cannot be returned</li>
                            <li>Refunds processed within 7-10 business days</li>
                        </ul>

                        <h2>6. Product Authenticity</h2>
                        <p>All our gold jewellery products are genuine and come with a certificate of authenticity where applicable. We guarantee the quality and purity of our gold products.</p>

                        <h2>7. Intellectual Property</h2>
                        <p>All content on this website, including images, text, logos, and designs, is the property of Nagaare Gold Jewellers and protected by copyright laws.</p>

                        <h2>8. Limitation of Liability</h2>
                        <p>Nagaare Gold Jewellers shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.</p>

                        <h2>9. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our website constitutes acceptance of updated terms.</p>

                        <h2>10. Contact Information</h2>
                        <p>For questions about these Terms of Service:</p>
                        <p><strong>Nagaare Gold Jewellers</strong><br />
                            Proprietor: Yogita Nagare<br />
                            Deolali Camp, Nasik<br />
                            Phone: +91 9923509016<br />
                            Email: info@nagaare.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
