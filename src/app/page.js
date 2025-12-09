import styles from './page.module.css';
import Link from 'next/link';
import { FiArrowRight, FiStar, FiTruck, FiShield, FiAward } from 'react-icons/fi';

// Sample product data (will be replaced with API data later)
const featuredProducts = [
  {
    id: 1,
    name: 'Classic Diamond Nosepin',
    price: 1999,
    salePrice: 1499,
    image: '/images/products/nosepin-1.jpg',
    category: 'Nosepin',
    isNew: true,
  },
  {
    id: 2,
    name: 'Gold Stud Earrings',
    price: 2499,
    salePrice: 1999,
    image: '/images/products/stud-1.jpg',
    category: 'Studs',
    isBestseller: true,
  },
  {
    id: 3,
    name: 'Pearl Nosepin',
    price: 1799,
    salePrice: null,
    image: '/images/products/nosepin-2.jpg',
    category: 'Nosepin',
  },
  {
    id: 4,
    name: 'Diamond Stud Set',
    price: 3999,
    salePrice: 2999,
    image: '/images/products/stud-2.jpg',
    category: 'Studs',
    isNew: true,
  },
];

const categories = [
  {
    name: 'Nosepin',
    image: '/images/categories/nosepin.jpg',
    href: '/collections/nosepin',
    description: 'Elegant nose pins for every occasion',
  },
  {
    name: 'Studs',
    image: '/images/categories/studs.jpg',
    href: '/collections/studs',
    description: 'Premium quality gold studs',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Excellent quality nosepins! The designs are beautiful and the gold quality is top-notch. Will definitely order again.',
  },
  {
    name: 'Anjali Patel',
    location: 'Pune',
    rating: 5,
    text: 'Best wholesale prices in the market. Their studs collection is amazing. Fast delivery and great customer service.',
  },
  {
    name: 'Meera Desai',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Been ordering from Nagaare for 2 years now. Consistent quality and always on-time delivery. Highly recommended!',
  },
];

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Premium Gold Jewellery</span>
          <h1 className={styles.heroTitle}>
            Exquisite <span className={styles.highlight}>Nosepin</span> & <span className={styles.highlight}>Studs</span>
          </h1>
          <p className={styles.heroDesc}>
            Discover our exclusive collection of premium quality gold nosepins and studs at wholesale prices
          </p>
          <div className={styles.heroCtas}>
            <Link href="/shop" className={styles.btnPrimary}>
              Shop Now <FiArrowRight />
            </Link>
            <Link href="/collections" className={styles.btnSecondary}>
              View Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className={styles.trustBar}>
        <div className={styles.container}>
          <div className={styles.trustItems}>
            <div className={styles.trustItem}>
              <FiShield className={styles.trustIcon} />
              <span>100% Genuine Gold</span>
            </div>
            <div className={styles.trustItem}>
              <FiTruck className={styles.trustIcon} />
              <span>Fast Pan-India Delivery</span>
            </div>
            <div className={styles.trustItem}>
              <FiAward className={styles.trustIcon} />
              <span>Premium Quality</span>
            </div>
            <div className={styles.trustItem}>
              <FiStar className={styles.trustIcon} />
              <span>Wholesale Prices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={styles.categoryCard}
              >
                <div className={styles.categoryImage}>
                  <div className={styles.categoryPlaceholder}>
                    <span>{category.name.charAt(0)}</span>
                  </div>
                </div>
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <p className={styles.categoryDesc}>{category.description}</p>
                  <span className={styles.categoryLink}>
                    Explore <FiArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.section + ' ' + styles.bgLight}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <div className={styles.productPlaceholder}>
                    <span>{product.name.charAt(0)}</span>
                  </div>
                  {product.isNew && <span className={styles.badgeNew}>New</span>}
                  {product.isBestseller && <span className={styles.badgeBest}>Bestseller</span>}
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productCategory}>{product.category}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.productPrice}>
                    {product.salePrice ? (
                      <>
                        <span className={styles.priceOriginal}>₹{product.price}</span>
                        <span className={styles.priceSale}>₹{product.salePrice}</span>
                      </>
                    ) : (
                      <span className={styles.priceCurrent}>₹{product.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/shop" className={styles.btnPrimary}>
              View All Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.aboutTag}>About Us</span>
              <h2 className={styles.aboutTitle}>Nagaare Gold Jewellers</h2>
              <p className={styles.aboutText}>
                Welcome to Nagaare Gold Jewellers, your trusted wholesale partner for premium quality
                nosepins and studs. Based in Deolali Camp, Nasik, we have been serving jewellers
                across India with authentic gold jewellery at competitive wholesale prices.
              </p>
              <p className={styles.aboutText}>
                Our commitment to quality and customer satisfaction has made us a preferred choice
                for retailers looking for reliable gold jewellery suppliers.
              </p>
              <div className={styles.aboutOwner}>
                <strong>Proprietor:</strong> Yogita Nagare
              </div>
              <Link href="/about" className={styles.btnSecondary}>
                Learn More <FiArrowRight />
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.aboutPlaceholder}>
                <span className={styles.logoLarge}>N</span>
                <span>NAGAARE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section + ' ' + styles.bgDark}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle + ' ' + styles.textWhite}>What Our Customers Say</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className={styles.starFilled} />
                  ))}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Order?</h2>
            <p className={styles.ctaDesc}>
              Contact us today for wholesale inquiries and special bulk pricing
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:+919923509016" className={styles.btnPrimary}>
                📞 Call: 9923509016
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
