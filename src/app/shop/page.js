import styles from './page.module.css';
import Link from 'next/link';
import { FiFilter, FiGrid, FiList, FiChevronDown, FiHeart, FiShoppingBag } from 'react-icons/fi';

// Sample product data
const products = [
    { id: 1, name: 'Classic Diamond Nosepin', price: 1999, salePrice: 1499, category: 'Nosepin', isNew: true },
    { id: 2, name: 'Gold Stud Earrings', price: 2499, salePrice: 1999, category: 'Studs', isBestseller: true },
    { id: 3, name: 'Pearl Nosepin', price: 1799, salePrice: null, category: 'Nosepin' },
    { id: 4, name: 'Diamond Stud Set', price: 3999, salePrice: 2999, category: 'Studs', isNew: true },
    { id: 5, name: 'Ruby Nosepin', price: 2299, salePrice: 1899, category: 'Nosepin' },
    { id: 6, name: 'Emerald Studs', price: 2799, salePrice: null, category: 'Studs' },
    { id: 7, name: 'Minimalist Nosepin', price: 999, salePrice: 799, category: 'Nosepin', isBestseller: true },
    { id: 8, name: 'Floral Gold Studs', price: 3299, salePrice: 2699, category: 'Studs' },
    { id: 9, name: 'Traditional Nosepin', price: 1599, salePrice: null, category: 'Nosepin' },
    { id: 10, name: 'Solitaire Studs', price: 4999, salePrice: 3999, category: 'Studs', isNew: true },
    { id: 11, name: 'Tear Drop Nosepin', price: 1899, salePrice: 1599, category: 'Nosepin' },
    { id: 12, name: 'Cluster Diamond Studs', price: 5499, salePrice: 4499, category: 'Studs' },
];

export default function ShopPage() {
    return (
        <div className={styles.shopPage}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Shop</span>
                    </nav>
                    <h1 className={styles.pageTitle}>All Products</h1>
                    <p className={styles.pageDesc}>
                        Browse our complete collection of premium nosepins and studs
                    </p>
                </div>
            </div>

            {/* Shop Content */}
            <div className={styles.shopContent}>
                <div className={styles.container}>
                    <div className={styles.shopLayout}>
                        {/* Sidebar Filters */}
                        <aside className={styles.sidebar}>
                            <div className={styles.filterSection}>
                                <h3 className={styles.filterTitle}>Categories</h3>
                                <ul className={styles.filterList}>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> All Products
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Nosepin
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Studs
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.filterSection}>
                                <h3 className={styles.filterTitle}>Price Range</h3>
                                <ul className={styles.filterList}>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Under ₹1,000
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> ₹1,000 - ₹2,000
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> ₹2,000 - ₹3,000
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Above ₹3,000
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.filterSection}>
                                <h3 className={styles.filterTitle}>Material</h3>
                                <ul className={styles.filterList}>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Gold
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Diamond
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Pearl
                                        </label>
                                    </li>
                                    <li className={styles.filterItem}>
                                        <label>
                                            <input type="checkbox" /> Ruby
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <main className={styles.mainContent}>
                            {/* Toolbar */}
                            <div className={styles.toolbar}>
                                <div className={styles.resultCount}>
                                    Showing {products.length} products
                                </div>
                                <div className={styles.toolbarActions}>
                                    <select className={styles.sortSelect}>
                                        <option>Sort by: Featured</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest First</option>
                                    </select>
                                    <div className={styles.viewToggle}>
                                        <button className={styles.viewBtn + ' ' + styles.active}>
                                            <FiGrid />
                                        </button>
                                        <button className={styles.viewBtn}>
                                            <FiList />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className={styles.productGrid}>
                                {products.map((product) => (
                                    <div key={product.id} className={styles.productCard}>
                                        <div className={styles.productImage}>
                                            <div className={styles.productPlaceholder}>
                                                <span>{product.name.charAt(0)}</span>
                                            </div>
                                            {product.isNew && <span className={styles.badgeNew}>New</span>}
                                            {product.isBestseller && <span className={styles.badgeBest}>Bestseller</span>}
                                            <div className={styles.productActions}>
                                                <button className={styles.actionBtn}><FiHeart /></button>
                                                <button className={styles.actionBtn}><FiShoppingBag /></button>
                                            </div>
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

                            {/* Pagination */}
                            <div className={styles.pagination}>
                                <button className={styles.pageBtn}>Previous</button>
                                <button className={styles.pageBtn + ' ' + styles.active}>1</button>
                                <button className={styles.pageBtn}>2</button>
                                <button className={styles.pageBtn}>3</button>
                                <button className={styles.pageBtn}>Next</button>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
