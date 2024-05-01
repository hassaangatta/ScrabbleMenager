const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        const res = await mongoose.connect(url);
        console.log("MongoDB connected successfully");
        return res;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

module.exports = {
    connectDB,
};