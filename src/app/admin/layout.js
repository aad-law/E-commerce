'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import {
    FiHome,
    FiPackage,
    FiShoppingBag,
    FiUsers,
    FiSettings,
    FiMenu,
    FiX,
    FiLogOut,
    FiFileText
} from 'react-icons/fi';

const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: FiHome },
    { name: 'Products', href: '/admin/products', icon: FiPackage },
    { name: 'Orders', href: '/admin/orders', icon: FiShoppingBag },
    { name: 'Customers', href: '/admin/customers', icon: FiUsers },
    { name: 'Invoices', href: '/admin/invoices', icon: FiFileText },
    { name: 'Settings', href: '/admin/settings', icon: FiSettings },
];

export default function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={styles.adminLayout}>
            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <Link href="/admin" className={styles.logo}>
                        <span className={styles.logoIcon}>N</span>
                        <span className={styles.logoText}>Admin</span>
                    </Link>
                    <button
                        className={styles.closeSidebar}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FiX />
                    </button>
                </div>

                <nav className={styles.sidebarNav}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.navLink}
                            onClick={() => setSidebarOpen(false)}
                        >
                            <item.icon />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className={styles.sidebarFooter}>
                    <Link href="/" className={styles.navLink}>
                        <FiLogOut />
                        <span>Back to Store</span>
                    </Link>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className={styles.mainContent}>
                <header className={styles.topbar}>
                    <button
                        className={styles.menuBtn}
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FiMenu />
                    </button>
                    <h1 className={styles.pageTitle}>Admin Panel</h1>
                    <div className={styles.adminInfo}>
                        <span>Admin</span>
                    </div>
                </header>

                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}
