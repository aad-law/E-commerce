'use client';

import { useState } from 'react';
import styles from '../../shop/page.module.css';
import Link from 'next/link';
import { FiGrid, FiList, FiHeart, FiShoppingBag, FiChevronDown } from 'react-icons/fi';

// Category page for Nosepin
const nosepinProducts = [
    { id: 1, name: 'Classic Diamond Nosepin', price: 1999, salePrice: 1499, isNew: true, isBestseller: false },
    { id: 2, name: 'Pearl Nosepin', price: 1799, salePrice: null, isNew: false, isBestseller: true },
    { id: 3, name: 'Ruby Nosepin', price: 2299, salePrice: 1899, isNew: false, isBestseller: false },
    { id: 4, name: 'Minimalist Nosepin', price: 999, salePrice: 799, isNew: true, isBestseller: false },
    { id: 5, name: 'Traditional Nosepin', price: 1599, salePrice: null, isNew: false, isBestseller: true },
    { id: 6, name: 'Emerald Nosepin', price: 2499, salePrice: 2199, isNew: true, isBestseller: false },
];

export default function NosepinPage() {
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');

    return (
        <div className={styles.shopPage}>
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/shop">Shop</Link>
                        <span>/</span>
                        <span>Nosepin</span>
                    </nav>
                    <h1 className={styles.pageTitle}>Nosepin Collection</h1>
                    <p className={styles.pageDesc}>Discover our exquisite range of gold nosepins</p>
                </div>
            </div>

            <section className={styles.shopSection}>
                <div className={styles.container}>
                    <div className={styles.shopLayout}>
                        {/* Sidebar Filters */}
                        <aside className={styles.sidebar}>
                            <div className={styles.filterGroup}>
                                <h3>Price Range</h3>
                                <div className={styles.filterOptions}>
                                    <label><input type="checkbox" /> Under ₹1000</label>
                                    <label><input type="checkbox" /> ₹1000 - ₹2000</label>
                                    <label><input type="checkbox" /> ₹2000 - ₹3000</label>
                                    <label><input type="checkbox" /> Above ₹3000</label>
                                </div>
                            </div>
                            <div className={styles.filterGroup}>
                                <h3>Material</h3>
                                <div className={styles.filterOptions}>
                                    <label><input type="checkbox" defaultChecked /> Gold</label>
                                    <label><input type="checkbox" /> Diamond</label>
                                    <label><input type="checkbox" /> Pearl</label>
                                    <label><input type="checkbox" /> Ruby</label>
                                </div>
                            </div>
                        </aside>

                        {/* Products */}
                        <main className={styles.mainContent}>
                            <div className={styles.toolbar}>
                                <span className={styles.productCount}>{nosepinProducts.length} products</span>
                                <div className={styles.toolbarActions}>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className={styles.sortSelect}
                                    >
                                        <option value="featured">Featured</option>
                                        <option value="price_asc">Price: Low to High</option>
                                        <option value="price_desc">Price: High to Low</option>
                                        <option value="newest">Newest</option>
                                    </select>
                                    <div className={styles.viewToggle}>
                                        <button
                                            className={viewMode === 'grid' ? styles.active : ''}
                                            onClick={() => setViewMode('grid')}
                                        >
                                            <FiGrid />
                                        </button>
                                        <button
                                            className={viewMode === 'list' ? styles.active : ''}
                                            onClick={() => setViewMode('list')}
                                        >
                                            <FiList />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.productGrid} ${viewMode === 'list' ? styles.listView : ''}`}>
                                {nosepinProducts.map((product) => (
                                    <div key={product.id} className={styles.productCard}>
                                        <div className={styles.productImage}>
                                            <div className={styles.imagePlaceholder}>{product.name.charAt(0)}</div>
                                            {product.isNew && <span className={styles.badge}>New</span>}
                                            {product.isBestseller && <span className={`${styles.badge} ${styles.bestseller}`}>Bestseller</span>}
                                            <div className={styles.productActions}>
                                                <button className={styles.actionBtn}><FiHeart /></button>
                                                <button className={styles.actionBtn}><FiShoppingBag /></button>
                                            </div>
                                        </div>
                                        <div className={styles.productInfo}>
                                            <span className={styles.productCategory}>Nosepin</span>
                                            <h3>{product.name}</h3>
                                            <div className={styles.productPrice}>
                                                {product.salePrice ? (
                                                    <>
                                                        <span className={styles.originalPrice}>₹{product.price}</span>
                                                        <span className={styles.salePrice}>₹{product.salePrice}</span>
                                                    </>
                                                ) : (
                                                    <span>₹{product.price}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
}
