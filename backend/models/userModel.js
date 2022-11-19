import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema( {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    totalReviews: { type: Number, required: true, default: 0 },
    isAdmin: { type: Boolean, required: true, default: false }
}, { timestamps: true} );

const User = mongoose.model('User', userSchema);

export default User;