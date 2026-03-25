import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const dbUri = 'your_mongodb_connection_string';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World! This is the Express server.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});