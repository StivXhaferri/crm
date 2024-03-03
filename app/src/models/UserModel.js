import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: false
    }
});

let UserModel;

try {
    UserModel = mongoose.model('UserModel');
} catch {
    UserModel = mongoose.model('UserModel', userSchema);
}

export default UserModel;