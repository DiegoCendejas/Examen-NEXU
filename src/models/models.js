import { Schema, model } from 'mongoose';

const carModel = model('carModel', Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },
    average_price: {
        type: Number,
        required: true
    },
    brand_name: {
        type: String,
        required: true,
        unique: true
    },
}, {
    collection: 'models',
    versionKey: false
}));

export default carModel;