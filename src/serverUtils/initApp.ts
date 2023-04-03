import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI ?? '';

const initDbConnection = async () => await mongoose.connect(MONGO_URI);

export const initApp = () => {
  initDbConnection().then(() => console.log('Connected to mongo'));
};
