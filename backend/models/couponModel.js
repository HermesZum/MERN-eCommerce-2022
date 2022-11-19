import mongoose from 'mongoose';
const { Schema } = mongoose;

const couponSchema = new Schema({
    code: { type: String, required: true, unique: true },
    discountPercent: { type: Number, required: true, default: 0.0 },
    expireDate: { type: Date, required: false }
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;