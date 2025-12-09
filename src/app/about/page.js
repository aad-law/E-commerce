import styles from './page.module.css';
import Link from 'next/link';
import { FiAward, FiUsers, FiTruck, FiShield } from 'react-icons/fi';

export const metadata = {
  title: 'About Us | Nagaare Gold Jewellers',
  description: 'Learn about Nagaare Gold Jewellers - Premium wholesale of nosepin and studs in Deolali Camp, Nasik.',
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </nav>
          <h1 className={styles.pageTitle}>About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.logoLarge}>N</span>
                <span className={styles.logoText}>NAGAARE</span>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.subtitle}>Welcome to</span>
              <h2 className={styles.title}>Nagaare Gold Jewellers</h2>
              <p className={styles.text}>
                Nagaare Gold Jewellers is a trusted name in the wholesale jewellery industry,
                specializing in premium quality nosepins and studs. Based in Deolali Camp, Nasik,
                we have been serving jewellers and retailers across India with authentic gold
                jewellery at competitive wholesale prices.
              </p>
              <p className={styles.text}>
                Our commitment to quality, craftsmanship, and customer satisfaction has made us
                a preferred choice for businesses looking for reliable gold jewellery suppliers.
                We take pride in offering a wide range of designs that cater to both traditional
                and modern tastes.
              </p>
              <div className={styles.ownerCard}>
                <div className={styles.ownerInfo}>
                  <strong>Proprietor</strong>
                  <span>Yogita Nagare</span>
                </div>
                <div className={styles.ownerInfo}>
                  <strong>Location</strong>
                  <span>Deolali Camp, Nasik</span>
                </div>
                <div className={styles.ownerInfo}>
                  <strong>Contact</strong>
                  <span>+91 9923509016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiAward />
              </div>
              <h3>Premium Quality</h3>
              <p>Every piece is crafted with precision using the finest materials and authentic gold.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiUsers />
              </div>
              <h3>Trusted Partner</h3>
              <p>Years of experience serving jewellers across India with consistent quality and service.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiTruck />
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping across India to ensure your inventory never runs low.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiShield />
              </div>
              <h3>Wholesale Prices</h3>
              <p>Competitive pricing that helps your business grow with better profit margins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Partner With Us?</h2>
            <p>Contact us for wholesale inquiries and special bulk pricing</p>
            <div className={styles.ctaButtons}>
              <a href="tel:+919923509016" className={styles.btnPrimary}>
                📞 Call Now: 9923509016
              </a>
              <Link href="/contact" className={styles.btnSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
