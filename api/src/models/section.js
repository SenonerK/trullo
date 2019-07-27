import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema.Schema({
    title: String,
    index: Number,
});

export const Section = mongoose.model('Section', sectionSchema);