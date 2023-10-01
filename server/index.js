const express = require('express');
const path = require('path');
const cors = require('cors')
const db = require('./config/connection');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/.next')));
}

app.use(routes);
app.use("/home", (req, res) => {
  res.send("Server is running")
})

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});


