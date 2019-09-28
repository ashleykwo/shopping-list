const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const MONGO_URI = 'mongodb://ashley:ashley123@ds157487.mlab.com:57487/shopping-list';

const app = express();
const PORT = process.env.PORT || 4000;

// CORS
app.use(cors({ origin : "http://localhost:4000"}));

// Body Parser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api/items', require('./routes/items'));

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser : true , useUnifiedTopology : true });

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Run Server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));