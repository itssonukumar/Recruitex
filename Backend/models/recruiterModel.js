const mongoose = require('mongoose');

//Create Schema
const recruiterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

const recruiterTable = mongoose.model('recruiters', recruiterSchema);

module.exports = { recruiterTable };