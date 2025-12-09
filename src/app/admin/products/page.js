'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiFilter, FiImage } from 'react-icons/fi';

// Sample products data
const initialProducts = [
    { id: 1, name: 'Classic Diamond Nosepin', category: 'Nosepin', price: 1999, salePrice: 1499, stock: 50, status: 'active' },
    { id: 2, name: 'Gold Stud Earrings', category: 'Studs', price: 2499, salePrice: 1999, stock: 35, status: 'active' },
    { id: 3, name: 'Pearl Nosepin', category: 'Nosepin', price: 1799, salePrice: null, stock: 0, status: 'out_of_stock' },
    { id: 4, name: 'Ruby Studs', category: 'Studs', price: 2299, salePrice: 1899, stock: 28, status: 'active' },
    { id: 5, name: 'Minimalist Nosepin', category: 'Nosepin', price: 999, salePrice: 799, stock: 100, status: 'active' },
];

export default function AdminProducts() {
    const [products, setProducts] = useState(initialProducts);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        category: 'Nosepin',
        price: '',
        salePrice: '',
        stock: '',
        description: '',
    });

    const handleOpenModal = (product = null) => {
        if (product) {
            setEditingProduct(product);
            setFormData({
                name: product.name,
                category: product.category,
                price: product.price,
                salePrice: product.salePrice || '',
                stock: product.stock,
                description: '',
            });
        } else {
            setEditingProduct(null);
            setFormData({ name: '', category: 'Nosepin', price: '', salePrice: '', stock: '', description: '' });
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingProduct(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingProduct) {
            // Update product
            setProducts(products.map(p =>
                p.id === editingProduct.id
                    ? { ...p, ...formData, status: formData.stock > 0 ? 'active' : 'out_of_stock' }
                    : p
            ));
        } else {
            // Add new product
            const newProduct = {
                id: Date.now(),
                ...formData,
                price: parseFloat(formData.price),
                salePrice: formData.salePrice ? parseFloat(formData.salePrice) : null,
                stock: parseInt(formData.stock),
                status: parseInt(formData.stock) > 0 ? 'active' : 'out_of_stock',
            };
            setProducts([newProduct, ...products]);
        }

        handleCloseModal();
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.productsPage}>
            <div className={styles.header}>
                <div>
                    <h1>Products</h1>
                    <p>Manage your product inventory</p>
                </div>
                <button className={styles.addBtn} onClick={() => handleOpenModal()}>
                    <FiPlus /> Add Product
                </button>
            </div>

            {/* Filters */}
            <div className={styles.filters}>
                <div className={styles.searchBox}>
                    <FiSearch />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className={styles.filterBtns}>
                    <button className={styles.filterBtn}>
                        <FiFilter /> Filter
                    </button>
                </div>
            </div>

            {/* Products Table */}
            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className={styles.productCell}>
                                            <div className={styles.productImage}>
                                                <FiImage />
                                            </div>
                                            <span>{product.name}</span>
                                        </div>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>₹{product.price}</td>
                                    <td>{product.salePrice ? `₹${product.salePrice}` : '-'}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <span className={`${styles.status} ${styles[product.status]}`}>
                                            {product.status === 'active' ? 'Active' : 'Out of Stock'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.editBtn}
                                                onClick={() => handleOpenModal(product)}
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                className={styles.deleteBtn}
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Product Modal */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label>Product Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="Enter product name"
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Category *</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        required
                                    >
                                        <option value="Nosepin">Nosepin</option>
                                        <option value="Studs">Studs</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Stock *</label>
                                    <input
                                        type="number"
                                        value={formData.stock}
                                        onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                        required
                                        min="0"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Price (₹) *</label>
                                    <input
                                        type="number"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        required
                                        min="0"
                                        placeholder="1999"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Sale Price (₹)</label>
                                    <input
                                        type="number"
                                        value={formData.salePrice}
                                        onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                                        min="0"
                                        placeholder="Optional"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={3}
                                    placeholder="Product description..."
                                />
                            </div>

                            <div className={styles.modalActions}>
                                <button type="button" className={styles.cancelBtn} onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className={styles.submitBtn}>
                                    {editingProduct ? 'Update Product' : 'Add Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
