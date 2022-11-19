import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
    product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
    reviewer: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, { timestamps: true });

const Review = mongoose.model('Product', reviewSchema);

export default Review;