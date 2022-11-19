import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    orderItems: [ {
        name: { type: String, required: true },
        qty: { type: Number, required: true, default: 0 },
        image: { type: String, required: true },
        finalPrice: { type: Number, required: true, default: 0 },
        product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' }
    }],
    taxAddress: { type: Schema.Types.ObjectId, required: true, ref: 'Address' },
    shippingAddress: { type: Schema.Types.ObjectId, required: true, ref: 'Address' },
    paymentMethod: { type: String, required: true },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
    },
    taxPercent: { type: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    discountPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isSent: { type: Boolean, required: true, default: false },
    sentAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;