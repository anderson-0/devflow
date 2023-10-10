import mongoose from 'mongoose';
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', false);
  if (!process.env.MONGODB_URL) {
    return console.log('Missing MongoDB URL');
  }

  if (isConnected) {
    return console.log('=> using existing database connection');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow"
    });
    isConnected = true;
    console.log('MongoDB is connected');
  } catch (error) {
    console.log('MongoDB connection unsuccessful', error);
  }
};