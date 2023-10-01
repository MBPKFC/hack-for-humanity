const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// serve up next.js front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/.next/static'));
});

module.exports = router;
