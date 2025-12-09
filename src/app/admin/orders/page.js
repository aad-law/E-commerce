'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FiEye, FiDownload, FiSearch, FiFilter } from 'react-icons/fi';

// Sample orders data
const orders = [
    { id: 'NAG001234', customer: 'Priya Sharma', email: 'priya@email.com', items: 3, amount: 4997, status: 'delivered', date: '2024-01-15', payment: 'razorpay' },
    { id: 'NAG001235', customer: 'Anjali Patel', email: 'anjali@email.com', items: 1, amount: 1499, status: 'shipped', date: '2024-01-15', payment: 'upi' },
    { id: 'NAG001236', customer: 'Meera Desai', email: 'meera@email.com', items: 2, amount: 4599, status: 'processing', date: '2024-01-14', payment: 'cod' },
    { id: 'NAG001237', customer: 'Ritu Gupta', email: 'ritu@email.com', items: 1, amount: 1999, status: 'pending', date: '2024-01-14', payment: 'razorpay' },
    { id: 'NAG001238', customer: 'Sunita Joshi', email: 'sunita@email.com', items: 2, amount: 3499, status: 'delivered', date: '2024-01-13', payment: 'upi' },
    { id: 'NAG001239', customer: 'Kavita Singh', email: 'kavita@email.com', items: 4, amount: 5999, status: 'cancelled', date: '2024-01-12', payment: 'razorpay' },
];

export default function AdminOrders() {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const handleStatusChange = (orderId, newStatus) => {
        // TODO: Update order status via API
        console.log('Update order', orderId, 'to', newStatus);
    };

    const handleDownloadInvoice = async (order) => {
        // Dynamic import for PDF generation (client-side only)
        const { jsPDF } = await import('jspdf');

        const doc = new jsPDF();

        // Header
        doc.setFontSize(24);
        doc.setTextColor(201, 169, 98);
        doc.text('NAGAARE', 20, 25);
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text('Gold Jewellers', 20, 32);

        // Invoice Title
        doc.setFontSize(16);
        doc.setTextColor(0);
        doc.text('INVOICE', 150, 25);

        // Invoice Info
        doc.setFontSize(10);
        doc.text(`Invoice #: ${order.id}`, 150, 35);
        doc.text(`Date: ${order.date}`, 150, 42);

        // Divider
        doc.setDrawColor(200);
        doc.line(20, 50, 190, 50);

        // Bill To
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text('Bill To:', 20, 60);
        doc.setFontSize(10);
        doc.text(order.customer, 20, 68);
        doc.text(order.email, 20, 75);

        // Order Details
        doc.setFontSize(12);
        doc.text('Order Details', 20, 95);

        // Table Header
        doc.setFillColor(245, 245, 245);
        doc.rect(20, 102, 170, 10, 'F');
        doc.setFontSize(10);
        doc.text('Description', 25, 108);
        doc.text('Qty', 120, 108);
        doc.text('Amount', 160, 108);

        // Table Row
        doc.text(`Order ${order.id} - ${order.items} item(s)`, 25, 120);
        doc.text(`${order.items}`, 120, 120);
        doc.text(`₹${order.amount}`, 160, 120);

        // Totals
        doc.line(20, 130, 190, 130);
        doc.text('Subtotal:', 120, 140);
        doc.text(`₹${order.amount}`, 160, 140);
        doc.text('Shipping:', 120, 148);
        doc.text('FREE', 160, 148);
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Total:', 120, 158);
        doc.text(`₹${order.amount}`, 160, 158);

        // Footer
        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(100);
        doc.text('Thank you for your purchase!', 105, 200, { align: 'center' });
        doc.text('Nagaare Gold Jewellers | Deolali Camp, Nasik | +91 9923509016', 105, 207, { align: 'center' });

        // Save
        doc.save(`Invoice-${order.id}.pdf`);
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className={styles.ordersPage}>
            <div className={styles.header}>
                <div>
                    <h1>Orders</h1>
                    <p>Manage and track customer orders</p>
                </div>
            </div>

            {/* Filters */}
            <div className={styles.filters}>
                <div className={styles.searchBox}>
                    <FiSearch />
                    <input
                        type="text"
                        placeholder="Search by order ID or customer..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className={styles.statusSelect}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>

            {/* Orders Table */}
            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Items</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td><strong>{order.id}</strong></td>
                                    <td>
                                        <div>
                                            <span className={styles.customerName}>{order.customer}</span>
                                            <span className={styles.customerEmail}>{order.email}</span>
                                        </div>
                                    </td>
                                    <td>{order.items}</td>
                                    <td>₹{order.amount}</td>
                                    <td>
                                        <span className={styles.payment}>{order.payment.toUpperCase()}</span>
                                    </td>
                                    <td>
                                        <select
                                            className={`${styles.statusSelect} ${styles[order.status]}`}
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td>{order.date}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.viewBtn}
                                                title="View Order"
                                                onClick={() => setSelectedOrder(order)}
                                            >
                                                <FiEye />
                                            </button>
                                            <button
                                                className={styles.invoiceBtn}
                                                title="Download Invoice"
                                                onClick={() => handleDownloadInvoice(order)}
                                            >
                                                <FiDownload />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Order Detail Modal */}
            {selectedOrder && (
                <div className={styles.modalOverlay} onClick={() => setSelectedOrder(null)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <h2>Order Details</h2>
                        <div className={styles.orderDetail}>
                            <div className={styles.detailRow}>
                                <span>Order ID:</span>
                                <strong>{selectedOrder.id}</strong>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Customer:</span>
                                <strong>{selectedOrder.customer}</strong>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Email:</span>
                                <strong>{selectedOrder.email}</strong>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Items:</span>
                                <strong>{selectedOrder.items}</strong>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Amount:</span>
                                <strong>₹{selectedOrder.amount}</strong>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Payment:</span>
                                <strong>{selectedOrder.payment.toUpperCase()}</strong>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Status:</span>
                                <span className={`${styles.status} ${styles[selectedOrder.status]}`}>
                                    {selectedOrder.status}
                                </span>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Date:</span>
                                <strong>{selectedOrder.date}</strong>
                            </div>
                        </div>
                        <div className={styles.modalActions}>
                            <button
                                className={styles.invoiceBtnLarge}
                                onClick={() => handleDownloadInvoice(selectedOrder)}
                            >
                                <FiDownload /> Download Invoice
                            </button>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setSelectedOrder(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
