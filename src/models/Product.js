import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    shortDescription: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: 0,
    },
    salePrice: {
        type: Number,
        default: null,
    },
    category: {
        type: String,
        required: true,
        enum: ['Nosepin', 'Studs'],
    },
    images: [{
        url: String,
        alt: String,
    }],
    variations: [{
        name: String,      // e.g., "Size", "Material"
        options: [{
            value: String,   // e.g., "Small", "Gold"
            price: Number,   // optional price adjustment
            stock: Number,
        }],
    }],
    stock: {
        type: Number,
        default: 0,
        min: 0,
    },
    sku: {
        type: String,
        unique: true,
        sparse: true,
    },
    material: {
        type: String,
        enum: ['Gold', 'Diamond', 'Pearl', 'Ruby', 'Emerald', 'Other'],
        default: 'Gold',
    },
    weight: {
        type: String,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isNew: {
        type: Boolean,
        default: false,
    },
    isBestseller: {
        type: Boolean,
        default: false,
    },
    tags: [{
        type: String,
    }],
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        name: String,
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
        comment: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    averageRating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

// Create slug from name before saving
ProductSchema.pre('save', function (next) {
    if (this.isModified('name')) {
        this.slug = this.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
    next();
});

// Update average rating
ProductSchema.methods.updateAverageRating = function () {
    if (this.reviews.length === 0) {
        this.averageRating = 0;
        this.numReviews = 0;
    } else {
        const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        this.averageRating = sum / this.reviews.length;
        this.numReviews = this.reviews.length;
    }
};

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
