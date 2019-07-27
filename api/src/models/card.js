import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema.Schema({
    title: String,
    description: String,
    done: Boolean,
    in: String,
    index: Number,
});

export const Card = mongoose.model('Card', cardSchema);