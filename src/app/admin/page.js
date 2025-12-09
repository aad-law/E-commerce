import styles from './page.module.css';
import { FiPackage, FiShoppingBag, FiUsers, FiDollarSign, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

// Sample data (will come from API)
const stats = [
    { title: 'Total Products', value: '156', icon: FiPackage, change: '+12', trend: 'up' },
    { title: 'Total Orders', value: '1,234', icon: FiShoppingBag, change: '+23%', trend: 'up' },
    { title: 'Total Customers', value: '892', icon: FiUsers, change: '+8%', trend: 'up' },
    { title: 'Revenue', value: '₹4,52,890', icon: FiDollarSign, change: '+15%', trend: 'up' },
];

const recentOrders = [
    { id: 'NAG001234', customer: 'Priya Sharma', amount: 2999, status: 'delivered', date: '2024-01-15' },
    { id: 'NAG001235', customer: 'Anjali Patel', amount: 1499, status: 'shipped', date: '2024-01-15' },
    { id: 'NAG001236', customer: 'Meera Desai', amount: 4599, status: 'processing', date: '2024-01-14' },
    { id: 'NAG001237', customer: 'Ritu Gupta', amount: 1999, status: 'pending', date: '2024-01-14' },
    { id: 'NAG001238', customer: 'Sunita Joshi', amount: 3499, status: 'delivered', date: '2024-01-13' },
];

const topProducts = [
    { name: 'Classic Diamond Nosepin', sales: 156, revenue: '₹2,34,156' },
    { name: 'Gold Stud Earrings', sales: 134, revenue: '₹2,67,866' },
    { name: 'Pearl Nosepin', sales: 98, revenue: '₹1,76,202' },
    { name: 'Ruby Studs', sales: 87, revenue: '₹1,65,213' },
];

export default function AdminDashboard() {
    return (
        <div className={styles.dashboard}>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.subtitle}>Welcome back! Here's what's happening with your store.</p>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                {stats.map((stat) => (
                    <div key={stat.title} className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <stat.icon />
                        </div>
                        <div className={styles.statContent}>
                            <span className={styles.statTitle}>{stat.title}</span>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={`${styles.statChange} ${stat.trend === 'up' ? styles.up : styles.down}`}>
                                {stat.trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className={styles.contentGrid}>
                {/* Recent Orders */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Recent Orders</h2>
                        <a href="/admin/orders">View All</a>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td><strong>{order.id}</strong></td>
                                        <td>{order.customer}</td>
                                        <td>₹{order.amount}</td>
                                        <td>
                                            <span className={`${styles.status} ${styles[order.status]}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Products */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Top Products</h2>
                        <a href="/admin/products">View All</a>
                    </div>
                    <div className={styles.productList}>
                        {topProducts.map((product, index) => (
                            <div key={product.name} className={styles.productItem}>
                                <span className={styles.productRank}>{index + 1}</span>
                                <div className={styles.productInfo}>
                                    <span className={styles.productName}>{product.name}</span>
                                    <span className={styles.productSales}>{product.sales} sales</span>
                                </div>
                                <span className={styles.productRevenue}>{product.revenue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
