'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { FiUser, FiLock, FiMail, FiPhone, FiEye, FiEyeOff } from 'react-icons/fi';

export default function AccountPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // TODO: Implement NextAuth signIn
            // const result = await signIn('credentials', {
            //   email: loginData.email,
            //   password: loginData.password,
            //   redirect: false,
            // });
            console.log('Login:', loginData);
            setSuccess('Login functionality will be implemented with NextAuth');
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (registerData.password !== registerData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: registerData.name,
                    email: registerData.email,
                    phone: registerData.phone,
                    password: registerData.password,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess('Registration successful! Please login.');
                setIsLogin(true);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.accountPage}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Account</span>
                    </nav>
                    <h1 className={styles.pageTitle}>{isLogin ? 'Login' : 'Create Account'}</h1>
                </div>
            </div>

            {/* Auth Form */}
            <section className={styles.authSection}>
                <div className={styles.container}>
                    <div className={styles.authCard}>
                        {/* Tabs */}
                        <div className={styles.authTabs}>
                            <button
                                className={`${styles.tab} ${isLogin ? styles.active : ''}`}
                                onClick={() => { setIsLogin(true); setError(''); setSuccess(''); }}
                            >
                                Login
                            </button>
                            <button
                                className={`${styles.tab} ${!isLogin ? styles.active : ''}`}
                                onClick={() => { setIsLogin(false); setError(''); setSuccess(''); }}
                            >
                                Register
                            </button>
                        </div>

                        {/* Messages */}
                        {error && <div className={styles.errorMessage}>{error}</div>}
                        {success && <div className={styles.successMessage}>{success}</div>}

                        {/* Login Form */}
                        {isLogin ? (
                            <form onSubmit={handleLoginSubmit} className={styles.authForm}>
                                <div className={styles.formGroup}>
                                    <label><FiMail /> Email</label>
                                    <input
                                        type="email"
                                        value={loginData.email}
                                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label><FiLock /> Password</label>
                                    <div className={styles.passwordInput}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                            required
                                            placeholder="••••••••"
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.forgotPassword}>
                                    <Link href="/forgot-password">Forgot Password?</Link>
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={loading}>
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </form>
                        ) : (
                            /* Register Form */
                            <form onSubmit={handleRegisterSubmit} className={styles.authForm}>
                                <div className={styles.formGroup}>
                                    <label><FiUser /> Full Name</label>
                                    <input
                                        type="text"
                                        value={registerData.name}
                                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label><FiMail /> Email</label>
                                    <input
                                        type="email"
                                        value={registerData.email}
                                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label><FiPhone /> Phone</label>
                                    <input
                                        type="tel"
                                        value={registerData.phone}
                                        onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                                        placeholder="+91 9876543210"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label><FiLock /> Password</label>
                                    <div className={styles.passwordInput}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={registerData.password}
                                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                                            required
                                            placeholder="••••••••"
                                            minLength={6}
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label><FiLock /> Confirm Password</label>
                                    <input
                                        type="password"
                                        value={registerData.confirmPassword}
                                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                                        required
                                        placeholder="••••••••"
                                        minLength={6}
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={loading}>
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
