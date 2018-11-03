const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://localhost:27017/emailer-dev', { useNewUrlParser: true });

const app = express();

require('./routes/auth')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Server started at port ' + PORT);
