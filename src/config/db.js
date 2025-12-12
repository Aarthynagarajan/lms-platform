const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI not defined in .env');
    await mongoose.connect(uri, {
      // options removed — defaults are fine for modern drivers
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database Connection Error:', error.message || error);
    process.exit(1);
  }
};

module.exports = connectDB;
