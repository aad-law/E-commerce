'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { FiHeart, FiShoppingBag, FiShare2, FiStar, FiMinus, FiPlus, FiChevronDown } from 'react-icons/fi';

// Sample product data (will be replaced with API data)
const product = {
    id: 1,
    name: 'Classic Diamond Nosepin',
    slug: 'classic-diamond-nosepin',
    description: 'A stunning classic diamond nosepin crafted with precision. This beautiful piece features a brilliant-cut diamond set in 18k gold, perfect for both everyday wear and special occasions. The timeless design ensures it complements any outfit.',
    price: 1999,
    salePrice: 1499,
    category: 'Nosepin',
    material: 'Gold',
    weight: '0.5g',
    images: [
        { url: '/images/products/nosepin-1.jpg', alt: 'Classic Diamond Nosepin - Front' },
        { url: '/images/products/nosepin-1-2.jpg', alt: 'Classic Diamond Nosepin - Side' },
    ],
    variations: [
        { name: 'Size', options: ['Small', 'Medium', 'Large'] },
        { name: 'Metal', options: ['18k Gold', '22k Gold'] },
    ],
    stock: 50,
    isNew: true,
    reviews: [
        { name: 'Priya', rating: 5, comment: 'Beautiful nosepin! Exactly as shown in the pictures.', date: '2024-01-15' },
        { name: 'Anjali', rating: 4, comment: 'Good quality, fast delivery. Happy with my purchase.', date: '2024-01-10' },
    ],
    averageRating: 4.5,
    numReviews: 25,
};

const relatedProducts = [
    { id: 2, name: 'Pearl Nosepin', price: 1799, salePrice: null, category: 'Nosepin' },
    { id: 3, name: 'Ruby Nosepin', price: 2299, salePrice: 1899, category: 'Nosepin' },
    { id: 4, name: 'Minimalist Nosepin', price: 999, salePrice: 799, category: 'Nosepin' },
    { id: 5, name: 'Traditional Nosepin', price: 1599, salePrice: null, category: 'Nosepin' },
];

export default function ProductPage({ params }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedVariations, setSelectedVariations] = useState({});
    const [activeTab, setActiveTab] = useState('description');

    const handleAddToCart = () => {
        console.log('Add to cart:', { product, quantity, variations: selectedVariations });
        // TODO: Add to cart state/API
    };

    const handleAddToWishlist = () => {
        console.log('Add to wishlist:', product.id);
        // TODO: Add to wishlist state/API
    };

    return (
        <div className={styles.productPage}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumbSection}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/shop">Shop</Link>
                        <span>/</span>
                        <Link href={`/collections/${product.category.toLowerCase()}`}>{product.category}</Link>
                        <span>/</span>
                        <span>{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Section */}
            <section className={styles.productSection}>
                <div className={styles.container}>
                    <div className={styles.productGrid}>
                        {/* Image Gallery */}
                        <div className={styles.imageGallery}>
                            <div className={styles.mainImage}>
                                <div className={styles.imagePlaceholder}>
                                    <span>{product.name.charAt(0)}</span>
                                </div>
                                {product.isNew && <span className={styles.badge}>New</span>}
                            </div>
                            <div className={styles.thumbnails}>
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <div className={styles.thumbPlaceholder}>{index + 1}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className={styles.productInfo}>
                            <span className={styles.category}>{product.category}</span>
                            <h1 className={styles.productName}>{product.name}</h1>

                            {/* Rating */}
                            <div className={styles.rating}>
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className={i < Math.floor(product.averageRating) ? styles.starFilled : ''}
                                        />
                                    ))}
                                </div>
                                <span>({product.numReviews} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className={styles.price}>
                                {product.salePrice ? (
                                    <>
                                        <span className={styles.originalPrice}>₹{product.price}</span>
                                        <span className={styles.salePrice}>₹{product.salePrice}</span>
                                        <span className={styles.discount}>
                                            {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.currentPrice}>₹{product.price}</span>
                                )}
                            </div>

                            <p className={styles.shortDesc}>{product.description.slice(0, 150)}...</p>

                            {/* Variations */}
                            <div className={styles.variations}>
                                {product.variations.map((variation) => (
                                    <div key={variation.name} className={styles.variationGroup}>
                                        <label>{variation.name}</label>
                                        <div className={styles.variationOptions}>
                                            {variation.options.map((option) => (
                                                <button
                                                    key={option}
                                                    className={`${styles.variationBtn} ${selectedVariations[variation.name] === option ? styles.selected : ''
                                                        }`}
                                                    onClick={() =>
                                                        setSelectedVariations({ ...selectedVariations, [variation.name]: option })
                                                    }
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className={styles.addToCart}>
                                <div className={styles.quantityControl}>
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                        <FiMinus />
                                    </button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}>
                                        <FiPlus />
                                    </button>
                                </div>

                                <button className={styles.addBtn} onClick={handleAddToCart}>
                                    <FiShoppingBag /> Add to Cart
                                </button>

                                <button className={styles.wishlistBtn} onClick={handleAddToWishlist}>
                                    <FiHeart />
                                </button>
                            </div>

                            {/* Stock Status */}
                            <p className={styles.stockStatus}>
                                {product.stock > 0 ? (
                                    <span className={styles.inStock}>✓ In Stock ({product.stock} available)</span>
                                ) : (
                                    <span className={styles.outOfStock}>Out of Stock</span>
                                )}
                            </p>

                            {/* Product Meta */}
                            <div className={styles.productMeta}>
                                <div><strong>Material:</strong> {product.material}</div>
                                <div><strong>Weight:</strong> {product.weight}</div>
                                <div><strong>SKU:</strong> NAG-{product.id.toString().padStart(4, '0')}</div>
                            </div>

                            <button className={styles.shareBtn}>
                                <FiShare2 /> Share
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className={styles.tabsSection}>
                <div className={styles.container}>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'description' ? styles.active : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'reviews' ? styles.active : ''}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Reviews ({product.numReviews})
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {activeTab === 'description' && (
                            <div className={styles.description}>
                                <p>{product.description}</p>
                                <h3>Product Features</h3>
                                <ul>
                                    <li>Premium quality {product.material.toLowerCase()}</li>
                                    <li>Handcrafted with precision</li>
                                    <li>Comfortable for all-day wear</li>
                                    <li>Certificate of authenticity included</li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className={styles.reviews}>
                                {product.reviews.map((review, index) => (
                                    <div key={index} className={styles.reviewCard}>
                                        <div className={styles.reviewHeader}>
                                            <strong>{review.name}</strong>
                                            <div className={styles.reviewStars}>
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FiStar key={i} className={styles.starFilled} />
                                                ))}
                                            </div>
                                        </div>
                                        <p>{review.comment}</p>
                                        <span className={styles.reviewDate}>{review.date}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className={styles.relatedSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>You May Also Like</h2>
                    <div className={styles.relatedGrid}>
                        {relatedProducts.map((item) => (
                            <div key={item.id} className={styles.productCard}>
                                <div className={styles.cardImage}>
                                    <div className={styles.cardPlaceholder}>{item.name.charAt(0)}</div>
                                </div>
                                <div className={styles.cardInfo}>
                                    <span className={styles.cardCategory}>{item.category}</span>
                                    <h3>{item.name}</h3>
                                    <div className={styles.cardPrice}>
                                        {item.salePrice ? (
                                            <>
                                                <span className={styles.cardOriginal}>₹{item.price}</span>
                                                <span className={styles.cardSale}>₹{item.salePrice}</span>
                                            </>
                                        ) : (
                                            <span>₹{item.price}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
