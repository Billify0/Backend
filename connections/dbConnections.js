const mongoose = require('mongoose');
const { MONGO_URL } = require('../config');

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.log('Error', err.message);

  }
}

module.exports = connectDB;