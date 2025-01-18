const mongoose = require('mongoose');

//Create Schema
const jobPost = new mongoose.Schema({
    companyId: { type: String },
    category: { type: String, required: true },
    jobTitle: { type: String, required: true },
    experience: { type: String, required: true },
    jobType: { type: String, required: true },
    vacancies: { type: String, required: true },
    jobLocation: { type: String, required: true },
    salary: { type: String, required: true },
    applyDate: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

const jobPostTable = mongoose.model('jobposts', jobPost);

module.exports = { jobPostTable };