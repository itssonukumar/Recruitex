// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expressFileupload = require('express-fileupload');
// s // Load environment variables

// Import routes
const { recruiterRoute } = require('./routes/recruiterRoute');
const { seekerRoute } = require('./routes/seekerRoute');
const { adminRoute } = require('./routes/adminRoute');

// Instances
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON data
app.use(cors()); // Enable CORS
app.use(expressFileupload({ 
    limits: { fileSize: 50 * 1024 * 1024 }, // Max file size: 50MB
    abortOnLimit: true, // Abort upload if file is too large
}));
app.use('/upload', express.static('./backend/uploads')); // Serve uploaded files

// Database Connectivity
const Dbconnect = async () => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/recruitex");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
Dbconnect();

// Routes
app.use('/api', recruiterRoute); // Recruiter routes
app.use('/api', seekerRoute); // Seeker routes
app.use('/api', adminRoute); // Admin routes

// Start Server
const PORT =   8000;
app.listen(PORT, () => {
    console.log(`Server is running on port - ${PORT}`);
});

// Graceful Shutdown
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    mongoose.connection.close().then(() => {
        console.log('MongoDB connection closed');
        process.exit(0); // Exit the process
    });
});
