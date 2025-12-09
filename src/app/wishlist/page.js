'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { FiHeart, FiShoppingBag, FiTrash2, FiArrowRight } from 'react-icons/fi';

// Sample wishlist data
const initialWishlist = [
    { id: 1, name: 'Classic Diamond Nosepin', price: 1999, salePrice: 1499, category: 'Nosepin' },
    { id: 2, name: 'Gold Stud Earrings', price: 2499, salePrice: 1999, category: 'Studs' },
    { id: 3, name: 'Pearl Nosepin', price: 1799, salePrice: null, category: 'Nosepin' },
];

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState(initialWishlist);

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    const moveToCart = (item) => {
        console.log('Move to cart:', item);
        removeFromWishlist(item.id);
    };

    return (
        <div className={styles.wishlistPage}>
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Wishlist</span>
                    </nav>
                    <h1 className={styles.pageTitle}>My Wishlist</h1>
                </div>
            </div>

            <section className={styles.wishlistSection}>
                <div className={styles.container}>
                    {wishlist.length === 0 ? (
                        <div className={styles.emptyWishlist}>
                            <FiHeart className={styles.emptyIcon} />
                            <h2>Your wishlist is empty</h2>
                            <p>Save items you love by clicking the heart icon</p>
                            <Link href="/shop" className={styles.btnPrimary}>
                                Start Shopping <FiArrowRight />
                            </Link>
                        </div>
                    ) : (
                        <>
                            <p className={styles.itemCount}>{wishlist.length} items in your wishlist</p>
                            <div className={styles.wishlistGrid}>
                                {wishlist.map((item) => (
                                    <div key={item.id} className={styles.wishlistCard}>
                                        <div className={styles.cardImage}>
                                            <div className={styles.imagePlaceholder}>{item.name.charAt(0)}</div>
                                            <button
                                                className={styles.removeBtn}
                                                onClick={() => removeFromWishlist(item.id)}
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                        <div className={styles.cardInfo}>
                                            <span className={styles.category}>{item.category}</span>
                                            <h3>{item.name}</h3>
                                            <div className={styles.price}>
                                                {item.salePrice ? (
                                                    <>
                                                        <span className={styles.originalPrice}>₹{item.price}</span>
                                                        <span className={styles.salePrice}>₹{item.salePrice}</span>
                                                    </>
                                                ) : (
                                                    <span>₹{item.price}</span>
                                                )}
                                            </div>
                                            <button
                                                className={styles.addToCartBtn}
                                                onClick={() => moveToCart(item)}
                                            >
                                                <FiShoppingBag /> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
