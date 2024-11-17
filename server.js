const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

// dotenv config
dotenv.config();

// Mongo connection
connectDB();

// Express app setup
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(errorHandler);

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/gemini', require('./routes/geminiRoutes'));

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
});
