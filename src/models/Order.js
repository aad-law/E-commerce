import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        name: String,
        price: Number,
        quantity: Number,
        variation: {
            type: Map,
            of: String,
        },
        image: String,
    }],
    shippingAddress: {
        name: String,
        phone: String,
        street: String,
        city: String,
        state: String,
        pincode: String,
    },
    billingAddress: {
        name: String,
        phone: String,
        street: String,
        city: String,
        state: String,
        pincode: String,
    },
    paymentMethod: {
        type: String,
        enum: ['razorpay', 'cod', 'upi', 'card'],
        required: true,
    },
    paymentResult: {
        id: String,
        status: String,
        razorpay_order_id: String,
        razorpay_payment_id: String,
        razorpay_signature: String,
    },
    itemsTotal: {
        type: Number,
        required: true,
    },
    shippingCost: {
        type: Number,
        default: 0,
    },
    taxAmount: {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    paidAt: Date,
    orderStatus: {
        type: String,
        enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
    },
    trackingNumber: String,
    deliveredAt: Date,
    notes: String,
}, {
    timestamps: true,
});

// Generate order number before saving
OrderSchema.pre('save', async function (next) {
    if (this.isNew) {
        const count = await mongoose.models.Order.countDocuments();
        this.orderNumber = `NAG${Date.now().toString().slice(-6)}${(count + 1).toString().padStart(4, '0')}`;
    }
    next();
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
