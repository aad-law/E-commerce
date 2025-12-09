'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown
} from 'react-icons/fi';
import styles from './Header.module.css';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  {
    name: 'Categories',
    href: '/collections',
    submenu: [
      { name: 'Nosepin', href: '/collections/nosepin' },
      { name: 'Studs', href: '/collections/studs' },
      { name: 'All Products', href: '/collections/all' },
    ]
  },
  { name: 'New Arrivals', href: '/collections/new-arrivals', highlight: true },
  { name: 'Best Sellers', href: '/collections/best-sellers' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className={styles.announcementBar}>
        <div className={styles.announcementContent}>
          <span>✨ Wholesale Nosepin & Studs | Premium Quality Gold Jewellery</span>
          <span className={styles.announcementDivider}>|</span>
          <span>Fast Shipping Across India</span>
          <span className={styles.announcementDivider}>|</span>
          <span>📞 9923509016</span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContainer}>
          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>N</span>
            <div className={styles.logoTextWrap}>
              <span className={styles.logoText}>NAGAARE</span>
              <span className={styles.logoSubtext}>Gold Jewellers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className={styles.navItem}
                onMouseEnter={() => item.submenu && setActiveSubmenu(index)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${item.highlight ? styles.highlight : ''}`}
                >
                  {item.name}
                  {item.submenu && <FiChevronDown className={styles.chevron} />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeSubmenu === index && (
                  <div className={styles.dropdown}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={styles.dropdownLink}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className={styles.headerActions}>
            {/* Search */}
            <button
              className={styles.actionBtn}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>

            {/* Account */}
            <Link href="/account" className={styles.actionBtn} aria-label="Account">
              <FiUser size={20} />
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className={styles.actionBtn} aria-label="Wishlist">
              <FiHeart size={20} />
              {wishlistCount > 0 && (
                <span className={styles.badge}>{wishlistCount}</span>
              )}
            </Link>

            {/* Cart */}
            <Link href="/cart" className={styles.actionBtn} aria-label="Cart">
              <FiShoppingBag size={20} />
              {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className={styles.searchOverlay}>
            <div className={styles.searchContainer}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search for nosepin, studs..."
                className={styles.searchInput}
                autoFocus
              />
              <button
                className={styles.searchClose}
                onClick={() => setIsSearchOpen(false)}
              >
                <FiX size={20} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {navigationItems.map((item, index) => (
            <div key={item.name} className={styles.mobileNavItem}>
              {item.submenu ? (
                <>
                  <button
                    className={styles.mobileNavLink}
                    onClick={() => handleSubmenuToggle(index)}
                  >
                    {item.name}
                    <FiChevronDown
                      className={`${styles.mobileChevron} ${activeSubmenu === index ? styles.rotated : ''}`}
                    />
                  </button>
                  {activeSubmenu === index && (
                    <div className={styles.mobileSubmenu}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={styles.mobileSubmenuLink}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
