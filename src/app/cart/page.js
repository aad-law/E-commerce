'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';

// Sample cart data (will be replaced with global state/API)
const initialCartItems = [
    { id: 1, name: 'Classic Diamond Nosepin', price: 1499, quantity: 2, image: '/images/products/nosepin-1.jpg' },
    { id: 2, name: 'Gold Stud Earrings', price: 1999, quantity: 1, image: '/images/products/stud-1.jpg' },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQuantity = (id, delta) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 2000 ? 0 : 99;
    const total = subtotal + shipping;

    return (
        <div className={styles.cartPage}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Cart</span>
                    </nav>
                    <h1 className={styles.pageTitle}>Shopping Cart</h1>
                </div>
            </div>

            {/* Cart Content */}
            <section className={styles.cartSection}>
                <div className={styles.container}>
                    {cartItems.length === 0 ? (
                        <div className={styles.emptyCart}>
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven't added any items yet.</p>
                            <Link href="/shop" className={styles.btnPrimary}>
                                Continue Shopping <FiArrowRight />
                            </Link>
                        </div>
                    ) : (
                        <div className={styles.cartLayout}>
                            {/* Cart Items */}
                            <div className={styles.cartItems}>
                                <div className={styles.cartHeader}>
                                    <span>Product</span>
                                    <span>Price</span>
                                    <span>Quantity</span>
                                    <span>Total</span>
                                    <span></span>
                                </div>

                                {cartItems.map((item) => (
                                    <div key={item.id} className={styles.cartItem}>
                                        <div className={styles.itemProduct}>
                                            <div className={styles.itemImage}>
                                                <div className={styles.imagePlaceholder}>
                                                    {item.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div className={styles.itemDetails}>
                                                <h3>{item.name}</h3>
                                                <span className={styles.itemCategory}>Jewellery</span>
                                            </div>
                                        </div>

                                        <div className={styles.itemPrice}>₹{item.price}</div>

                                        <div className={styles.itemQuantity}>
                                            <button onClick={() => updateQuantity(item.id, -1)}>
                                                <FiMinus />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>
                                                <FiPlus />
                                            </button>
                                        </div>

                                        <div className={styles.itemTotal}>
                                            ₹{item.price * item.quantity}
                                        </div>

                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Cart Summary */}
                            <div className={styles.cartSummary}>
                                <h2>Order Summary</h2>

                                <div className={styles.summaryRow}>
                                    <span>Subtotal</span>
                                    <span>₹{subtotal}</span>
                                </div>

                                <div className={styles.summaryRow}>
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                                </div>

                                {shipping > 0 && (
                                    <p className={styles.freeShippingNote}>
                                        Add ₹{2000 - subtotal} more for free shipping!
                                    </p>
                                )}

                                <div className={styles.summaryTotal}>
                                    <span>Total</span>
                                    <span>₹{total}</span>
                                </div>

                                <Link href="/checkout" className={styles.checkoutBtn}>
                                    Proceed to Checkout <FiArrowRight />
                                </Link>

                                <Link href="/shop" className={styles.continueLink}>
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
