const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGO_URI = 'mongodb://ashley:ashley123@ds157487.mlab.com:57487/shopping-list';

const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api/items', require('./routes/items'));

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser : true , useUnifiedTopology : true });

// Run Server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));