const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');


const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:4200', 
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  }));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Server is up and running');
  });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mean-auth')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
