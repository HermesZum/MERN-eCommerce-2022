import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema( {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    image: { type: String, required: true, },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    coupon: { type: Schema.Types.ObjectId, required: false, ref: 'Coupon' },
    reviews: [ { type: Schema.Types.ObjectId, required: true, ref: 'Review' } ],
    rating: { type: Number, required: true, default: 0.0 },
    numReviews: { type: Number, required: true, default: 0 },
    originalPrice: { type: Number, required: true, default: 0.0 },
    discountPercent: { type: Number, required: true, default: 0.0 },
    countInStock: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;