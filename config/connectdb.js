import mongoose from 'mongoose';

const connectdb = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB!');
  }).catch((error) => {
    console.error('MongoDB connection error:', error);
  });
};

export default connectdb;
