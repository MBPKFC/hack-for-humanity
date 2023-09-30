const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hackForHumanityACS');

module.exports = mongoose.connection;
