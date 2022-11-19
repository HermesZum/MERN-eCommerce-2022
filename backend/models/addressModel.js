import mongoose from 'mongoose';
const { Schema } = mongoose;

const addressSchema = new Schema( {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    region: { type: String, required: true },
    country: { type: String, required: true },
    note: { type: String, required: false },
    taxNumber: { type: String, required: false },
    isTaxAddress: { type: Boolean, required: true, default: false, unique: true }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

export default Address;